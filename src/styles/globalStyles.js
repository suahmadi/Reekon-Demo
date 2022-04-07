import styled, { css } from "styled-components"

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    padding: 0 0 px;
  }
  padding: 0 32px;

  position: relative;
  width: auto;
  height: 100%;
  color: #ffb300;

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: #ffb300;
      max-width: 100% !important;
    `}
`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  color: #ffb300;
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 10;
    `};
`

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;
  @media only screen and (max-width: 600px) {
    height: 0px;
    width: 0px;
  }
  width: 32px;
  height: 32px;
  background: #ffb300;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 999;
  &.pointer {
    @media only screen and (max-width: 600px) {
      border: 0px;
    }
    border: 4px solid ${props => props.theme.text} !important;
  }
  &.hovered {
    background: transparent !important;
    width: 56px;
    height: 56px;
    @media only screen and (max-width: 600px) {
      height: 0px;
      width: 0px;
    }
    border: 4px solid #ffb300;
    border: 4px solid #ffb300;
  }
  &.locked {
    background: transparent !important;
    width: 56px;
    height: 56px;
    @media only screen and (max-width: 600px) {
      height: 0px;
      width: 0px;
    }
    border: 4px solid ${props => props.theme.text} !important;
    top: ${props => props.theme.top} !important;
    left: ${props => props.theme.left} !important;
  }
  &.nav-open {
    background: ${props => props.theme.text};
  }

  &.nav-open,
  &.locked {
    border: 4px solid ${props => props.theme.text} !important;
  }
`
