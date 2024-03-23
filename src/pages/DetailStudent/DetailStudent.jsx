import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header/Header';
import InfoTeacher from '@/components/HomeComponent/InfoTeacher';
import companyMock from '@/mock/CompanyMock';
import { parseDate } from '@/utils/GlobalUtil';
import TabsDetail from './TabsDetail';

function DetailStudent() {
  const location = useLocation();
  const student = location.state && location.state.student;

  const [company] = useState(companyMock[0]);
  const [vietnameseKeys, setVietnameseKeys] = useState({
    id: 'Mã sinh viên',
    maLop: 'Lớp',
    sdt: 'Số điện thoại',
    ho: 'Họ tên',
    ngaySinh: 'Ngày sinh',
    gioiTinh: 'Giới tính',
    email: 'Email',
    nhom: 'Nhóm',
  });

  useEffect(() => {
    if (student) {
      student.hoTen = `${student.ho} ${student.ten}`;
      const updatedVietnameseKeys = {
        id: 'Mã sinh viên',
        maLop: 'Lớp',
        sdt: 'Số điện thoại',
        hoTen: 'Họ tên',
        ngaySinh: 'Ngày sinh',
        gioiTinh: 'Giới tính',
        email: 'Email',
        nhom: 'Nhóm',
      };
      setVietnameseKeys(updatedVietnameseKeys);
    }
  }, [student]);

  useEffect(() => {
    if (company) {
      company.ngayThamGia = `${parseDate(company.dateJoin)}`;
    }
  }, [company]);

  const companyKey = {
    companyName: 'Tên công ty',
    address: 'Địa chỉ',
    phone: 'Số điện thoại',
    mentorName: 'Người liên hệ',
    ngayThamGia: 'Ngày thực tập',
  };

  return (
    <Grid container paddingLeft="18em">
      <Grid container>
        <Header />
      </Grid>

      <Grid
        container
        spacing={1}
        sx={{
          mt: 1,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Grid item xs={6} sx={{ borderWidth: 1, borderColor: '#333' }}>
          <InfoTeacher
            title="Thông tin sinh viên"
            data={student}
            vietnameseKeys={vietnameseKeys}
          />
        </Grid>
        <Grid item xs={6}>
          <InfoTeacher
            title="Thông tin công ty thực tập"
            data={company}
            vietnameseKeys={companyKey}
          />
        </Grid>
      </Grid>

      <Grid container>
        <TabsDetail />
      </Grid>
    </Grid>
  );
}

export default DetailStudent;
