import {
  Create,
  Datagrid,
  Edit,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from "react-admin";

export const CityList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="city" />
    </Datagrid>
  </List>
);

export const CityEdit = ({permissions, ...props}) => (
  <Edit {...props}>
    <SimpleForm defaultValue={{role: "ADMIN"}}>
        {permissions === "ADMIN" && <TextInput source="id"/> && <TextInput source="city" /> }
    </SimpleForm>
  </Edit>
);

export const CityCreate = ({permissions, ...props}) => (
  <Create {...props}>
      <SimpleForm defaultValue={{role: "ADMIN"}}>
          {permissions === "ADMIN" && <TextInput source="id"/> && <TextInput source="city" /> }
      </SimpleForm>
  </Create>
);
