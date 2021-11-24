import React from 'react';

import './TableItem.css';

type TableItemProps = {
	dayOfWeek: string;
  value?: string | null; // '10 AM - 6 PM, 7 PM - 11 PM',
  isToday: boolean;
};

export default function TableItem(props: TableItemProps) {
  return <div className="TableItem">
    <div className="TableItem__body">
      <div className="TableItem__dayOfWeek">
        {props.dayOfWeek}
      </div>
      {props.isToday && <div className="TableItem__isToday">today</div>}
      {props.value ? 
        <div className="TableItem__value">
          {props.value}
        </div> :
        <div className="TableItem__closed">Closed</div>
      }
    </div>
    <div className="TableItem__separator"></div>
  </div>;
}