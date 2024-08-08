import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GENDER_TITLE_FIELD } from "./GenderTitle";
import { GRADE_TITLE_FIELD } from "../grade/GradeTitle";
import { SECTION_TITLE_FIELD } from "../section/SectionTitle";

export const GenderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Student"
          target="genderId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <TextField label="age" source="age" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Gender"
              source="gender.id"
              reference="Gender"
            >
              <TextField source={GENDER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Grade" source="grade.id" reference="Grade">
              <TextField source={GRADE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Section"
              source="section.id"
              reference="Section"
            >
              <TextField source={SECTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="subjects" source="subjects" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
