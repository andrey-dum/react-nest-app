import { MONGODB } from './config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';


@Module({
  imports: [
    CompanyModule,
    MongooseModule.forRoot(MONGODB),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
