import styled from 'react-emotion';
import { css } from 'emotion';

export const CardContainer = styled('div')`
  label: CardContainer;
  margin: 9px;
  padding: 9px;
  background: lightgray;
  position: relative;
`;

export const CardRow = styled('div')`
  label: CardRow;
  padding: 3px;
`;

export const CardDeleteButton = styled('button')`
  label: CardDeleteButton;
  position: absolute;
  top: 3px;
  right: 3px;
  background: red;
  color: white;
  padding: 3px 9px;
  border-radius: 2px;
  box-shadow: 0px 0px 1px #000000;
`;

export const CardEditButton = styled(CardDeleteButton)`
  label: CardEditButton;
  top: 30px;
  background: skyblue;
`;
