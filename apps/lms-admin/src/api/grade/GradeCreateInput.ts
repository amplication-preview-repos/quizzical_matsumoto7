import { SectionCreateNestedManyWithoutGradesInput } from "./SectionCreateNestedManyWithoutGradesInput";
import { StudentCreateNestedManyWithoutGradesInput } from "./StudentCreateNestedManyWithoutGradesInput";
import { InputJsonValue } from "../../types";

export type GradeCreateInput = {
  level?: number | null;
  sections?: SectionCreateNestedManyWithoutGradesInput;
  students?: StudentCreateNestedManyWithoutGradesInput;
  subjects?: InputJsonValue;
};
