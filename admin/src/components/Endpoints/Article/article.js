import React from "react";
import {
  Create,
  Datagrid,
  Edit,
  List,
  NumberField,
  NumberInput,
  ReferenceArrayInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const ArticleList = (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="Album.name" />
        <NumberField source="Price.price" />
        <TextField source="Format.name" />
        <NumberField source="Quantity.quantity" />
      </Datagrid>
    </List>
);

export const ArticleEdit = (props) => (
  <Edit {...props}>
    <Edit {...props}>
      <SimpleForm defaultValue={{role: "ADMIN"}}>
        <TextInput source="id" />
        <TextInput source="Album.name" />
        <NumberInput source="Price.price" />
        <TextInput source="Format.name" />
        <NumberInput source="Quantity.quantity" />
      </SimpleForm>
    </Edit>
  </Edit>
);

export const ArticleCreate = (props) => (
  <Create {...props}>
    <SimpleForm defaultValue={{role: "ADMIN"}}>
      <TextInput source="id" />
      <ReferenceArrayInput source="AlbumId" reference="albums">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="PriceId" reference="prices">
        <SelectInput optionText="price" />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="FormatId" reference="formats">
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceArrayInput source="QuantityId" reference="quantities">
        <SelectInput optionText="quantity" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
