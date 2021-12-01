export class CreateCompanyDto {
    readonly name;
    readonly description;
    readonly status;
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
    name?: string;
    status?: boolean;
    payload?: number;
    companyId?: number | string;
}
