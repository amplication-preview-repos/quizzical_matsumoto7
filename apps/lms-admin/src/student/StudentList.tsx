import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GENDER_TITLE_FIELD } from "../gender/GenderTitle";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const StudentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Students"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="age" source="age" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Gender" source="gender.id" reference="Gender">
          <TextField source={GENDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Grade" source="grade.id" reference="Grade">
          <TextField source={GRADE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <ReferenceField label="Section" source="section.id" reference="Section">
          <TextField source={SECTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="subjects" source="subjects" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
