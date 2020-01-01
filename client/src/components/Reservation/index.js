import React from 'react';
import Table from './Table.js';
import DateSelect from './DataSelect.js'
import { Description } from './TableDesciption.js';

export default () => {
  const tableList = Description.map((e) => (
    <Table key={e.number} number={e.number} desc={e.desc} url={e.url} />
  ));
  return (
    <div>
      <DateSelect />

      <div className="reservation">{tableList}</div>
    </div>
  );
};
