import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { IMeanParams } from "~/src/models/Mean";

/**
 * @author domutala
 */
@Entity({ name: "mean" })
export default class Mean extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: IMeanParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
