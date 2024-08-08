import { StudentUpdateManyWithoutGendersInput } from "./StudentUpdateManyWithoutGendersInput";

export type GenderUpdateInput = {
  students?: StudentUpdateManyWithoutGendersInput;
  typeField?: string | null;
};
