import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { FormControl, TextField } from "@mui/material";

function validateEmail(email) {
    
    if(!email) return "required email"
    const isValidEmail = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if(!isValidEmail) return "InValid Email";
    return '';    
}

 const validatePassword = password => {
     if(!password) return "required password";
     if(password.length < 8) return "at least 8 characters"
     return '';
 } 

const LoginPage = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState ({
        email: '',
        password: ''
    });
    const [touched, setTouched] = useState ({
        email : false,
        password : false
    })

    const errors = {
        email : validateEmail(values.email),
        password: validatePassword(values.password)
    }

    console.log("error= ",errors);
    const handleInputChange = evt => {
        console.log("handle= ",values);
        setValues ({
            ...values,
            [evt.target.name] : evt.target.value
        })
    };

    const handleInputBlur = evt => {
        setTouched ({
            ...touched,
            [evt.target.name] : true
        })
    }
    const handleOnSubmit = evt => {
        //evt.preventDefault();
        console.log('value= ', values);
    }

    function onSubmit1() {
        
    // if (validateEmail(email) && validatePassword(password)){

        fetch('https://60dff0ba6b689e001788c858.mockapi.io/token', {
            method: 'GET',
            
        })
        .then(function (response) {
            console.log("response= ",response);
            return response.json();
        })
        .then(function (json) {
            console.log("json= ",json);
            const { token, userId } = json;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userId);
            navigate('/profile');
            window.location.reload();
        });
        
    }

    return (
        <div>
            <FormControl onSubmit={ handleOnSubmit }>
                <TextField style={{display: 'block', margin : '20px'}}
                 type="text"
                  placeholder="Email"
                  value={ values.email }
                  onChange = { handleInputChange }
                  onBlur={ handleInputBlur }
                  name="email"
                  label="email" variant="standard"
                  ></TextField>
                  { touched.email && <p style={{color: 'red', margin: '20px'}}>{ errors.email }</p>}
                <TextField style={{display: 'block', margin: '20px'}}
                  type="password"
                  placeholder="Password"
                  value={ values.password }
                  onChange = { handleInputChange }
                  onBlur = { handleInputBlur }
                  name="password"
                  label="password" variant="standard"
                  ></TextField>
                 { touched.password && <p style={{color: 'red', margin: '20px'}}>{ errors.password }</p>}
                 <Button variant="contained" onClick={onSubmit1} style={{display: 'block', margin: '20px'}} type = "submit">Submit</Button>
                 {/* <Button variant="text">Text</Button> */}
            </FormControl>
        </div>
    )
}

export default LoginPage;