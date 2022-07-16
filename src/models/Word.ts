import { IBase } from ".";

export type IWordTranslate = { [key: string]: string[] };

export interface IWordParams {
  value: string;
  mean?: string;
  translate?: { [key: string]: string[] };
  addedBy?: string;
}

export default interface IWord extends IBase {
  params: IWordParams;
}
