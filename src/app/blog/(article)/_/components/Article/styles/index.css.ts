import { css } from "@linaria/core";

export const title = css`
  font-size: 2rem;
  border-bottom: 2px solid var(--color);
  padding: 0 0 10px;
  margin: 0 0 10px;
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
