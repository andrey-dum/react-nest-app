import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import {AddThread} from '../components/AddThread/AddThread';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Button, Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import { getCompany } from '../store/actions/companyActions';
import { useDispatch } from 'react-redux';
import { EditForm } from '../components/EditForm/EditForm';

const StyledBox = styled(Box)`
   
    display: flex;
    flex-direction: column;
    align-items: center;

    .wrapper {
        width: 500px;
        max-width: 500px;

    }
`;

export const Company: React.FC = () => {
    const {id} = useParams();

    const [editMode, setEditMode] = useState(false)

    const { companyPage, loading } = useTypedSelector(state=> state.company)
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getCompany(id));
        }

        // return () => { setCompany(null) }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const status = companyPage?.status ? 'Активна' : 'Не активна';

 
    return (
        <StyledBox>
            <Box className="wrapper">
                {!editMode ? 
                <>
                    <Typography variant="h4" paragraph>{companyPage && companyPage?.name}</Typography>
                    <Typography paragraph>{companyPage && companyPage?.description}</Typography>
                    <Typography gutterBottom>{status}</Typography>

                    <Divider />

                    <Typography variant="h6" gutterBottom>Потоки</Typography>

                    {companyPage?.threads && companyPage?.threads.map(t => (
                        <Typography gutterBottom key={t._id}>{t.name} - {t.payload}% - {t.status ? 'Active' : 'Disabled'} </Typography>
                    ))}
                </>
                :
                <EditForm  company={companyPage} />
                
            }

                <Box mb={3}><Divider /></Box>
                    

                <Button 
                    onClick={() => setEditMode(!editMode)}
                    variant={!editMode ? 'contained' : 'outlined'}
                    size="large"
                >{editMode ? 'Назад' : 'Редактировать'}</Button>


                <AddThread companyId={companyPage?._id} />

            </Box>

            
        </StyledBox>
    )
}

