import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import BootstrapTable from 'react-bootstrap-table-next';

import { Initialize, useServerSide, getFullData, GenerateNewData, getColumnsTitle } from '../components/logical/ServerSide';

function Table() {

  const products = getFullData()

  const columns = getColumnsTitle();

  const defaultSorted = [{
    dataField: 'Id',
    order: 'desc'
  }];
  return (
    <div>
      <BootstrapTable bootstrap4 keyField='Id' data={products} columns={columns} defaultSorted={defaultSorted} />
    </div>
  );
}
export default Table;