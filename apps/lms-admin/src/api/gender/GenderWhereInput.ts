import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GenderWhereInput = {
  id?: StringFilter;
  students?: StudentListRelationFilter;
  typeField?: StringNullableFilter;
};
