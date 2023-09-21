import React from 'react';
import photo from "../../assets/img/photo.jpg"
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyleMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Pavel Goltsov</Name>
                    <MainTitle>A Web Developer (junior). </MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyleMain>
    );
};
const StyleMain = styled.div`
  min-height: 100vh;
`
const Photo = styled.img`
  width: 350px;  
  height: 430px;
  top: 296px;
  left: 940px;`

const MainTitle = styled.h1`

`
const Name = styled.h2`

`