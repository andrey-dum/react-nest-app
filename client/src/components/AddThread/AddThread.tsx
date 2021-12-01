import { Button, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import styled from 'styled-components';

interface Props {
    companyId: number | string;
}

const StyledForm = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 30px;

    .MuiButton-root {
        padding: 15px 25px;
        margin-top: 10px;

    }

    .MuiTextField-root {
        margin-bottom: 15px;
    }
`;

export const AddThread: React.FC<Props> = ({companyId}) => {

    const [data, setData] = useState({
        name: '',
        payload: 0,
        status: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({
            ...data,
            [e.target.name]: e.target.type === 'checkbox' 
            ? e.target.checked 
            : e.target.value 
        })
    }

    const {createThread} = useActions()

    const create = () => {
        createThread({
            companyId,
            ...data
        })

    }

    return (
        <StyledForm>
            <Typography variant="h4">Добаваить поток</Typography>
            <TextField name="name" label="Название" value={data.name} variant="standard" onChange={handleChange} />
            <TextField name="payload" type="number"  value={data.payload} label="Нагрузка" variant="standard" onChange={handleChange} />
            <FormGroup>
                <FormControlLabel control={<Checkbox name="status" value={data.status} onChange={handleChange}  />} label="Active" />
            </FormGroup>

            <Button 
                onClick={create} 
                variant="contained" 
                size="large"
            >Добавить</Button>
        </StyledForm>
    )
}