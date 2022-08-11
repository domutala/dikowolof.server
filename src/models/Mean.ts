import { IBase } from ".";

export type IMeanTranslate = { [key: string]: string[] };

export interface IMeanParams {
  value: string;
  addedBy?: string;
  note: number;
  word: string;
}

export default interface IMean extends IBase {
  params: IMeanParams;
}
