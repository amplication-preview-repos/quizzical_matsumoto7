import { SortOrder } from "../../util/SortOrder";

export type GradeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  subjects?: SortOrder;
  updatedAt?: SortOrder;
};
