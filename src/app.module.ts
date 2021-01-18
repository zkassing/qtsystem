import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from './entities/user.entity';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
