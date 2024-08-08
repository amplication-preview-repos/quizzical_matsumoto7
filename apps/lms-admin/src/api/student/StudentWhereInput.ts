import { IntNullableFilter } from "../../util/IntNullableFilter";
import { GenderWhereUniqueInput } from "../gender/GenderWhereUniqueInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type StudentWhereInput = {
  age?: IntNullableFilter;
  gender?: GenderWhereUniqueInput;
  grade?: GradeWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  section?: SectionWhereUniqueInput;
  subjects?: JsonFilter;
};
