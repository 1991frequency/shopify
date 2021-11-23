import { Card, Tag, Stack, TextField, Layout, Button } from "@shopify/polaris";
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo';
import React, { useState } from "react";
const UPDATE_TAG = gql
    `mutation UpdateTag($id : ID!, $tags : [String!]){
    customerUpdate(input: { id : $id , tags:$tags} ){
        customer{tags}
    }
}`


function Customer({ displayName, email, id, tags }) {
    let [formTags, setFormTags] = useState(tags);
    let [inputValue, setInputValue] = useState("");
    let [updateTag] = useMutation(UPDATE_TAG);

    function onDelete(tagToDelete) {
        setFormTags(formTags.filter(tag => tag != tagToDelete))
    }

    return <Card title={displayName}>
        <Card.Section>
            <Stack>{formTags.map(tag => <Tag onRemove={() => onDelete(tag)}>{tag}</Tag>)}</Stack>
        </Card.Section>
        <Card.Section>
            <Layout>
                <Layout.Section >
                    <TextField

                        value={inputValue}
                        onChange={e => setInputValue(e)}
                        autoComplete="off"
                    />
                </Layout.Section>
                <Layout.Section secondary>

                    <Button onClick={() => { setFormTags([...formTags, inputValue]); setInputValue("") }}>Add tag</Button>  

                    <Button onClick={() => updateTag({ variables: { id: id, tags: formTags } })}>Apply Changes</Button>


                </Layout.Section>
            </Layout>

        </Card.Section>
    </Card>

}

function TagComp({ tag, onDelete }) {
    return;
}




export default Customer;