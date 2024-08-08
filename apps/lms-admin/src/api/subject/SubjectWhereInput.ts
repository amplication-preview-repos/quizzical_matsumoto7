import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  subjectType?: "Option1";
  typeField?: "Option1";
};
