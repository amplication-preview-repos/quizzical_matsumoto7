import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StudentUpdateManyWithoutSectionsInput } from "./StudentUpdateManyWithoutSectionsInput";

export type SectionUpdateInput = {
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutSectionsInput;
};
