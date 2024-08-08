import { StudentCreateNestedManyWithoutGendersInput } from "./StudentCreateNestedManyWithoutGendersInput";

export type GenderCreateInput = {
  students?: StudentCreateNestedManyWithoutGendersInput;
  typeField?: string | null;
};
