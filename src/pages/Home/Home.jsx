import { Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header/Header';
import InfoTeacher from '@/components/HomeComponent/InfoTeacher';
import companyMock from '@/mock/CompanyMock';
import { parseDate } from '@/utils/GlobalUtil';
import TabsDetail from '../DetailStudent/TabsDetail';
import StudentMock from '@/mock/StudentMock';
import InternMock from '@/mock/InternMock';
import TeacherMock from '@/mock/TeacherMock';
import { PieChart } from '@mui/x-charts';
import PieChartComponent from '@/components/HomeComponent/PieChart';

function ReportPage() {
  const location = useLocation();
  const student = StudentMock;
  const term = InternMock[0];
  const teacher = TeacherMock[0];
  const termData = { ...InternMock[0], ...TeacherMock[0] };

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

  const TermKey = {
    tenChuyenNganh: 'Chuyên ngành',
    tenHocPhan: 'Học phần',
    Dot: 'Đợt',
    loaiDaotao: 'Loại đào tạo',
    hoTen: 'Giảng viên hướng dẫn',
    email: 'Email liên hệ',
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
            data={student[0]}
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

        <Grid item xs={6}>
          <InfoTeacher
            title="Khóa thực tập"
            data={termData}
            vietnameseKeys={TermKey}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            justifyContent: 'center',
          }}
        >
          <PieChartComponent />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ReportPage;
