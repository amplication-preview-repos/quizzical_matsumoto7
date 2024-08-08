import { GradeWhereUniqueInput } from "../grade/GradeWhereUniqueInput";
import { StudentCreateNestedManyWithoutSectionsInput } from "./StudentCreateNestedManyWithoutSectionsInput";

export type SectionCreateInput = {
  grade?: GradeWhereUniqueInput | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutSectionsInput;
};
