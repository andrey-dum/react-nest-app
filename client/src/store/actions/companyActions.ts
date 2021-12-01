import axios from 'axios';
import { Dispatch } from 'react';
import { CompanyAction, CompanyActionTypes, CompanyState, ICompany, IThread } from '../../types/company';

export const getAllCompanies = () => {
    return async (dispatch: Dispatch<CompanyAction>) => {
      try {
        dispatch({type:CompanyActionTypes.FETCH_COMPANIES})

        const response = await axios.get(`http://localhost:5000/companies`)

        setTimeout(() => {
          dispatch({ type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS, payload: response.data })
        }, 500)
        
      } catch (error) {
          dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ERROR, payload: 'Произошла ошибка при загрузке !'})
      }
         
    }
};

  export const createCompany = (company: ICompany) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
      try {
        // dispatch({type: CompanyActionTypes.CREATE, payload: company})

        const response = await axios.post(`http://localhost:5000/companies`, company)

        // dispatch({ type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS, payload: response.data })
        dispatch({type: CompanyActionTypes.CREATE, payload: response.data})
        
      } catch (error) {
          // dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ERROR, payload: 'Произошла ошибка при загрузке !'})
      }
         
    }

  };



  export const getCompany = (id: string) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
      try {

        const response = await axios.get(`http://localhost:5000/companies/${id}`)

        dispatch({type: CompanyActionTypes.SET_COMPANY, payload: response.data})
        
      } catch (error) {
          // dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ERROR, payload: 'Произошла ошибка при загрузке !'})
      }
         
    }

  };


  export const setCompany = (company: ICompany | null) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
      try {

        dispatch({type: CompanyActionTypes.SET_COMPANY, payload: company})
        
      } catch (error) {
          // dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ERROR, payload: 'Произошла ошибка при загрузке !'})
      }
         
    }

 };


  export const createThread = (data: IThread) => {
    return async (dispatch: Dispatch<CompanyAction>, getState: any) => {
      try {
        const slug = getState().company.companyPage.name;
        
        await axios.post(`http://localhost:5000/companies/thread`, data)
        const company = await axios.get(`http://localhost:5000/companies/${slug}`)

      dispatch({type: CompanyActionTypes.SET_COMPANY, payload: company.data})


      } catch (error) {
          // dispatch({type: CompanyActionTypes.FETCH_COMPANIES_ERROR, payload: 'Произошла ошибка при загрузке задач!'})
      }
         
    }
  };