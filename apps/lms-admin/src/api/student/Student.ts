import { Gender } from "../gender/Gender";
import { Grade } from "../grade/Grade";
import { Section } from "../section/Section";
import { JsonValue } from "type-fest";

export type Student = {
  age: number | null;
  createdAt: Date;
  gender?: Gender | null;
  grade?: Grade | null;
  id: string;
  name: string | null;
  section?: Section | null;
  subjects: JsonValue;
  updatedAt: Date;
};
