import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CardItem } from '../../components/Card/Card';
import Loader from '../Loader/Loader';
import { AddForm } from '../AddForm/AddForm';
import { Typography, Box } from '@mui/material';


export const CompanyList = () => {

 const { getAllCompanies } = useActions()
  const { companies, loading } = useTypedSelector(state => state.company)
 
  useEffect(() => {
    getAllCompanies()
  }, [])

  if(loading) {
    return <Loader />
  }


  return (
    <div className="companyList">
      <AddForm loading={loading} /> 

      <Box display="flex" justifyContent="center" mt={3}>
        <Typography variant="h5" component="div" paragraph>
          Список кампаний     
        </Typography>
      </Box>

      <div className="cardWrapper">
        
          {
              companies && companies.map((item: any) => (
                  <CardItem key={item._id} item={item} />
              ))
          }
      </div>
    </div>
  );
}

