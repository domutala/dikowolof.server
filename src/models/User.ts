export interface MUserParams {
  name: string;
  uid: string;
}

export default interface MUser {
  id: string;
  params: MUserParams;
  createdAt: Date;
  updatedAt: Date;
}
