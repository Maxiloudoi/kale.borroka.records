import {
  Create,
  Datagrid,
  Edit,
  List,
  ReferenceArrayInput,
  SelectInput,
  SimpleForm,
  TextField,
  TextInput,
  Pagination
} from "react-admin";

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

export const SongList = (props) => (
  <List {...props} pagination={<PostPagination />} >
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="Artist.name" />
    </Datagrid>
  </List>
);
export const SongEdit = (props) => (
  <Edit {...props}>
    <SimpleForm defaultValue={{role: "ADMIN"}}>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="Artist.name" />
    </SimpleForm>
  </Edit>
);

export const SongCreate = (props) => (
  <Create {...props}>
    <SimpleForm defaultValue={{role: "ADMIN"}}>
      <TextInput source="id" />
      <TextInput source="name" />
      <ReferenceArrayInput source="ArtistId" reference="artists" allowEmpty>
        <SelectInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
