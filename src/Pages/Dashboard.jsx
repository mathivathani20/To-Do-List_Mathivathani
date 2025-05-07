import { Box, Button, Stack,TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from "yup";
import TaskList from './TaskList';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout=()=>{
    navigate('/')
  }
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      dueDate: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      dueDate: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      const newTask = { ...values, id: Date.now(), completed: false };
      setTasks([...tasks, newTask]);
      formik.resetForm();
    }
  });
 
  const [tasks, setTasks] = useState([]);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  
  
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between',padding:4,backgroundColor:'black',color:'white',fontSize:20}}>
        <Box sx={{fontFamily:'cursive'}}>
            Dashboard
        </Box>
        <Box>
           <Button sx={{backgroundColor:'white'}} onClick={handleLogout}> Logout</Button>
        </Box>
    </Box>
    <Box sx={{display: 'flex', justifyContent: 'space-between', padding: 3}}>
   <Box sx={{width:'40%'}}>
      <Typography sx={{fontFamily:'inherit',mt:6}} variant='h4' >Add To Do Task</Typography>
      <Box sx={{marginTop:6,}}>
      <form onSubmit={formik.handleSubmit} >
        <Stack spacing={2}>
          <TextField
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            label="Description"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            label="Due Date"
            name="dueDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formik.values.dueDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dueDate && Boolean(formik.errors.dueDate)}
            helperText={formik.touched.dueDate && formik.errors.dueDate}
          />
          <Button type="submit" variant="contained">Add</Button>
        </Stack>
      </form>
      </Box>
      
      

   </Box>
   <Box sx={{width:'55%',marginTop:10}}>
      <TaskList tasks={tasks} handleDelete={handleDelete}  />
      </Box>
      </Box>
    </>
  )
}
