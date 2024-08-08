import { SortOrder } from "../../util/SortOrder";

export type SubjectOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subjectType?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
