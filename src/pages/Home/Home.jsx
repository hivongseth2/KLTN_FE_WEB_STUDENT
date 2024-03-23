import React, { useState, useEffect } from 'react';
import { Grid, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Header from '@/components/Header/Header';
import InfoTeacher from '@/components/HomeComponent/InfoTeacher';
import StudentList from '@/components/HomeComponent/StudentList';
import InternshipSelect from '@/components/HomeComponent/InternshipSelect';
import DocumentMock from '@/mock/DocumentMock';
import DocumentList from '@/components/HomeComponent/DocumentList';
import Chart from '@/components/HomeComponent/Chart';
import { fetchApiDetail } from '@/redux/slice/lecturers/LecturersSlice';
import { fetchApiStudentSupervising } from '@/redux/slice/studentSupervising/StudentSupSlice';
import { fetchApiCourses } from '@/redux/slice/courses/CoursesSlice';

function Home() {
  const courses = useSelector((state) => state.courses.data);
  const students = useSelector((state) => state.studentSupervising.data);
  const [news] = useState(DocumentMock);
  const lecturerDetail = useSelector((state) => state.detail.data);
  const [semesterId, setSemesterId] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApiDetail()).then((data) => {
          dispatch(
            fetchApiStudentSupervising({
              item: { id: semesterId },
              teacher: data.payload.id,
            }),
          );
        });

        dispatch(fetchApiCourses());
      } catch (err) {
        console.log('Err');
      }
    };
    fetchData();
  }, [dispatch, semesterId]);

  useEffect(() => {
    if (courses.length > 0) {
      setSemesterId(courses[0].id);
    }
  }, []);

  useEffect(() => {}, [students, courses, semesterId]);
  const vietnameseKeys = {
    lecturersId: 'Mã giảng viên',
    'department.name': 'Ngành',
    fullName: 'Họ tên',
    gender: 'Giới tính',
    birthday: 'Ngày sinh',
    numberPhone: 'Số điện thoại',
    email: 'Email',
    'roles.name': 'Chức vụ',
  };

  return (
    <Grid container spacing={2} paddingLeft="18em">
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12} sx={{ my: 2, p: 2 }}>
        <Grid container spacing={2} xs={12}>
          <Grid item xs={6}>
            <InfoTeacher
              title="Thông tin giảng viên"
              data={lecturerDetail}
              vietnameseKeys={vietnameseKeys}
            />
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Grid container xs={12}>
                <InternshipSelect
                  data={courses}
                  defaultValue={30}
                  semesterId={semesterId}
                  setSemesterId={setSemesterId}
                />
              </Grid>
              <StudentList students={students} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={5.5} sx={{ marginRight: '10px' }}>
          <DocumentList documents={news} />
        </Grid>
        <Grid item xs={6}>
          <Chart />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
