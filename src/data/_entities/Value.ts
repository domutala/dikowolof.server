import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IValueParams } from "~/src/models/Value";

/**
 * @author domutala
 */
@Entity({ name: "value" })
export default class Value extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: IValueParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
