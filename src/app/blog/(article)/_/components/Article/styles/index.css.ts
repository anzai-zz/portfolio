import { css } from "@linaria/core";

const styles = {};

export default styles;

export const title = css`
font-size: 2rem;
border-bottom: 2px solid #000;
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
background-color: #000;
color: #fff;
text-decoration: none;
font-size: 1.4rem;
line-height: 1.1;
padding: 2px 10px;
border-radius: 3px;
`;

export const body = css`
p {
  margin: 0 0 15px;
}
`;
