import { GenderWhereUniqueInput } from "../gender/GenderWhereUniqueInput";
import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { SectionWhereUniqueInput } from "../section/SectionWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type StudentUpdateInput = {
  age?: number | null;
  gender?: GenderWhereUniqueInput | null;
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  section?: SectionWhereUniqueInput | null;
  subjects?: InputJsonValue;
};
