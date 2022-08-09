import React from "react";
import ReactDOM from "react-dom/client";
import { css, styled } from "twin.macro";
import { GlobalStyles } from "./styles/GlobalStyles";

function LinariaCssClassName() {
  return (
    <h1
      className={css`
        font-size: 2rem;
        background: #73bfdd9d;
        color: #0519f6;
      `}
    >
      Linaria CSS Classname
    </h1>
  );
}

const LinariaStylesAsAStyledTag = styled.h1`
  font-size: 2rem;
  background: #73bfdd9d;
  color: #0519f6;
`;

const stylesObject = {
  fontSize: "2rem",
  background: "#73bfdd9d",
  color: "#0519f6",
};

const LinariaObjectInterpolationInStyled = styled.h1`
  ${stylesObject}
`;

function LinearObjectInterpolationInCssClassName() {
  return (
    <h1
      className={css`
        ${stylesObject}
      `}
    >
      Linaria Object Interpolation in CSS Classname
    </h1>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <LinariaCssClassName />
      <LinariaStylesAsAStyledTag>
        Linaria Styles As A Styled Tag
      </LinariaStylesAsAStyledTag>
      <LinariaObjectInterpolationInStyled>
        Linaria Object interpolation in Styled
      </LinariaObjectInterpolationInStyled>
      <LinearObjectInterpolationInCssClassName />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
