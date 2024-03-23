import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import TDepartmentCom from '@/components/DepartComponent/TableComponenet/TDepartmentCom';
import Header from '@/components/Header/Header';

import FacultyModal from '@/components/DepartComponent/Modal/FacultyModal';

import { fetchApiFalcuty } from '@/redux/slice/falcuty/FalcutySlice';

function DepartmentPage() {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApiFalcuty());
      } catch (err) {
        console.log('Error fetching courses:', err);
      }
    };

    fetchData();
  }, [dispatch]);
  const addFaculty = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Grid container paddingLeft="18em">
      <Grid xs={12}>
        <Header
          header="Quản lý khoa"
          des=""
          btnTitle="Thêm khoa"
          fn={addFaculty}
        />
      </Grid>

      <Grid
        container
        xs={12}
        sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}
      >
        <Grid item xs={2}>
          <TextField id="Standard" label="Tìm kiếm khoa" variant="standard" />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          maxWidth: '86em',
          marginTop: '1em',
          display: 'flex',
          marginRight: '1.5em',
        }}
      >
        <TDepartmentCom />
      </Grid>
      <FacultyModal open={openModal} handleClose={handleCloseModal} />
    </Grid>
  );
}

export default DepartmentPage;
