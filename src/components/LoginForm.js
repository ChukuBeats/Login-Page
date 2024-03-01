import * as React from "react";
import Avatar from "@mui/material/Avatar";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import InputLabel from '@mui/material/InputLabel';

import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';

import Container from "@mui/material/Container";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Button from "@mui/material/Button";
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useNavigate } from "react";
import Picture1 from "../bg/Picture1.jpg";
import Google from "../bg/Google.png";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";

function LoginForm() {
  const [remember, setRemember] = useState(false);

  const boxstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-59%, -50%)",
    width: "70%",
    height: "800px",
    bgcolor: "#edede9",
    boxShodow: 50,
    borderRadius: "15px",
    border: "2px solid none",
    elevation: "10px",
  //  boxShodow: "20px",
  };

  const center = {
    position: "relative",
    top: "50%",
    // left: "37%",
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box 
                style={{
                  background: "cover",
                  minheight: "600px",
                 marginLeft:"20px",
                }}
              >
                <Container>
                  <Box height={23} />
                  <Box sx={center}>
                    <Avatar style={{color: "blue",backgroundColor: "#edede9"}}>
                      <LightModeOutlinedIcon />
                    </Avatar>
                    <h2 style={{position: "relative",bottom: "57px",left: "40px"}}>Revolutie</h2>
                    {/* </Avatar> */}
                    <Typography component="h1" variant="h5" item xs={12} sx={{ ml: "3rem", mr: "3rem", fontWeight: "bold" }}>
                      Sign in
                    </Typography>
                    <Grid item xs={12} sx={{ ml: "3rem", mr: "3rem", marginTop: "5px"}}>Please login to continue to your account</Grid>
                  </Box>
                  <Box height={35} />
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ ml: "3rem", mr: "3rem" }}>
                      <TextField
                        fullWidth
                       
                        label="User Name"
                        id="email"
                        name="email"
                        autoComplete="email"
                      /><br/><br/>
                      
                       </Grid>

                       <FormControl container spacing={1} item xs={12} sx={{ ml: "3rem", mr: "3rem",marginLeft:"55px" }} variant="outlined"  fullWidth>
          <InputLabel  htmlFor="outlined-adornment-password" >Password</InputLabel>
         
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>


                   
                    <Grid item xs={12} sx={{ ml: "3rem", mr: "3rem" }}>
                      <Stack direction="row" spacing={2}>
                        <FormControlLabel
                          sx={{ width: "60%" }}
                          onClick={() => setRemember(!remember)}
                          control={<Checkbox checked={remember} />}
                          label="Keep me logged in"
                        />
                      </Stack>
                    </Grid>
                    <Grid item xs={12} sx={{ ml: "2em", mr: "5em" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth="true"
                        size="large"
                        sx={{
                          mt: "10px",
                          mr: "20px",
                          borderRadius: "10px",
                          color: "#ffffff",
                          minWidth: "170px",
                          backgroundColor: "#blue",
                        }}
                      >
                        Sign in
                      </Button>
                    </Grid>

                      <Grid className="gridOr" ></Grid>

                    <Grid item xs={12} sx={{ ml: "2em", mr: "5em" }}>
                      <Button
                        type="submit"
                        variant="contained"
                        fullWidth="true"
                        size="large"
                        sx={{
                          mt: "10px",
                          mr: "20px",
                          borderRadius: "10px",
                          minWidth: "170px",
                         color: "Black",
                         background: "white"
                        }}
                      >
                        Sign in with Google {" "}
                        <span style={{marginLeft: "15px",marginTop: "4px"}}><img src={Google} style={{height: "17px",width:"17px",backgroundColor: "none"}}/></span>
                        
                      </Button>
                    </Grid>

                    <Grid item xs={12} sx={{ ml: "6em", mr: "6em" }}>
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="body1"
                          component="span"
                          style={{ marginTop: "20px",fontSize:"18px" }}
                        >
                          Need an Account?{" "}
                          <span
                            style={{ color: "blue", cursor: "pointer" }}
                            onClick={() => {
                              // Navigate("/");
                            }}
                          >
                            Create One
                          </span>
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} lg={6}>
              <Box 
              ><img src={Picture1} style={{width: "93%", height:" 770px",marginTop: "12px",marginLeft: "35px", borderRadius:"15px" }} className="img1"/>
                {" "}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>

    </>
  );
}

export default LoginForm;
