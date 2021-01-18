import { educationStatus, Gender, studentStatus } from "src/entities/student.entity";

export interface CreateStudentDto {
  name: string
  desc?: string
  gender: Gender
  idCard?: string
  status?: studentStatus
  educationType?: educationStatus
  school?: string
  graduationTime?: Date
  telphone?: string
  emeConnect?: string
  emeTelPhone?: string
  openId?: string
}