import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type SectionWhereInput = {
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
};
