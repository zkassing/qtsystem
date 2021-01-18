import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { ClassRoom } from "./classroom.entity";
import { Student } from "./student.entity";

@Entity()
export class Education extends BaseEntity {
  @OneToMany(type => Student, student => student.education)
  students: []

  @OneToMany(type => ClassRoom, classroom => classroom.education)
  classRooms: []
}
