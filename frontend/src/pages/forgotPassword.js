import {useState} from 'react';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Redirect } from 'react-router-dom';



const theme = createTheme();

export default function ForgotPassword() {

  const [succeed, setSucceed] = useState(false);
  var temp1 = false;

  const handleSubmit = (event) => {
    event.preventDefault();
    //collect everything in data
    const inputData = new FormData(event.currentTarget);
    // setDataSecAns( data.get("SecurityAnswer") );

    fetch('http://localhost:8080/showUserByPassword/'+inputData.get("email"))
    .then(response => {
        return response.json()
    })
    .then(data => {
        //this email address is correct
        console.log("position1");
        console.log(data);
        console.log(inputData.get("email")+"  "+ inputData.get("password"));

        console.log(data.securityAnswer);
        console.log("//////");


        if(data != null) {

            console.log(data.securityAnswer);
            console.log(inputData.get("SecurityAnswer"));
            console.log("position2");

            temp1 = data.securityAnswer==inputData.get("SecurityAnswer")
            console.log("temp1 is : "+temp1);


            console.log("//////");
            //when input the correct email address and the sectury answer is yes
            if(temp1){
                console.log("position3");
                // console.log(inputData.get("password")+"   "+ inputData.get("email"));

                //change password in database
                fetch('http://localhost:8080/updateUserPasswordByEmail?email='+inputData.get("email")+'&newPassword='+inputData.get("password"), {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({
                    // emailId: inputData.get("email"),
                    // password: inputData.get("password")
                    // })
                })
                setSucceed(true);
                // return response.json();
            }
            // return response.json();
            else {
                //Security Answer Status is no
                if(!temp1){
                    console.log("Security Answer is wrong ");
                }
            }
        }

    })

    .catch(error => {
        console.log('Wrong mail address: ');
        console.log({
            emailId: inputData.get("email"),
        });

    });

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="SecurityAnswer"
                  label="Security Answer"
                  type="SecurityAnswer"
                  id="securityanswer"
                  autoComplete="SecurityAnswer"

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="New password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={succeed?"success":"primary"}
              sx={{ mt: 3, mb: 2 }}
            >
              {succeed? "Reset success": "Reset password"}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Rember your password again? This way sir→
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}