import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    comment: "标题"
  })
  name: string

  @Column({
    comment: "描述信息",
    nullable: true
  })
  desc: string

  @CreateDateColumn()
  createAt: Date

  @UpdateDateColumn()
  updateAt: Date
}