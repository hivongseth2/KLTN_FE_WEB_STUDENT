import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ReportWeek from './ReportWeek';
import Report from './Report';

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

export default function TabsDetail() {
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
            label="Báo cáo hàng tuần"
            id={a11yProps(0).id}
            aria-controls={a11yProps(0)['aria-controls']}
          />
          <Tab
            label="Tài liệu tải lên"
            id={a11yProps(1).id}
            aria-controls={a11yProps(1)['aria-controls']}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <ReportWeek />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Report />
      </CustomTabPanel>
    </Box>
  );
}
