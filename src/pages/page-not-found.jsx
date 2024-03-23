import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function NotFoundView() {
  return (
    <Container>
      <Box
        textAlign="center"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        sx={{
          py: 12,
          maxWidth: 480,
          mx: 'auto',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h3" sx={{ mb: 3 }}>
          Sorry, page not found!
        </Typography>

        <Typography sx={{ color: 'text.secondary' }}>
          Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
          mistyped the URL? Be sure to check your spelling.
        </Typography>

        <Button
          href="/"
          size="large"
          variant="contained"
          sx={{ marginTop: 20 }}
        >
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}
