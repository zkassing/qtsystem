import { CONNREFUSED } from "dns";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { ClassRoom } from "./classroom.entity";
import { Education } from "./education.entity";

export enum Gender {
  UNKNOWN = 0, // 未知
  MALE = 1, // 男
  FEMALE = 2 // 女
}

export enum studentStatus {
  /** 请假 */
  VACATION = 0, // 请假
  /** 在读 */
  READING = 1, // 在读
  /** 休学  */
  SUSPENSION = 2, // 休学
  /** 未入班 */
  NOTINCLASS = 3, // 未入班
  /** 辍学 */
  DROPOUT = 4, // 辍学
  /** 毕业 */
  GRADUATION = 5
}

export enum educationStatus {
  UNDERGRADUATES = 1, // 本科及以上
  JUNIOR = 2, // 专科
  OTHER = 3 // 其他

}

@Entity()
export class Student extends BaseEntity {
  @Column({
    type: "enum",
    enum: Gender,
    default: Gender.UNKNOWN
  })
  gender: number

  @Column({
    length: 18, 
    nullable: true
  })
  idCard: string

  @Column({
    type: "enum",
    enum: studentStatus,
    default: studentStatus.NOTINCLASS,
  })
  status: number

  @Column({
    type: "enum",
    enum: educationStatus,
    default: educationStatus.JUNIOR // 专科
  })
  educationType: number

  @Column({
    nullable: true
  })
  school: string

  @Column({
    type: 'timestamp',
    nullable: true
  })
  graduationTime: Date
  
  @Column({
    nullable: true
  })
  telphone: string

  @Column({
    nullable: true
  })
  emeConnect: string
  
  @Column({
    nullable: true
  })
  emeTelPhone: string

  @Column({
    nullable: true
  })
  openId: string

  @ManyToOne(type => ClassRoom, classroom => classroom.students, {
    nullable: true,
    onUpdate: "NO ACTION"
  })
  classRoom: ClassRoom

  @ManyToOne(type => Education, education => education.students, {
    nullable: true,
    onUpdate: "NO ACTION"
  })
  education: Education
}