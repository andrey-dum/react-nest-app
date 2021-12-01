import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Company, CompanyDocument} from "./schemas/company.schema";
import {Model, ObjectId} from "mongoose";
import {Thread, ThreadDocument} from "./schemas/thread.schema";
import { CompanyData, CreateCompanyDto } from './dto/create-company.dto';
import {CreateThreadDto} from "./dto/create-thread.dto";

@Injectable()
export class CompanyService {

    constructor(
        @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
        @InjectModel(Thread.name) private threadModel: Model<ThreadDocument>,
    ) {}


    async create(dto: CreateCompanyDto): Promise<Company> {
        const company = await this.companyModel.create({...dto})
        return company;
    }


    async getAll(): Promise<Company[]> {
        const tracks = await this.companyModel.find().populate('threads');
        return tracks;
    }

    async findOne(id): Promise<Company> {
        const comp = await this.companyModel.findOne({_id: id}).populate('threads');
        // const comp = await this.companyModel.findOne({name: slug}).populate('threads');
        return comp;
    } 

    async addThread(dto: CreateThreadDto): Promise<Thread> {
        const company = await this.companyModel.findById(dto.companyId);
        const thread = await this.threadModel.create({...dto})
        company.threads.push(thread._id)
        await company.save();
        return thread;
    }

    async updateCompany(slug: string, updatedData: CompanyData): Promise<any> {
        let toUpdate = await this.companyModel.findOne({ name: slug});
        let updated = Object.assign(toUpdate, updatedData);
        // const company = await this.companyModel.save(updated);
        // return company;
    }
}
