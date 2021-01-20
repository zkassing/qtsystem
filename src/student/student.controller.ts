import { Body, Controller, Get, Post, Query, UsePipes } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Student } from 'src/entities/student.entity';
import { ValidationPipe } from 'src/common/pipes/validation.pipe';
import { CreateStudentDto } from './dto/student.dto';
import { StudentsQuery } from '../common/interfaces/students.query.interface';
import { StudentService } from './student.service';

@ApiTags('学生信息')
@Controller('students')
export class StudentController {
  constructor (private readonly studentService: StudentService) {
    
  }

  @UsePipes(new ValidationPipe())
  @Post('/')
  async create (@Body() student: CreateStudentDto): Promise<Student> {
    return await this.studentService.create(student)
  }


  @ApiQuery({
    name: 'page',
    description: '页码',
    required: false
  })
  @ApiQuery({
    name: "limit",
    description: '总数',
    required: false
  })
  @Get('/')
  async all (@Query() query): Promise<object> {
    const studentsQuery: StudentsQuery = query
    const a = await this.studentService.all(studentsQuery)
    return a
  }

  

}
