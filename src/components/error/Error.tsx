import * as React from 'react';
import { ErrorContainer, ErrorTitle } from '../../styles/ErrorContainer';

const Error = ({error}) =>{
  return (
    <ErrorContainer>
        <ErrorTitle>{error}</ErrorTitle>
    </ErrorContainer>
  );
}

export default Error
