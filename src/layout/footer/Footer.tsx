import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"} >
                <Name>Goltsov Pavel</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"}  width={"21px"} viewBox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"linkedin"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewBox={"0 0 21px 21px"} iconId={"vk"}/>
                        </SocialLink>
                    </SocialItem>

                </SocialList>
                <Copygight>© 2023 Goltsov Pavel, All Rights Reserved.</Copygight>
            </FlexWrapper>


        </StyledFooter>
    )
        ;
};
const StyledFooter = styled.footer`
background-color: darkolivegreen;
  min-height: 20vh;
`

const Name = styled.span`

`
const SocialList = styled.ul`
display: flex;
  gap:30px
`
const SocialItem = styled.li`
    

`
const SocialLink = styled.a`

`
const Copygight = styled.footer`

`
