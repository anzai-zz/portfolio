import { css } from "@linaria/core";

export const profile = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
`;

export const photo = css`
  aspect-ratio: 1 / 1;

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
`;

export const table = css`
  width: 100%;
  align-self: flex-start;
`;

export const row = css``;

export const head = css`
  text-align: left;
  padding: 10px 20px 10px 0;
  vertical-align: top;
`;

export const detail = css`
  padding: 10px 0;
  vertical-align: top;
`;

export const skill = css``;

export const skillItem = css`
  display: flex;
  align-items: center;

  &::before {
    content: "";
    width: 5px;
    aspect-ratio: 1 / 1;
    background-color: #cc3b3b;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 0 5px 0 0;
  }
`;

export const history = css`
  width: 100%;
`;

export const historyRow = css``;

export const historyHead = css`
  text-align: left;
  vertical-align: top;
`;

export const historyDetail = css`
  vertical-align: top;
`;

export const sns = css`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const snsIcon = css`
  display: block;
  width: 40px;
  background-color: #000;
  padding: 8px;
  border-radius: 5px;
`;
