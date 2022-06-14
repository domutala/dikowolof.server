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

  // /** id de l'utilisateur connecté à la session */
  // @Column({ type: "text", nullable: true })
  // user?: string;

  /** id de l'user connecté à la session */
  @Column({ type: "text", nullable: true })
  userId?: string;

  /** C'est la clé publique du client de la session */
  @Column({ type: "text" })
  publicKey!: string;

  @Column({ type: "boolean", default: false })
  expired!: boolean;

  @Column({ type: "datetime" })
  @CreateDateColumn()
  createdAt!: Date;

  @Column({ type: "datetime" })
  @UpdateDateColumn()
  updatedAt!: Date;
}
