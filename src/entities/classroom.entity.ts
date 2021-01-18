import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Education } from "./education.entity";
import { Student } from "./student.entity";

@Entity()
export class ClassRoom extends BaseEntity {
  @OneToMany(type => Student, student => student.classRoom)
  students: []

  @OneToMany(type => Education, education => education.classRooms)
  education: Education
}