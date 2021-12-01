import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import styled from 'styled-components';

interface IProps {
    loading: boolean;
}

const StyledForm = styled.div`
    max-width: 480px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 20px;

    .MuiButton-root {
        padding: 15px 25px;
        margin-top: 10px;

    }
    .MuiTextField-root {
        margin-bottom: 15px;
    }
`;

export const AddForm: React.FC<IProps> = ({loading}) => {

    const {createCompany} = useActions()

    const [data, setData] = useState({
        name: '',
        description: '',
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

    
    const handleSubmit = () => {
       if(data.name) {
        createCompany({
           ...data
        })
       }
    }

    return (
       <div>
            <StyledForm className="addForm">
                <h2>Создать кампанию</h2>
                <TextField name="name" value={data.name} onChange={handleChange} label="Название" variant="outlined" />
                <TextField name="description" value={data.description} onChange={handleChange} label="Название" variant="outlined" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox name="status" value={data.status} onChange={handleChange}  />} label="Active" />
                </FormGroup>
                <Button 
                    onClick={handleSubmit}
                    variant="contained" 
                    size="large"
                    disabled={loading || !data.name}
                    //  style={{padding: 10}}
                >Создать</Button>
            </StyledForm>
       </div>
    )
}

