import React from 'react';
import {
  Stack,
  TextField,
  InputAdornment,
  Button,
  Link,
  IconButton,
} from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import AuthOutlet from './AuthOutlet';
import { useLoginMutation } from '@/features/user/userApiSlice';

function Login() {
  const username = React.useRef(null);
  const password = React.useRef(null);
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const loginHandler = async (e) => {
    e.preventDefault();
    const user = username.current.value.trim();
    const pwd = password.current.value.trim();
    if (user === '') {
      username.current.focus();
    } else if (pwd === '') {
      password.current.focus();
    } else {
      const { data } = await login({ username: user, password: pwd });
      console.log(data);
      navigate('/');
    }
  };

  React.useEffect(() => {
    username.current.focus();
  }, []);

  return (
    <AuthOutlet>
      <TextField
        inputRef={username}
        type="text"
        label="Tên đăng nhập"
        variant="outlined"
        autoComplete="off"
      />
      <Stack gap={1}>
        <TextField
          inputRef={password}
          type={showPassword ? 'text' : 'password'}
          label="Password"
          variant="outlined"
          sx={{ '& .MuiInputBase-root ': { pr: '4px' } }}
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link
          variant="body2"
          textAlign="right"
          onClick={() => navigate('/forgot-password')}
        >
          Forgot password?
        </Link>

        <Button variant="contained" onClick={loginHandler}>
          Sign in
        </Button>
      </Stack>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2" component="p">
          Don have an account?
        </Typography>
        <Link
          variant="body2"
          sx={{ display: 'inline', ml: 1 }}
          onClick={() => navigate('/register')}
        >
          Register
        </Link>
      </Box> */}
    </AuthOutlet>
  );
}

export default Login;
