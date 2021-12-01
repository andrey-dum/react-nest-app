import {Module} from "@nestjs/common";
import {CompanyController} from "./company.controller";
import {CompanyService} from "./company.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Company, CompanySchema} from "./schemas/company.schema";
import {Thread, ThreadSchema} from "./schemas/thread.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Company.name, schema: CompanySchema}]),
        MongooseModule.forFeature([{name: Thread.name, schema: ThreadSchema}]),
    ],
    controllers: [CompanyController],
    providers: [CompanyService]
})
export class CompanyModule {}