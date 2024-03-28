// Bổ sung import useState vào đầu file
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {
  Grid,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import WeekReport from '@/mock/WeekReport';
import RateStar from '@/components/DetailStudent/RateStar';
import CommentOpinion from '@/components/DetailStudent/Comment';
import EditReportComponent from '@/components/reportPageCom/EditReportComponent';
import { useState } from 'react';

export default function ReportWeek() {
  const [selectedWeekIndex, setSelectedWeekIndex] = React.useState(null); // Lưu index của tuần được chọn
  const [edit, setEdit] = React.useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
    setOpenDialog(!openDialog);
  };

  const handleWeekClick = (index) => {
    // Chuyển từ tuần sang index
    setSelectedWeekIndex(index);
  };
  const handleSave = () => {
    // Lưu nội dung báo cáo
    console.log('Lưu nội dung báo cáo');
  };

  return (
    <Box sx={{ sx: '98%' }}>
      {WeekReport.map(
        (
          report,
          index, // Lặp qua mảng WeekReport và truyền index vào hàm handleWeekClick
        ) => (
          <Accordion
            key={report.id}
            sx={{
              backgroundColor:
                selectedWeekIndex === index ? '#D6E4F0' : '#F6F6F6',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${report.id}-content`}
              id={`panel${report.id}-header`}
              onClick={() => handleWeekClick(index)} // Truyền index vào hàm handleWeekClick
            >
              <Grid container>
                <Grid item xs={9}>
                  <Typography variant="title2" sx={{ fontWeight: 'bold' }}>
                    Tuần {report.week} - {report.date}
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <RateStar />
                </Grid>
              </Grid>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container>
                <Grid item xs={12} sx={{ minHeight: 50 }}>
                  {/* <EditReportComponent report={report.content} edit={edit} /> */}
                  <Typography variant="body1">Đã nộp để chấm điểm</Typography>
                </Grid>
                <Grid item xs={12} sx={{ marginTop: 2 }}>
                  <Grid container>
                    <CommentOpinion />
                  </Grid>
                </Grid>
              </Grid>
            </AccordionDetails>
            <AccordionActions sx={{ justifyContent: 'flex-start' }}>
              <Button>Hủy</Button>
              <Button onClick={handleEditClick}>Sửa</Button>
            </AccordionActions>
          </Accordion>
        ),
      )}
      <Dialog
        open={openDialog}
        onClose={handleEditClick}
        fullWidth
        maxWidth="xxl"
        minHeight="800"
        disableEnforceFocus
      >
        <DialogTitle>
          <Typography variant="h6">Chỉnh sửa báo cáo</Typography>
        </DialogTitle>
        <DialogContent sx={{ minHeight: '800px' }}>
          {selectedWeekIndex !== null ? (
            <EditReportComponent
              report={WeekReport[selectedWeekIndex].content}
              edit={edit}
            />
          ) : (
            <Typography variant="body1">
              Không có nội dung để chỉnh sửa
            </Typography>
          )}
          <Button onClick={handleEditClick}>Đóng</Button>
          <Button onClick={handleSave}>Lưu</Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
