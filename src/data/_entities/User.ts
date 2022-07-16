import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { MUserParams } from "~/src/models/User";

/**
 * cette table contient les information de l'utilisateur.
 * @author domutala
 * @version 0.2.0
 */
@Entity({ name: "user" })
export default class User extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: MUserParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
