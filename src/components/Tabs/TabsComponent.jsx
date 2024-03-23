import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Assignment from '@/pages/InternShip/AssignPage/Assignment';
import InternDetail from '@/pages/InternShip/DetailPage/InternDetail';
import InternDetailHeader from '../InternDetailHeader/InternDetailHeader';
import TrackingStudent from '@/pages/InternShip/TrackingPage/TrackingStudent';
import Document from '@/pages/InternShip/DocumentPage/Document';

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabsComponent({ item, setItem }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Khóa thực Tập"
            id={a11yProps(0).id}
            aria-controls={a11yProps(0)['aria-controls']}
          />
          <Tab
            label="Phân công GV"
            id={a11yProps(1).id}
            aria-controls={a11yProps(1)['aria-controls']}
          />
          <Tab
            label="Theo dõi sinh viên"
            id={a11yProps(2).id}
            aria-controls={a11yProps(2)['aria-controls']}
          />
          <Tab
            label="Quản lý bản tin"
            id={a11yProps(3).id}
            aria-controls={a11yProps(3)['aria-controls']}
          />
        </Tabs>
      </Box>
      <InternDetailHeader idClass={item.id} setItem={setItem} />

      <CustomTabPanel value={value} index={0}>
        <InternDetail item={item} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Assignment item={item} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <TrackingStudent />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Document />
      </CustomTabPanel>
    </Box>
  );
}
