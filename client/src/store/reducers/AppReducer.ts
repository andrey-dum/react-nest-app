import { CompanyAction, CompanyActionTypes, CompanyState } from "../../types/company";

const initialState: CompanyState = {
    companies: [],
    loading: false,
    companyPage: null
  };
  
  export default function AppReducer(state = initialState, action: CompanyAction) {
    switch (action.type) {
      case CompanyActionTypes.FETCH_COMPANIES:
        return {
          ...state,
          loading: true,
        };

        case CompanyActionTypes.FETCH_COMPANIES_SUCCESS:
          return {
              ...state,
              loading: false,
              companies: action.payload
          }
      case CompanyActionTypes.CREATE:
        return {
          ...state,
          companies: [...state.companies, action.payload],
        };
      case CompanyActionTypes.SET_COMPANY:
        return {
          ...state,
          companyPage: action.payload,
        };
      // case CompanyActionTypes.SET_THREAD:
      //   return {
      //     ...state,
      //     companyPage: action.payload,
      //   };
      default:
        return state;
    }
  }