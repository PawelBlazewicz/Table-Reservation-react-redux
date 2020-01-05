import React from 'react';

const Hours = () => {
  const open = 12;
  const close = 23;
  let hoursList = [];
  for (let i = open; i < close; ++i) {
    hoursList.push(`${i}:00`);
  }
  hoursList = hoursList.map((e) => (
    <li className={e + ' hour' + ' listItem'} key={e}>
      {e}
      <br />
      Wolny
    </li>
  ));

  return <ul className="reservationList">{hoursList}</ul>;
};

export default Hours;
