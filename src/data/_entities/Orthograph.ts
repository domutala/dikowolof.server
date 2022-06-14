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
@Entity({ name: "orthograph" })
export default class Orthograph extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  word!: string;

  @Column()
  user!: string;

  @Column()
  value!: string;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
