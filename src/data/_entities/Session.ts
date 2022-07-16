import { MSessionParams } from "@/models/Session";
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
 * cette table contient les information de connection du client.
 * @author domutala
 */
@Entity({ name: "session" })
export default class Session extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  params!: MSessionParams;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
