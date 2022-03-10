import React, { useState } from "react";


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

const ProfilePage = () => {
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
        evt.preventDefault();
        console.log('value= ', values);
    }
    return (
        <div>
            <h5>You need to login to continue</h5>
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
                <button style={{display: 'block', margin: '20px'}} type = "submit">Submit</button>
            </form>
        </div>
    )
}

export default ProfilePage;