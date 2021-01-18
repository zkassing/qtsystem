import { Body, Controller, Post } from '@nestjs/common';
import { Student } from 'src/entities/student.entity';
import { CreateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';


@Controller('students')
export class StudentController {
  constructor (private readonly studentService: StudentService) {
    
  }

  @Post('/')
  create (@Body() student: CreateStudentDto): Promise<Student> {
    return this.studentService.create(student)
  }

}
