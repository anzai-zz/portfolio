import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const item = css`
`;

export const link = css`
  text-decoration: none;
  color: inherit;
  padding: 15px 0;
  display: flex;
  align-items: center;
  gap: 20px;

  &::before {
    content: "";
    aspect-ratio: 1 / 1;
    width: 50px;
    background-color: var(--color);
    border-radius: 5px;

    ${pc} {
      width: 70px;
    }
  }
`;

export const info = css`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const time = css`
  font-size: 1.4rem;
  display: block;
`;

export const tag = css`
  display: flex;
  gap: 10px;
`;

export const tagItem = css`
  display: block;
  background-color: #f5f5f5;
  font-size: 1.4rem;
  line-height: 1.1;
  padding: 2px 10px;
  border-radius: 3px;
`;

export const title = css`
  font-size: inherit;
  margin: 10px 0 0;
`;
