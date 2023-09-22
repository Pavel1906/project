import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/menu/SectionTitle";
import {Button} from "../../../components/Button";


export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Feild placeholder={"name"}/>
                <Feild placeholder={"subject"}/>
                <Feild placeholder={"message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>

        </StyledContact>
    );
};


const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #2c74e1;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin: 0 auto;
  padding: 0;



`

const Feild = styled.input`

`
