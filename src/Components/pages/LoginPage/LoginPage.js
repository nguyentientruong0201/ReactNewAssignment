import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
            const { token, userIO } = json;
            localStorage.setItem('token', token);
            localStorage.setItem('userId', userIO);
            navigate('/profile');
        });
        
    }

    return (
        <div>
            <form onSubmit={ handleOnSubmit }>
                <input style={{display: 'block', margin : '20px'}}
                 type="text"
                  placeholder="Email"
                  value={ values.email }
                  onChange = { handleInputChange }
                  onBlur={ handleInputBlur }
                  name="email"
                  ></input>
                  { touched.email && <p style={{color: 'red', margin: '20px'}}>{ errors.email }</p>}
                <input style={{display: 'block', margin: '20px'}}
                  type="password"
                  placeholder="Password"
                  value={ values.password }
                  onChange = { handleInputChange }
                  onBlur = { handleInputBlur }
                  name="password"
                  ></input>
                 { touched.password && <p style={{color: 'red', margin: '20px'}}>{ errors.password }</p>}
                 <button onClick={onSubmit1} style={{display: 'block', margin: '20px'}} type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginPage;