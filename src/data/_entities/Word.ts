import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * @author domutala
 */
@Entity({ name: "word" })
export default class Word extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  user!: string;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
