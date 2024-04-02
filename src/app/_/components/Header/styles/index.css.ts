import { css } from "@linaria/core";

export const header = css`
  background-color: #000;
  padding: 15px;
  margin: 0 0 100px;
`;

export const link = css`
  color: #fff;
  text-decoration: none;
`;

export const title = css`
  font-size: 2.5rem;
  display: block;
  text-align: center;
`;

export const sub = css`
  display: flex;
  text-align: center;
  justify-content: center;
  margin: 10px 0 0;

  &::before {
    content: "～";
  }

  &::after {
    content: "～";
  }
`;
