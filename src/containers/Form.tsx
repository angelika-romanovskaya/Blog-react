import React, { useState } from 'react';
import { FormButton, FormInput, FormItem, FormStyle, FormSubmitDiv, FormTitle, FormWrapper, Label, Wrapper } from '../styles/FormElement';

interface SignUpProps {
    name?: any;
    value?: any;
}

const Form = (props:SignUpProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
                                            username : '',
                                            password : ''
                                        });

    const handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = error;
        switch (name) {
            case 'username':
                errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
                break;
            case 'password':
                errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
                break;
            default:
                break;
        }
        setError(errors);
        if(name === 'username') setUsername(value)
        else setPassword(value)
        console.log(errors);
    }
    const handleSubmit = (event : any) => {
        event.preventDefault();
        let validity = true;
        Object.values(error).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if(validity == true){
            console.log("Log in can be done");
        }else{
            console.log("You cannot be log in!!!")
        }
    }

    return (
        <Wrapper>
            <FormWrapper>
                <FormTitle>Log IN</FormTitle>
                <FormStyle onSubmit={handleSubmit} noValidate >
                    <FormItem>
                        <Label htmlFor="username">Full Name</Label>
                        <FormInput type='text' name='username' onChange={handleChange}/>
                        {error.username.length > 0 &&  <span style={{color: "red"}}>{error.username}</span>}
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="password">Password</Label>
                        <FormInput type='password' name='password' onChange={handleChange}/>
                        {error.password.length > 0 &&  <span style={{color: "red"}}>{error.password}</span>}
                    </FormItem>              
                    <FormSubmitDiv>
                        <FormButton>Log IN</FormButton>
                    </FormSubmitDiv>
                </FormStyle>
            </FormWrapper>
        </Wrapper>
    );
}

export default Form
