import React, { useState } from 'react';
import { FormButton, FormInput, FormItem, FormStyle, FormSubmitDiv, FormTitle, FormWrapper, Label, Wrapper } from '../styles/FormElement';
import { useDispatch } from 'react-redux';
import { authUser } from '../actions/authAction';
import { useTypeSelector } from '../hook/useTypeSelector';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const auth = useTypeSelector(state => state.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [error, setError] = useState({
                                            username : '',
                                            password : '',
                                            all: ''
                                        });

    const handleChange = (event : any) => {
        const { name, value } = event.target;
        let errors = error;
        switch (name) {
            case 'username':
                errors.username = value.trim().length < 5 ? 'Username must be 5 characters long!': '';
                break;
            case 'password':
                errors.password = value.trim().length < 8 ? 'Password must be eight characters long!': '';
                break;
            default:
                break;
        }
        setError(errors);
        if(name === 'username') setUsername(value.trim())
        else setPassword(value.trim())
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        let validity = true;
        let errors = error;
        Object.values(error).forEach(
            (val) => val.length > 0 && (validity = false)
        );
        if(validity == true){
            dispatch(authUser(username, password))
            errors.all = auth.error.length > 0 ? auth.error : '';
            if(auth.auth) navigate('/')
            setError(errors)
        }
    }

    return (
        <Wrapper>
            <FormWrapper>
                <FormTitle>Log IN</FormTitle>
                <FormStyle onSubmit={handleSubmit} noValidate >
                    <FormItem>
                        <Label htmlFor="username">Username</Label>
                        <FormInput type='text' name='username' onChange={handleChange}/>
                        {error.username.length > 0 &&  <span style={{color: "red"}}>{error.username}</span>}
                    </FormItem>
                    <FormItem>
                        <Label htmlFor="password">Password</Label>
                        <FormInput type='password' name='password' onChange={handleChange}/>
                        {error.password.length > 0 &&  <span style={{color: "red"}}>{error.password}</span>}
                    </FormItem>              
                    <FormSubmitDiv>
                        <FormButton type='submit'>Log IN</FormButton>
                        {error.all.length > 0 &&  <span style={{color: "red"}}>{error.all}</span>}
                    </FormSubmitDiv>
                </FormStyle>
            </FormWrapper>
        </Wrapper>
    );
}

export default Form
