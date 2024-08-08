import { Grade } from "../grade/Grade";
import { Student } from "../student/Student";

export type Section = {
  createdAt: Date;
  grade?: Grade | null;
  id: string;
  name: string | null;
  students?: Array<Student>;
  updatedAt: Date;
};
