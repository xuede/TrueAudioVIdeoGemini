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

import { MEDIA_TITLE_FIELD } from "./MediaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MediaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="duration" source="duration" />
        <TextField label="filePath" source="filePath" />
        <TextField label="fileStoragePath" source="fileStoragePath" />
        <TextField label="ID" source="id" />
        <TextField label="linkedSession" source="linkedSession" />
        <TextField label="mediaDuration" source="mediaDuration" />
        <TextField label="mediaType" source="mediaType" />
        <TextField label="relatedSession" source="relatedSession" />
        <TextField label="storagePath" source="storagePath" />
        <TextField label="totalDuration" source="totalDuration" />
        <TextField label="typeOfMedia" source="typeOfMedia" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Session"
          target="mediaId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <ReferenceField label="media" source="media.id" reference="Media">
              <TextField source={MEDIA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="mode" source="mode" />
            <TextField label="startTime" source="startTime" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
