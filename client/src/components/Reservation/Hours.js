import React from 'react';

const Hours = () => {
  const open = 12;
  const close = 23;
  let hoursList = [];
  for (let i = open; i < close; ++i) {
    hoursList.push(i);
  }
  hoursList = hoursList.map((e) => (
    <li className="hour" key={e}>
      {e}:00
      <br />
      Zarezerowany
    </li>
  ));

  return <ul>{hoursList}</ul>;
};

export default Hours;
