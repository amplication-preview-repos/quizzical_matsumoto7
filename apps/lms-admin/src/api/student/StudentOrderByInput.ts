import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  genderId?: SortOrder;
  gradeId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  sectionId?: SortOrder;
  subjects?: SortOrder;
  updatedAt?: SortOrder;
};
