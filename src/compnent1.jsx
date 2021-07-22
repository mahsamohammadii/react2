import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import Component2 from './component2';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
 
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      justifyItems:'center',
     
    },
    
    logo: {
        padding: theme.spacing(1),
        textAlign: 'center',
        justifyItems:'center',
        borderRadius :100,
        border : 'solid  2px', 
        justifyContect :'center',
       
        width:100,
        height:100,
    },
    input: {
        
        textAlign: 'center',
        color: theme.palette.text.secondary,
        
    },
    asli: {
        textAlign:'center',
        justifyContent:'center',
        justifyItems:'center',
        width: '100%'
        
    },
   

  }));

  export default function CenteredGrid() {
    const classes = useStyles();
    const [firstname,setFirstName]=useState('');
    const [number,setNumber]=useState('');
    const [email,setemail]=useState('');
    const [form,setForm]=useState({firstname:''});
   
    const src=require('./img/continuous-line-globe-earth-one-line-drawing-vector-23848567.jpg');
    return(

        <Grid className={classes.asli} container spacing={2}>
            <Grid item xs={6}>
            <Grid item xs={12}>
               <paper  className={classes.paper}>
               <img  className={classes.logo} alt="logo" src={src.default}/>
               </paper>
            </Grid>
            
            
            <Grid item xs={12}>
               <paper className={classes.paper}>
                 <p>ثبت نام</p>
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
               <p>:نام خود را وارد کنید </p>
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
              <input className={classes.input} 
              value={firstname}
              onChange={(e)=>{setFirstName(e.target.value)
              }}
              type="text" id="name"/>
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
               <p>: شماره تلفن خود را وارد کنید</p>
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
              <input className={classes.input}  value={number}
              onChange={(e)=>{setNumber(e.target.value)
              }} type="text" variant="outlined" margin="normal" required fullWidth />
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
               <p>: ایمیل خود را وارد کنید</p>
               </paper>
            </Grid>
            <Grid item xs={12}>
               <paper className={classes.paper}>
              
               <input className={classes.input}  value={email}
              onChange={(e)=>{setemail(e.target.value)
              }} type="text"   id="email" label="Email Address" name="email" autoComplete="email" variant="outlined" margin="normal" required fullWidth/>
               </paper>
            </Grid>

            <Grid item xs={12}>
               <paper className={classes.paper}>
               <button onClick={()=>{setForm({firstname,number,email})}}>click here</button>
               </paper>
            </Grid>
           
            </Grid>
             <Component2 form={form} firstname={form.firstname}/>
        </Grid>
    )
  }


//   function nameInfo(){
//       const [fname,setFname] = useState({fullname:''});

//       return(
//           <input className={classes.input} type="text" id="name" value={fname.fullname}/>

//       )
//   }

//   function numInfo(){
//     const [num,setnum] = useState({numbre:''});

//     return(
//         <input className={classes.input} type="text" id="name" value={num.numbre}/>

//     )
// }

// function mailInfo(){
//     const [mail,setmail] = useState({email:''});

//     return(
//         <input className={classes.input} type="text"   id="email" label="Email Address" name="email" autoComplete="email" variant="outlined" margin="normal" required fullWidth value={mail.email}/>

//     )
// }