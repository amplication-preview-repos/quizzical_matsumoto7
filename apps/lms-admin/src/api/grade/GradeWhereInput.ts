import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SectionListRelationFilter } from "../section/SectionListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type GradeWhereInput = {
  id?: StringFilter;
  level?: IntNullableFilter;
  sections?: SectionListRelationFilter;
  students?: StudentListRelationFilter;
  subjects?: JsonFilter;
};
