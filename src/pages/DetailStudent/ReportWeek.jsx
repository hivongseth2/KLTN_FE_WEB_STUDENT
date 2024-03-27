import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import WeekReport from '@/mock/WeekReport';
import RateStar from '@/components/DetailStudent/RateStar';
import CommentOpinion from '@/components/DetailStudent/Comment';
import EditReportComponent from '@/components/reportPageCom/EditReportComponent';

export default function ReportWeek() {
  const [selectedWeek, setSelectedWeek] = React.useState(null);
  const [edit, setEdit] = React.useState(false);

  const handleEditClick = () => {
    setEdit(!edit);
  };

  const handleWeekClick = (week) => {
    setSelectedWeek(week);
  };

  return (
    <Grid xs={12} sx={{ sx: '98%' }}>
      {WeekReport.map((report) => (
        <Accordion
          key={report.id}
          sx={{
            backgroundColor:
              selectedWeek === report.week ? '#D6E4F0' : '#F6F6F6',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${report.id}-content`}
            id={`panel${report.id}-header`}
            onClick={() => handleWeekClick(report.week)}
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
              <Grid item xs={12} sx={{ minHeight: 150 }}>
                <EditReportComponent report={report.content} edit={edit} />
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
            <Button
              onClick={() => {
                handleEditClick();
              }}
            >
              Sửa
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </Grid>
  );
}
