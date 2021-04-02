import {
    Create,
    Datagrid,
    SimpleForm,
    Edit,
    List,
    TextField,
    EmailField,
    TextInput,
    DateInput,
    DateField
} from "react-admin";

export const UserList = props => (
    <List {...props} defaultValue={{role: "ADMIN"}}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="usertype" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm defaultValue={{role: "ADMIN"}}>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="usertype" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm defaultValue={{role: "ADMIN"}}>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="usertype" />
            <DateInput source="createdAt" />
            <DateInput source="updatedAt" />
        </SimpleForm>
    </Create>
);
