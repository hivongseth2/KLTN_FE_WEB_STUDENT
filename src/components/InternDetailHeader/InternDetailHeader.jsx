import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiSupervising } from '@/redux/slice/supervising/SupervisingSlice';

function InternDetailHeader({ idClass, setItem }) {
  const [schoolYear, setSchoolYear] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.supervising.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchApiSupervising(idClass));
      } catch (err) {
        console.log('Err');
      }
    };
    fetchData();
  }, [dispatch, idClass]);

  useEffect(() => {
    if (data && data.data && data.data.length > 0) {
      const { internshipSemester } = data.data[0];
      if (internshipSemester) {
        setSchoolYear(internshipSemester.schoolYear);
      }
    }
  }, [data]);

  const details = [
    {
      label: 'Chuyên ngành:',
      value: schoolYear ? schoolYear.department.name : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
    {
      label: 'Đợt:',
      value: schoolYear
        ? `HK${schoolYear.semester} (${schoolYear.schoolYear})`
        : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
    {
      label: 'Bậc đào tạo:',
      value: schoolYear ? schoolYear.trainingLevel : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
    {
      label: 'Môn học phần:',
      value: schoolYear
        ? `${schoolYear.subjectSectionId} - ${schoolYear.subjectSectionName}`
        : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
    {
      label: 'Năm học:',
      value: schoolYear ? schoolYear.schoolYear : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
    {
      label: 'Loại đào tạo:',
      value: schoolYear ? schoolYear.trainingType : '',
      labelVariant: 'body1',
      valueVariant: 'body2',
    },
  ];

  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingLeft: '2em',
        borderBottom: 1,
        borderBottomColor: '#ccc',
        marginRight: 20,
        paddingBottom: 1,
        pb: 3,
        mt: 2,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="caption"
          component="h2"
          color="blue"
          onClick={() => {
            setItem(null);
          }}
        >
          Danh sách khóa thực tập
        </Typography>
      </Grid>

      {details.map((detail) => (
        <Grid key={detail.id} item xs={4} align={detail.align || 'inherit'}>
          <Typography
            variant={detail.labelVariant}
            component="p"
            color="initial"
          >
            {detail.label}
          </Typography>
          <Typography
            variant={detail.valueVariant}
            component="p"
            color="text.secondary"
          >
            {detail.value}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default InternDetailHeader;
