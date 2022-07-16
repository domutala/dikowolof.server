export interface EFile {
  data: string;
  name?: string;
  type: string;
}

export interface MFileParams extends EFile {
  user?: string;
}

export interface MFile {
  id: string;
  params: MFileParams;
  createdAt: Date;
  updatedAt: Date;
}
