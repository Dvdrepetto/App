import React from "react";
import styled, { css } from "styled-components";

function Login({onClick}) {
  return (
    <Container>
      <CardWrapper>
        <CardHeader>
          <CardHeading>Sign in</CardHeading>
        </CardHeader>

        <CardBody>
          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="E-mail" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
            <CardIcon className="fa fa-eye" eye small />
          </CardFieldset>

          <CardFieldset>
            <CardButton onClick={onClick} type="button">Sign In</CardButton>
          </CardFieldset>

        </CardBody>
      </CardWrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  ${props =>
    props.big &&
    css`
      font-size: 26px;
    `}

  ${props =>
    props.eye &&
    css`
      position: absolute;
      top: 8px;
      right: 0;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 14px;
    `}
`;
const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;