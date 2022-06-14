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
 * cette table contient les information de l'utilisateur.
 * @author domutala
 * @version 0.2.0
 */
@Entity({ name: "user" })
export default class User extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: { [key: string]: any };

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
