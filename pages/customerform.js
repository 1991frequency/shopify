import { Card, Form, TextField , Button , FormLayout} from "@shopify/polaris";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import React, { useState } from "react";


const ADD_CUSTOMER = gql
    `mutation AddCustomer($firstName : String!, $lastName : String! , $email : String!){
    customerCreate(input: {   
        firstName:$firstName , 
        lastName : $lastName , 
        email : $email 
    }){
        customer{id}
    }    
}`

function CustomerForm({ onSub }) {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [createCustomer] = useMutation(ADD_CUSTOMER);

    return <Card title="Create Customer" sectioned>
        <Form onSubmit={e => {
            e.preventDefault(); onSub(); createCustomer({
                variables: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                }
            }); setEmail(""); setFirstName(""); setLastName("")
        }}>
            <FormLayout>
            <TextField
                label="First Name:"
                value={firstName}
                onChange={setFirstName}
                autoComplete="off"
            />
            <TextField
                label="Last Name:"
                value={lastName}
                onChange={setLastName}
                autoComplete="off"
            />
            <TextField
                label="Email:"
                type="email"
                value={email}
                onChange={setEmail}
                autoComplete="off"
            />
            <br/>
            <Button submit>Add Customer</Button>
            </FormLayout>
        </Form>
    </Card>

}

export default CustomerForm;