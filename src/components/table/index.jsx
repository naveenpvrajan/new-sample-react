import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function DataTable({
  rows = [],
  columns = [],
  checkboxSelection = false,
  disableSelectionOnClick = true
}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
      />
    </div>
  );
}
