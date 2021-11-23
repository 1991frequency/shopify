import {  Page,SettingToggle, TextStyle } from "@shopify/polaris";
import { useState } from "react";
import CustomerForm from "./customerform";
import CustomerList from "./customerlist";

const Index = () => {
  let [page, setPage] = useState(false);
  
  let switchPage= () => setPage(!page)

  const contentStatus = page ? 'Create Customer' : 'Add Tags';

 

  return(
    
  <Page>
    <SettingToggle
      action={{
        content: contentStatus,
        onAction: switchPage,
      }}
      enabled={page}
    >
      <TextStyle variation="strong">You are currently in {page? "Add Tags":"Create Customer"} page.</TextStyle>
    </SettingToggle>
    <br/>
    {page?<CustomerList /> :<CustomerForm  /> }
  </Page>
  )}
export default Index;
