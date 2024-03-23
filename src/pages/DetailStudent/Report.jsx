import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link } from 'react-router-dom';
import DocumentFormMock from '@/mock/DocumentFormMock';
import RateStar from '@/components/DetailStudent/RateStar';
import CommentOpinion from '@/components/DetailStudent/Comment';

export default function DocumentAccordion() {
  const [selectedDocument, setSelectedDocument] = React.useState(null);

  const handleDocumentClick = (documentId) => {
    setSelectedDocument(documentId);
  };

  return (
    <div>
      {DocumentFormMock.map((document) => (
        <Accordion
          key={document.id}
          sx={{
            backgroundColor:
              selectedDocument === document.id ? '#A7D7C5' : '#F4F9F4',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${document.id}-content`}
            id={`panel${document.id}-header`}
            onClick={() => handleDocumentClick(document.id)}
          >
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="title1" sx={{ fontWeight: 'bold' }}>
                  {document.tieuDe}
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <RateStar />
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="cation">{document.moTa}</Typography>
                <p>
                  <Link href="#" underline="always">
                    <AttachFileIcon /> {document.file}
                  </Link>
                </p>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <CommentOpinion />
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      ))}
    </div>
  );
}
