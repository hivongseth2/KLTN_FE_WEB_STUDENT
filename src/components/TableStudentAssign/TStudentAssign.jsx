import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'studentId', headerName: 'Mã Sinh Viên', width: 120 },
  { field: 'fullName', headerName: 'Họ Tên', width: 150 },
  {
    field: 'internshipSemesterClassName',
    headerName: 'Lớp',
    width: 130,
    valueGetter: (params) => params.row?.internshipSemester?.className,
  },
  { field: 'email', headerName: 'Email', width: 230 },
];

export default function TStudentAssign({ rows, handleToggle }) {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const handleSelectionModelChange = (newSelection) => {
    setSelectionModel(newSelection);
    if (handleToggle) {
      handleToggle(newSelection);
    }
  };

  return (
    rows && (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows.length > 0 ? rows : []}
          columns={columns}
          pageSize={5}
          checkboxSelection
          selectionModel={selectionModel}
          onRowSelectionModelChange={handleSelectionModelChange}
        />
      </div>
    )
  );
}
