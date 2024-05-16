import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MediaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MediaItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
