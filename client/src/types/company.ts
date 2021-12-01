export interface CompanyState {
    companies: ICompany[];
    loading: boolean;
    error?: null | string;
    companyPage?: ICompany | undefined | null; 
    
}

export interface ICompany {
    _id?: any;
    name: string;
    description: string;
    status: boolean;
    threads?: IThread[];
}

export interface CompanyData {
    _id?: any;
    name?: string;
    description?: string;
    status?: boolean;

    threads?: IThread[];
}

export interface IThread {
    _id?: string;
    name: string;
    status: boolean;
    payload: number;
    companyId: number | string;
}

export enum CompanyActionTypes {
    FETCH_COMPANIES= 'FETCH_COMPANIES',
    FETCH_COMPANIES_SUCCESS= 'FETCH_COMPANIES_SUCCESS',
    FETCH_COMPANIES_ERROR= 'FETCH_COMPANIES_ERROR',
    CREATE= 'CREATE',
    SET_COMPANY= 'SET_COMPANY',
    SET_THREAD= 'SET_THREAD',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
}

interface FetchCompanyAction {
    type: CompanyActionTypes.FETCH_COMPANIES;
}
interface FetchCompanySuccessAction {
    type: CompanyActionTypes.FETCH_COMPANIES_SUCCESS;
    payload: any[];
}
interface FetchCompanyErrorAction {
    type: CompanyActionTypes.FETCH_COMPANIES_ERROR;
    payload: string;
}
interface CreateAction {
    type: CompanyActionTypes.CREATE;
    payload: ICompany;
}

interface SetCompanyPageAction {
    type: CompanyActionTypes.SET_COMPANY;
    payload: ICompany | null;
}


export type CompanyAction = 
FetchCompanyAction 
| FetchCompanySuccessAction 
| FetchCompanyErrorAction 
| CreateAction 
| SetCompanyPageAction