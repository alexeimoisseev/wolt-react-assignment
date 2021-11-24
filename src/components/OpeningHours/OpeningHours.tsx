import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import convertOpeningHours, {
  daysOfWeekSorted,
  isToday
} from './convertOpeningHours';
import TableItem from '../TableItem/TableItem';

import input from '../../input.json';

import './OpeningHours.css';

export default function OpeningHours() {
  const t = convertOpeningHours(input);
  return (
    <div className="OpeningHours">
      <div className="OpeningHours__header">
        <div className="OpeningHours__headerIcon">
          <FontAwesomeIcon icon={faClock} />
        </div>
        <div className="OpeningHours__headerCaption">Opening hours</div>
      </div>
      <div className="OpeningHours__separator"></div>
      <div className="OpeningHours__items">
        {daysOfWeekSorted.map((day) => {
          return (
            <TableItem
              key={day}
              dayOfWeek={day}
              value={t[day]}
              isToday={isToday(day)}
            />
          );
        })}
      </div>
    </div>
  );
}
