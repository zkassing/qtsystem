import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsIdentityCard, IsNotEmpty, Validator } from "class-validator";
import { educationStatus, Gender, studentStatus } from "src/entities/student.entity";

Validator
export class CreateStudentDto {
  @IsNotEmpty({
    message: "姓名不能为空"
  })
  @ApiProperty({
    name: 'name',
    required: true,
    description: "学生姓名"
  })
  name: string
  @ApiProperty({
    name: 'desc',
    required: false,
    description: '描述信息'
  })
  desc?: string
  

  @IsEnum(Gender, {
    message: "输入的性别不符合要求"
  })
  @ApiProperty({
    name: 'gender',
    description: '性别',
    enum: Gender,
    default: Gender.UNKNOWN,
    required: false
  })
  gender: Gender

  @ApiProperty({
    name: 'idCard',
    description: '身份证号',
    required: false
  })
  @IsIdentityCard("ES")
  idCard?: string

  @IsEnum(studentStatus, {
    message: "学生状态不符合规则"
  })
  @ApiProperty({
    name: "status",
    enum: studentStatus,
    default: studentStatus.NOTINCLASS,
    required: false
  })
  status?: studentStatus

  @IsEnum(educationStatus, {
    message: "学历不符合规则"
  })
  @ApiProperty({
    name: 'educationType',
    enum: educationStatus,
    default: educationStatus.JUNIOR
  })
  educationType?: educationStatus

  @ApiProperty({
    name: "school",
    description: '毕业院校'
  })
  school?: string

  @ApiProperty({
    name: 'graduationTime',
    description: '毕业时间'
  })
  graduationTime?: Date

  @ApiProperty({
    name: 'telphone',
    description: "手机号码"
  })
  telphone?: string

  @ApiProperty({
    name: 'emeConnect',
    description: '紧急联系人'
  })
  emeConnect?: string

  @ApiProperty({
    name: 'emeTelPhone',
    description: '紧急联系人电话'
  })
  emeTelPhone?: string

  @ApiProperty({
    name: 'openId',
    description: '小程序唯一标识'
  })
  openId?: string
}