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
import diseasesApi from "api/List_diseasesApi.js";



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

  const fetchLogIn = async(Account) =>{
    try{
      let response = await diseasesApi.postAll(Account);
      alert("Thành công");
      console.log(response);
      //chuyển trang
      //return localStorage.setItem('user', true)
      
    }
    catch(error){
      console.log(error);
    }
  }

  const onSubmit = (data) => {
    const userAccount = {
        name: data.name,  
        description: data.description,
        group_diseases_idGroup: data.group_diseases_idGroup,
      }
    fetchLogIn(userAccount);
    console.log(userAccount);

  };



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          TẠO BỆNH
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Tên bệnh"
            name="name"
            autoComplete="name"
            autoFocus
            inputRef={register} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="description"
            label="Mô tả bệnh"
            type="description"
            id="description"
            autoComplete="current-password"
            inputRef={register} 
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="group_diseases_idGroup"
            label="mã nhóm bệnh"
            type="group_diseases_idGroup"
            id="group_diseases_idGroup"
            autoComplete="current-password"
            inputRef={register} 
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            LƯU
          </Button>
        </form>
      </div>
    </Container>
  );
}