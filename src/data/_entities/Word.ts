import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IWordParams } from "~/src/models/Word";

/**
 * @author domutala
 */
@Entity({ name: "word" })
export default class Word extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: IWordParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
