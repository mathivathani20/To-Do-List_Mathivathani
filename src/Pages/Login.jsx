import React from 'react'
import { Box, Button, Stack, TextField } from '@mui/material'
import {useFormik} from 'formik'
import * as Yup from "yup";
import { Link } from 'react-router-dom';


export default function Login() {

const Formik = useFormik({
    initialValues:{
       email:"",
       password:""
    },

validationSchema:Yup.object({
    email:Yup.string().email("Not a valid email").required("Email should be Required"),
    password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@,_,$,#,&,*]).{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
    ),
}),

   onSubmit:(values)=>{
    console.log("values",values);
    
   } 
})

    return (
        <>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'98vh',backgroundColor:'#f3e5f5'}}>
            <Box
      component="form"
      onSubmit={Formik.handleSubmit}
      sx={{ '& > :not(style)': { m: 1, width: '25ch' },border:'1px solid white',padding:18,borderRadius:3,boxShadow:4,backgroundColor: 'white'  }}
      noValidate
      autoComplete="off"
    >
        <Stack spacing={4}>
        <TextField id="outlined-basic" label="Email" variant="outlined"
        name='email'
        value={Formik.values.email}
        onChange={Formik.handleChange}
        onBlur={Formik.handleBlur}
        error={Formik.touched.email&&Boolean(Formik.errors.email)}
        helperText={Formik.touched.email&&Formik.errors.email}
        />

      <TextField id="filled-basic" label="Password" variant="outlined"
       name='password'
       value={Formik.values.password}
       onChange={Formik.handleChange}
       onBlur={Formik.handleBlur}
       error={Formik.touched.password&&Boolean(Formik.errors.password)}
       helperText={Formik.touched.password&&Formik.errors.password}
      
      />

      <Button type='submit' variant='contained'disabled={!(Formik.isValid && Formik.dirty)} ><Link to='/Dashboard' style={{textDecoration:'none'}}>Login</Link></Button>
        </Stack>
      
      
    </Box>
    </Box>
        </>
    )
}
