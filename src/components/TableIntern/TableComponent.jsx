import * as React from 'react';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons/faEllipsisV';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchApiCourses } from '@/redux/slice/courses/CoursesSlice';

function createData(
  id,
  subjectSectionId,
  departmentId,
  departmentName,
  subjectSectionName,
  semester,
  schoolYear,
  trainingLevel,
  trainingType,
) {
  return {
    id,
    subjectSectionId,
    departmentId,
    departmentName,
    subjectSectionName,
    semester,
    schoolYear,
    trainingLevel,
    trainingType,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'stt',
    numeric: false,
    disablePadding: false,
    label: 'STT',
  },
  {
    id: 'departmentId',
    numeric: false,
    disablePadding: false,
    label: 'Mã Ngành',
  },
  {
    id: 'departmentName',
    numeric: false,
    disablePadding: false,
    label: 'Tên Chuyên Ngành',
  },
  {
    id: 'subjectSectionId',
    numeric: false,
    disablePadding: false,
    label: 'Mã Học Phần',
  },
  {
    id: 'subjectSectionName',
    numeric: false,
    disablePadding: false,
    label: 'Môn Học Phần',
  },
  {
    id: 'semester',
    numeric: false,
    disablePadding: false,
    label: 'Đợt',
  },
  {
    id: 'schoolYear',
    numeric: false,
    disablePadding: false,
    label: 'Năm Học',
  },
  {
    id: 'trainingLevel',
    numeric: false,
    disablePadding: false,
    label: 'Bậc Đào Tạo',
  },
  {
    id: 'trainingType',
    numeric: false,
    disablePadding: false,
    label: 'Loại đào tạo',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === 'desc' ? ' (giảm)' : ' (tăng)'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function TableComponent({ setItem }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('stt');
  const [selected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const courses = useSelector((state) => state.courses.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApiCourses());
      } catch (err) {
        console.log('Error fetching courses:', err);
      }
    };

    fetchData();
  }, [dispatch]);

  const rows = courses.map((data) =>
    createData(
      data.id,
      data.subjectSectionId,
      data.department.id,
      data.department.name,
      data.subjectSectionName,
      data.semester,
      data.schoolYear,
      data.trainingLevel,
      data.trainingType,
    ),
  );

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (item, row) => {
    console.log(row);
    setItem(row);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              onClick={handleClick}
            />
            <TableBody>
              {visibleRows.map((row) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                      component="th"
                      id={row.id}
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {row.id}
                    </TableCell>

                    <TableCell align="left">{row.departmentId}</TableCell>

                    <TableCell align="left">{row.departmentName}</TableCell>
                    <TableCell align="left">{row.subjectSectionId}</TableCell>
                    <TableCell align="left">{row.subjectSectionName}</TableCell>
                    <TableCell align="left">{row.semester}</TableCell>
                    <TableCell align="left">{row.schoolYear}</TableCell>
                    <TableCell align="left">{row.trainingLevel}</TableCell>
                    <TableCell align="left">{row.trainingType}</TableCell>
                    <TableCell align="left">
                      <IconButton aria-label="Example">
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
