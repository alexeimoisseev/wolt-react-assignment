import moment from 'moment';

type OpeningHourItem = {
  type: string;
  value: number;
};

type OpeningHoursType = {
  [dayOfWeek: string]: OpeningHourItem[];
};

type OpeningHoursStringified = {
  [dayOfWeek: string]: string;
};

export const daysOfWeekSorted = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

function getPreviousIndex(index: number): number {
  if (index === 0) {
    return daysOfWeekSorted.length - 1;
  }
  return index - 1;
}

function getFormattedHour(time: number): string {
  return moment().startOf('day').add(time, 'second').format('h\u00A0A');
}

/*
 * Converts ['1 PM', '2 PM', '3 PM', '4 PM'] to '1 PM - 2 PM, 3 PM - 4 PM'
 */
function joinHoursToString(hours: string[]): string {
  return hours.reduce((acc, hour, idx) => {
    if (idx % 2 === 0) {
      return `${acc}${hour}\u00A0- `;
    }
    const str = `${acc}${hour}`;
    if (idx < hours.length - 1) {
      return str + ', ';
    }
    return str;
  }, '');
}

/*
 * Converts array of [{type: "open", value: 123}, ...] to "1 PM - 2 PM, 3 PM - 4 PM"
 */
function hourArrayToString(arr: OpeningHourItem[]): string {
  const hours = arr.map((hourItem) => {
    return getFormattedHour(hourItem.value);
  });
  return joinHoursToString(hours);
}

export const isToday = (day: string) => {
  const today = moment().format('dddd').toLowerCase();
  return day === today;
};

export default function convertOpeningHours(
  openingHours: OpeningHoursType
): OpeningHoursStringified {
  const result = [];
  for (let i = 0; i < daysOfWeekSorted.length; i++) {
    const dayOfWeek = daysOfWeekSorted[i];
    result.push(openingHours[dayOfWeek]);
  }

  for (let i = 0; i < daysOfWeekSorted.length; i++) {
    const day = result[i];
    // Checking if day starts with closing item.
    // It means that it is end of working time from previous day.
    // Putting it to the end of previous day.
    if (day[0] && day[0].type === 'close') {
      const previousIndex = getPreviousIndex(i);
      result[previousIndex].push(day[0]);
      result[i].shift();
    }
  }
  const daysArray = result.map(hourArrayToString);

  return daysArray.reduce((acc, item, idx) => {
    return {
      ...acc,
      [daysOfWeekSorted[idx]]: item
    };
  }, {});
}
