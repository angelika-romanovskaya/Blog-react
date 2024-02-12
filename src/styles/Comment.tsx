import {styled} from 'styled-components'


export const CommentDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    gap: 10px;
`

export const SaveComment = styled.button`
    color: white;
    font-size: 16px;
    padding: 5px 10px;
    width: fit-content;
    background-color: #bebaba;
    border: none;
`

export const CommentInput = styled.textarea`
    color: white;
    font-size: 16px;
    padding: 10px 15px;
    width: calc(100vw - 300px);

    @media (max-width:760px) {
        width: calc(100vw - 200px)
    }
`