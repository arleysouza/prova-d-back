import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "numbers" })
export class Number {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type:"integer", nullable:false })
  value: number;
}
