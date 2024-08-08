import { Gender as TGender } from "../api/gender/Gender";

export const GENDER_TITLE_FIELD = "typeField";

export const GenderTitle = (record: TGender): string => {
  return record.typeField?.toString() || String(record.id);
};
