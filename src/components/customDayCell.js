import React from 'react';

const customDayCell = (props) => {
  return (<div className="customCell"  onMouseDown={props.startSelection}></div>);

}


export default customDayCell;
