import React from 'react'
import { Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({tasks,handleDelete,}) {
  return (
    <>
    <Box sx={{ maxWidth: 600, mt: 5 }}>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: 2,
              mb: 2,
              backgroundColor: task.completed ? '#e0ffe0' : '#fff',
            }}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                <DeleteIcon sx={{color:'red'}} />
              </IconButton>
            }
          >
            <ListItemText
              primary={task.title}
              secondary={`${task.description} | Due: ${task.dueDate}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
    
    </>
  )
}
