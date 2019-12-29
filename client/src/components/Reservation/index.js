import React from 'react';
import Table from './Table.js';
import {Description} from './TableDesciption.js'


export default () => {
  const tableList = Description.map((e) => <Table key={e.number} number={e.number} desc={e.desc} url={e.url}/>);
  return <div className="reservation">{tableList}</div>;
};
