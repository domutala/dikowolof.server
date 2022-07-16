import { IBase } from ".";
import MUser from "./User";

export interface MSessionParams {
  keys: { public: string };
  user?: { id: string };
  close?: boolean;
}

export interface MSession extends IBase {
  params: MSessionParams;
}

export interface ISession extends MSession {
  user?: MUser;
}
