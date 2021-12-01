import { Body, Controller, Get, Post, Param, Delete, UploadedFiles, UseInterceptors, Query, Put, Patch } from "@nestjs/common";
import {CompanyService} from "./company.service";
import {CompanyData, CreateCompanyDto} from "./dto/create-company.dto";
import {ObjectId} from "mongoose";
import { CreateThreadDto } from './dto/create-thread.dto';
import { Company } from "./schemas/company.schema";


@Controller('/companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {    }

  @Post()
  create(@Body() dto: CreateCompanyDto) {
      return this.companyService.create(dto);
  }

  @Get()
  getAll() {
      return this.companyService.getAll()
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Company> {
    return await this.companyService.findOne(id);
  }
  // @Get(':slug')
  // async findOne(@Param('slug') slug): Promise<Company> {
  //   return await this.companyService.findOne(slug);
  // }

  @Post('/thread')
  addComment(@Body() dto: CreateThreadDto) {
      return this.companyService.addThread(dto);
  }

  @Put(':slug')
  async update(@Param() params, @Body('company') companyData: CompanyData) {
    return this.companyService.updateCompany(params.slug, companyData);
  }

  // @Delete(':id')
  // delete(@Param('id') id: ObjectId) {
  //   return this.trackService.delete(id);
  // }

}