import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { GenderTitle } from "../gender/GenderTitle";
import { GradeTitle } from "../grade/GradeTitle";
import { SectionTitle } from "../section/SectionTitle";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="age" source="age" />
        <ReferenceInput source="gender.id" reference="Gender" label="Gender">
          <SelectInput optionText={GenderTitle} />
        </ReferenceInput>
        <ReferenceInput source="grade.id" reference="Grade" label="Grade">
          <SelectInput optionText={GradeTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <ReferenceInput source="section.id" reference="Section" label="Section">
          <SelectInput optionText={SectionTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
