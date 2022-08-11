import { IBase } from ".";

export type IValueTranslate = { [key: string]: string[] };

export interface IValueParams {
  value: string;
  addedBy?: string;
  note: number;
  word: string;
}

export default interface IValue extends IBase {
  params: IValueParams;
}
