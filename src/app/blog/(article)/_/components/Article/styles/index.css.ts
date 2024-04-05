import { css } from "@linaria/core";

import { pc } from "@_/styles/mediaquery";

export const title = css`
  font-size: 1.6rem;
  border-bottom: 2px solid var(--color);
  padding: 0 0 10px;
  margin: 0 0 10px;

  ${pc} {
    font-size: 2rem;
  }
`;

export const info = css`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 0 0 40px;
`;

export const time = css`
  font-size: 1.4rem;
  display: block;
`;

export const tag = css`
  display: flex;
  gap: 10px;
`;

export const tagLink = css`
  display: block;
  background-color: #f5f5f5;
  text-decoration: none;
  font-size: 1.4rem;
  line-height: 1.1;
  padding: 2px 10px;
  border-radius: 3px;
`;

export const share = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin: 60px 0 0;

  ${pc} {
    margin: 100px 0 0;
  }
`;

export const shareTitle = css`
  font-weight: bold;
  text-transform: capitalize;
`;

export const shareList = css`
  display: flex;
  gap: 20px;
`;

export const shareX = css`
  background-color: #000;
  display: block;
  width: 40px;
  padding: 10px;
  border-radius: 5px;
`;

export const shareFacebook = css`
  background-color: #0866ff;
  display: block;
  width: 40px;
  padding: 6px;
  border-radius: 5px;
`;
