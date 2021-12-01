import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import styled from 'styled-components';
import { ICompany } from '../../types/company';

interface Props {
    company: ICompany | undefined | null;
}

const StyledForm = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .MuiButton-root {
        padding: 15px 25px;
        margin-top: 10px;

    }

    .MuiTextField-root {
        margin-bottom: 15px;
    }
`;

export const EditForm: React.FC<Props> = ({company}) => {

    const [name, setName] = useState(company?.name)
    const [desc, setDesc] = useState(company?.description)
    const [checked, setChecked] = useState(company?.status)
   

    const update = () => {
       

    }

    return (
        <StyledForm>
            <TextField name="name" label="Название" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} label="Описание" variant="standard" />
            <FormGroup>
                <FormControlLabel control={<Checkbox value={checked} onChange={e => setChecked(e.target.checked)} />} label="Active" />
            </FormGroup>
            <Button 
                onClick={update} 
                variant="contained" 
                size="large"
            >Редактировать</Button>
        </StyledForm>
    )
}

