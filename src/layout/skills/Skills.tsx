import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {SectionTitle} from "../../components/menu/SectionTitle";
import {Skill} from "./skill/skill";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>

            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Skill iconId={"codeSvg"}
                       title={"html5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"css"}
                       title={"css5"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"react"}
                       title={"React"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"typescript"}
                       title={"TS"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"styledComponents"}
                       title={"Styled Components"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
                <Skill iconId={"figmaSvg"}
                       title={"Figma"}
                       description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n" +
                           "                labore et dolore magna aliqua Ut enim"}/>
            </FlexWrapper>

        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: palevioletred;
  min-height: 100vh;
`
