import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/student.dto';

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

}
