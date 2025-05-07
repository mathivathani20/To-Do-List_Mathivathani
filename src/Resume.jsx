import React, { Component } from 'react'
import { Box, Typography } from '@mui/material'
import profile from './assets/bousi.jpeg'

export default class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Mathivathani S",
            role: "Web Developer",
            mail: "mathivathanisridhar01@gmail.com",
            phone:'+91 9789267340',
            summary: "Aspiring and detail-oriented Full Stack Web Developer with a strong foundation in frontend technologies and the MERN stack. Passionate about building responsive, user-centric web applications and scalable backend systems. Seeking a challenging role in a dynamic organization where I can leverage my skills in React.js, Node.js, and MongoDB to contribute to innovative software solutions while continuously growing as a developer.",
            edu:"B.E Electronics and Communication Engineering",
            cgpa:'CGPA - 8.34',
            schl:"Seventh-Day Adventist Matric Hr.Sec School",
            per:'81%'
        }
    }
    render() {
        return (
            <>
                <Box sx={{display:'flex',justifyContent:'space-around'}}>
                    <Box>

                        <Typography sx={{marginTop:5,fontSize:40}}>{this.state.name}</Typography>
                        <Typography variant='h6' fontStyle={'italic'}>{this.state.role}</Typography>
                        <Typography>{this.state.mail} {this.state.phone}</Typography>
                    </Box>
                    <Box  sx={{}} >
                        <img src={profile}  
                        style={{
                            height: '150px',        // adjust as needed
                            width: '150px',         // optional, to keep aspect ratio
                            borderRadius: '50%',    // makes it a circle
                            objectFit: 'cover'      // crop image nicely
                          }}/>
                    </Box>
                    
                </Box>
                <hr style={{width:'68%'}}/>
                <Box sx={{marginLeft:30}}>
                    <Typography sx={{fontSize:20,fontWeight:'bold'}}>Objective</Typography>
                <Typography sx={{width:'68%'}}>{this.state.summary}</Typography>
                <Typography sx={{marginTop:3,fontSize:20,fontWeight:'bold'}}>Educational Qualification</Typography>
                <Typography  >{this.state.edu}</Typography>
                <Typography sx={{fontWeight:'bold'}}>{this.state.cgpa}</Typography>
                <Typography sx={{marginTop:3}}>{this.state.schl}</Typography>
                <Typography sx={{fontWeight:'bold'}} >{this.state.per}</Typography>
                <Typography sx={{marginTop:4,fontSize:20,fontWeight:'bold'}}>Skills</Typography>
                <ul>
                    <li>HTML </li> 
                    <li>CSS(Tailwind)</li>
                </ul>
                </Box>
                
               


            </>
        )
    }
}
