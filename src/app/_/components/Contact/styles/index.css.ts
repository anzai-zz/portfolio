import { css } from "@linaria/core";

export const list = css`
  width: 100%;
`;

export const item = css`
  &:not(:last-of-type) {
    margin: 0 0 20px;
  }
`;

export const label = css`
  display: block;
`;

export const head = css`
  display: block;
  font-weight: bold;
  margin: 0 0 10px;
`;

export const input = css`
  height: 50px;
  padding: 10px 15px;
  background-color: #f5f5f5;
  display: block;
  border: 0;
  width: 100%;
  border-radius: 5px;
`;

export const textarea = css`
  min-height: 100px;
  padding: 15px;
  background-color: #f5f5f5;
  display: block;
  border: 0;
  width: 100%;
  border-radius: 5px;
`;

export const error = css`
  margin: 40px 0 0;
  text-align: center;
  font-weight: bold;
  color: #ff1313;
`;

export const success = css`
  margin: 40px 0 0;
  text-align: center;
  font-weight: bold;
`;

// export const submit = css`
//   background-color: #cc3b3b;
//   color: #fff;
//   display: block;
//   text-align: center;
//   margin: 40px auto 0;
//   min-width: min(300px, 100%);
//   width: fit-content;
//   text-decoration: none;
//   padding: 15px;
//   border-radius: 5px;
//   font-size: 1.4rem;
//   cursor: pointer;
// `;
