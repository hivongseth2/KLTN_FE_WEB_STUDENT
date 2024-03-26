import React, { useEffect, useState } from 'react';
import { Drawer, List } from '@mui/material';
import { HomeOutlined, RequestPageOutlined } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import ListItemButton from '@/components/ListItemButton';
import { CHAT, NOTI, REPORT, DOCUMENT, DASHBOARD } from '@/layout/constants';

import {
  DepartmentIcon,
  DocumentIcon,
  SpecIcon,
  TeacherChatIcon,
  TeacherIcon,
} from '@/assets/svg/Icon';

const pathToItemMap = {
  '/': DASHBOARD,
  '/report': REPORT,
  '/chat': CHAT,
  '/document': DOCUMENT,
  '/noti': NOTI,
};

export default function Header() {
  const location = useLocation();
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const { pathname } = location;
    const item = Object.keys(pathToItemMap).find(
      (key) =>
        pathname === key || (key === '/request' && pathname.startsWith(key)),
    );

    setSelectedItem(pathToItemMap[item]);
  }, [location.pathname]);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280,
        flexShrink: 0,
        marginTop: '80px',
        '& .MuiDrawer-paper': {
          marginTop: '75px',
          padding: '10px',
        },
      }}
    >
      <List component="div" disablePadding>
        <ListItemButton
          selectedItem={selectedItem === DASHBOARD}
          icon={<HomeOutlined />}
          link="/"
          title="Trang chủ"
        />
        <ListItemButton
          selectedItem={selectedItem === REPORT}
          icon={<RequestPageOutlined />}
          link="/report"
          title="Báo cáo hàng tuần"
        />

        <ListItemButton
          selectedItem={selectedItem === DOCUMENT}
          icon={<DocumentIcon width={24} height={24} />}
          link="/document"
          title="Quản lý tài liệu"
        />
        {/* <ListItemButton
          selectedItem={selectedItem === TEACHER}
          icon={<TeacherIcon width={24} height={24} />}
          link="/teacher"
          title="Quản lý giảng viên"
        /> */}
        <ListItemButton
          selectedItem={selectedItem === CHAT}
          icon={<TeacherChatIcon width={24} height={24} />}
          link="/chat"
          title="Tin nhắn"
        />
        {/* <ListItemButton
          selectedItem={selectedItem === DEPARTMENT}
          icon={<DepartmentIcon width={24} height={24} />}
          link="/department"
          title="Quản lý khoa"
        /> */}
        {/* <ListItemButton
          selectedItem={selectedItem === SPEC}
          icon={<SpecIcon width={24} height={24} />}
          link="/specialized"
          title="Quản lý chuyên ngành"
        /> */}
      </List>
    </Drawer>
  );
}
