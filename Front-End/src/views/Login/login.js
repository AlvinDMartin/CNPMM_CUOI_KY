import React, { useEffect, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Switch, Route, Redirect } from "react-router-dom";


import { useForm } from "react-hook-form";
import logInApi from "api/logInApi";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function SignIn() {
  const classes = useStyles();

  const {register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const userAccount = JSON.stringify(data);
    console.log(userAccount);
    fetchLogIn(userAccount);
  };

  const fetchLogIn = async(userAccount) =>{
    try{
      let response = await logInApi.login(userAccount);
      alert("Thành công");
      //chuyển trang
      return localStorage.setItem('user', true)
      
    }
    catch(error){
      console.log(error);
    }
  }



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ĐĂNG NHẬP TÀI KHOẢN CỦA BẠN
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Tên tài khoản"
            name="username"
            autoComplete="username"
            autoFocus
            inputRef={register} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register} 
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Nhớ mật khẩu của bạn"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            //className={classes.submit} 
          >
            ĐĂNG NHẬP
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/admin/dangky" variant="body2">
                {"Chưa có tài khoản ? Đăng ký ngay"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}