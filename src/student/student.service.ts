import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/student.dto';
import { StudentsQuery } from '../common/interfaces/students.query.interface';

@Injectable()
export class StudentService {
  
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>
  ) { }

  
  create(student: CreateStudentDto): Promise<Student> {
    const {name, desc, gender, idCard, status, educationType, school, graduationTime, telphone, emeConnect, emeTelPhone, openId} = student
     

    return this.studentRepository.save({
      name, desc, gender, idCard, status, educationType, school, graduationTime, telphone, emeConnect, emeTelPhone, openId
    })
  }

  async all({page, limit}: StudentsQuery): Promise<Object> {
    const [result, count] = await this.studentRepository.findAndCount({
      select: ["name"],
      skip: (page - 1) * limit,
      take: limit
    })

    return {
      body: result,
      total: count
    }
    
  }

}
