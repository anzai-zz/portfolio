import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const footer = css`
  position: relative;
`;

export const neko = css`
  position: absolute;
  right: 10px;
  bottom: calc(100% - 1px);
  width: 50px;

  ${pc} {
    width: 70px;
  }
`;

export const copyright = css`
  background-color: #000;
  text-align: center;
  padding: 5px;
  display: block;
  color: #fff;
  font-size: 1.3rem;
`;
