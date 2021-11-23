
import gql from 'graphql-tag';
import { useQuery} from 'react-apollo';
import React from "react";
import Customer from "./customer";

const GET_CUSTOMERS = gql
    `query {
    customers(first:100){
        edges{
            node{
                id,
                displayName,
                email,
                tags
            }
        }
    }
}`



function CustomerList({ id }) {
    let {data} = useQuery(GET_CUSTOMERS);
    return <div>{data && data.customers.edges.map(c => <Customer displayName={c.node.displayName}
        key={c.node.id} id={c.node.id} tags={c.node.tags} />)}</div>;
}
export default CustomerList;