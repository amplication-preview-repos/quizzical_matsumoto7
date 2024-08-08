import { Student } from "../student/Student";

export type Gender = {
  createdAt: Date;
  id: string;
  students?: Array<Student>;
  typeField: string | null;
  updatedAt: Date;
};
