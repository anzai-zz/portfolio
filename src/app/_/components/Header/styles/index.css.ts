import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const header = css`
  background-color: #000;
  padding: 15px;
  margin: 0 0 60px;

  ${pc} {
    margin: 0 0 100px;
  }
`;

export const link = css`
  color: #fff;
  text-decoration: none;
`;

export const title = css`
  font-size: 1.8rem;
  display: block;
  text-align: center;
  margin: 0 0 5px;

  ${pc} {
    font-size: 2.5rem;
  }
`;

export const sub = css`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: inherit;

  &::before {
    content: "～";
  }

  &::after {
    content: "～";
  }
`;
