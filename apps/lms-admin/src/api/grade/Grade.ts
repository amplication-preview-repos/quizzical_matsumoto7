import { Section } from "../section/Section";
import { Student } from "../student/Student";
import { JsonValue } from "type-fest";

export type Grade = {
  createdAt: Date;
  id: string;
  level: number | null;
  sections?: Array<Section>;
  students?: Array<Student>;
  subjects: JsonValue;
  updatedAt: Date;
};
