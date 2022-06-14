import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from "typeorm";

/**
 * cette table contient les information sur les fichiers
 * @author domutala
 */
@Entity({ name: "file" })
export default class File extends BaseEntity {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column({ nullable: true })
  name!: string;

  @Column()
  type!: string;

  @Column()
  value!: string;

  @Column()
  path!: string;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
