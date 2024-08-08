import { SectionUpdateManyWithoutGradesInput } from "./SectionUpdateManyWithoutGradesInput";
import { StudentUpdateManyWithoutGradesInput } from "./StudentUpdateManyWithoutGradesInput";
import { InputJsonValue } from "../../types";

export type GradeUpdateInput = {
  level?: number | null;
  sections?: SectionUpdateManyWithoutGradesInput;
  students?: StudentUpdateManyWithoutGradesInput;
  subjects?: InputJsonValue;
};
