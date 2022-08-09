import { cx } from "@linaria/core";
import React from "react";
import ReactDOM from "react-dom/client";
import tw, { css, styled } from "twin.macro";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Takeaway } from "./Takeaway";

function LinariaCssClassName() {
  return (
    <h2
      className={css`
        /* text-2xl */
        font-size: 1.5rem;
        line-height: 2rem;
        /* bg-blue-200 */
        background-color: rgb(191 219 254);
        /* text-purple-800 */
        color: rgb(107 33 168);
      `}
    >
      Twin css import with vanilla css {"(css={css`...`})"}
    </h2>
  );
}

const LinariaStylesAsAStyledTag = styled.h2`
  /* text-2xl */
  font-size: 1.5rem;
  line-height: 2rem;
  /* bg-blue-200 */
  background-color: rgb(191 219 254);
  /* text-purple-800 */
  color: rgb(107 33 168);
`;

const stylesObject = {
  /* text-2xl */
  fontSize: "1.5rem",
  lineHeight: "2rem",
  /* bg-blue-200 */
  backgroundColor: "rgb(191 219 254)",
  /* text-purple-800 */
  color: "rgb(107 33 168)",
};
const LinariaObjectInterpolationInStyled = styled.h2`
  ${stylesObject}
`;

function LinearObjectInterpolationInCssClassName() {
  return (
    <h2
      className={css`
        ${stylesObject}
      `}
    >
      Twin css import with vanilla css passed as an object{" "}
      {"(className={css`${stylesObject}`})"}
    </h2>
  );
}

function TwinTwProp() {
  return (
    <h2 tw="text-2xl bg-blue-200 text-purple-800">
      Twin tw prop {'(tw="...")'}
    </h2>
  );
}

function TwinCssPropWithoutArray() {
  return (
    <h2 css={tw`text-2xl bg-blue-200 text-purple-800`}>
      Twin css prop without array {"(css={tw`...`})"}
    </h2>
  );
}

function TwinCssPropWithArray() {
  return (
    <h2 css={[tw`text-2xl bg-blue-200 text-purple-800`]}>
      Twin css prop with array {"(css={[tw`...`]})"}
    </h2>
  );
}

const TwinTwImport = tw.h2`text-2xl bg-blue-200 text-purple-800`;

const BaseH2 = styled.h2``;
const TwinClonedComponent = tw(BaseH2)`text-2xl bg-blue-200 text-purple-800`;

function LinariaCssClassNamePropStyles({ hasBorder }: { hasBorder: boolean }) {
  return (
    <h2
      className={cx(
        css`
          /* text-2xl */
          font-size: 1.5rem;
          line-height: 2rem;
          /* bg-blue-200 */
          background-color: rgb(191 219 254);
          /* text-purple-800 */
          color: rgb(107 33 168);
        `,
        hasBorder &&
          css`
            /* border-2 */
            border-width: 2px;
            /* border-purple-800 */
            border-color: rgb(107 33 168);
          `
      )}
    >
      Twin css import with vanilla css and prop based styling{" "}
      {"(className={cx(css`...`, hasBorder && css`...`)})"}
    </h2>
  );
}

const LinariaStylesAsAStyledTagPropStyles = styled.h2<{ hasBorder: boolean }>`
  /* text-2xl */
  font-size: 1.5rem;
  line-height: 2rem;
  /* bg-blue-200 */
  background-color: rgb(191 219 254);
  /* text-purple-800 */
  color: rgb(107 33 168);

  /* border-2 */
  border-width: ${({ hasBorder }) => (hasBorder ? "2px" : "0px")};
  /* border-purple-800 */
  border-color: ${({ hasBorder }) =>
    hasBorder ? "rgb(107 33 168)" : "transparent"};
`;

function LinariaCssClassNameTw() {
  return (
    <h2
      className={css`
        ${tw`text-2xl bg-blue-200 text-purple-800`}
      `}
    >
      Twin css import with tw interpolation {"(className={css`${tw`...`}`})"}
    </h2>
  );
}

const LinariaStylesAsAStyledTagTw = styled.h2`
  ${tw`text-2xl bg-blue-200 text-purple-800`}
`;

function LinariaCssClassNamePropStylesTw({
  hasBorder,
}: {
  hasBorder: boolean;
}) {
  return (
    <h2
      className={cx(
        css`
          ${tw`text-2xl bg-blue-200 text-purple-800`}
        `,
        hasBorder &&
          css`
            ${tw`border-2 border-purple-800`}
          `
      )}
    >
      Twin css import with tw interpolation and prop based styling{" "}
      {"(className={cx(css`${tw`...`}`, hasBorder && css`${tw`...`}`)})"}
    </h2>
  );
}

function LinariaCssProp({ hasBorder }: { hasBorder: boolean }) {
  return (
    <h2
      css={[
        css`
          ${tw`text-2xl bg-blue-200 text-purple-800`}
        `,
        hasBorder &&
          css`
            ${tw`border-2 border-purple-800`}
          `,
      ]}
    >
      Conditional css prop {"(css={[css`...`, hasBorder && css`...`]})"}
    </h2>
  );
}

function App() {
  return (
    <div
      className={css`
        ${tw`flex flex-col gap-4 max-w-screen-md mx-auto p-2`}
      `}
    >
      <Takeaway>
        Each of the following H2s should look identical if twin and linaria are
        working as expected. Takeaways have a green border on the left. All
        styled objects look like a blue and purple header.
      </Takeaway>

      <Takeaway>
        Global styles work but linaria's typescript types complain. In this
        example we use tw to set the background color to red and apply the base
        styles.
      </Takeaway>
      <GlobalStyles />

      <Takeaway>Twin css import works with vanilla css.</Takeaway>
      <LinariaCssClassName />

      <Takeaway>Twin styled import works with vanilla css.</Takeaway>
      <LinariaStylesAsAStyledTag>
        Twin styled import with vanilla css {"(styled.h2`...`)"}
      </LinariaStylesAsAStyledTag>

      <Takeaway>
        Twin styled import works with object interpolation for vanilla css.
      </Takeaway>
      <LinariaObjectInterpolationInStyled>
        Twin styled import with vanilla css passed as an object{" "}
        {"(styled.h2`${stylesObject}`)"}
      </LinariaObjectInterpolationInStyled>

      <Takeaway>
        Twin css import works with object interpolation for vanilla css.
      </Takeaway>
      <LinearObjectInterpolationInCssClassName />

      <Takeaway>
        Twin css import works with vanilla css and prop based styling.
        <p>
          Note: For this example we use cx to conditionally apply border styling
          based on the passed in props. You cannot access component props from
          inside the css import because css imports are compiled away and have
          no knowledge of the component props.
        </p>
      </Takeaway>
      <LinariaCssClassNamePropStyles hasBorder={true} />

      <Takeaway>
        Twin styled import works with vanilla css and prop based styling.
        <p>
          Note: For this example we use a function to set the border-color and
          border-width values based on the prop. Unlike the css import, the
          styled import can access the component props. However the function can
          only return a string and cannot be used to conditionally add a css
          property and value based on the prop. It can only set the css value
          because the function is converted into a css variable.
        </p>
      </Takeaway>
      <LinariaStylesAsAStyledTagPropStyles hasBorder={true}>
        Twin styled import with vanilla css and prop based styling.{" "}
        {"(styled.h2`... border-color: ${({hasBorder}) => ...}`)"}
      </LinariaStylesAsAStyledTagPropStyles>

      <Takeaway>
        Passing a string to the tw prop doesn't work. No styles are applied.
      </Takeaway>
      <TwinTwProp />

      <Takeaway>
        Passing tw styles to the css prop doesn't work. No styles are applied
        with or without an array.
      </Takeaway>
      <TwinCssPropWithArray />
      <TwinCssPropWithoutArray />

      <Takeaway>
        Using tw to create a styled component doesn't work. No styles are
        applied.
      </Takeaway>
      <TwinTwImport>Twin tw import {"(tw.h2`...`)"}</TwinTwImport>

      <Takeaway>
        Using tw to clone and apply styles to a styled component doesn't work.
        No styles are applied.
      </Takeaway>
      <TwinClonedComponent>
        Twin cloned component {"(tw(BaseH2)`...`)"}
      </TwinClonedComponent>

      <Takeaway>
        Interpolating tw styles in the css prop and passing the result to the
        classname works.
      </Takeaway>
      <LinariaCssClassNameTw />

      <Takeaway>Interpolating tw styles in the style import works.</Takeaway>
      <LinariaStylesAsAStyledTagTw>
        Twin styled import with tw interpolation {"(styled.h2`${tw`...`}`)"}
      </LinariaStylesAsAStyledTagTw>

      <Takeaway>Interpolating tw styles using cx works.</Takeaway>
      <LinariaCssClassNamePropStylesTw hasBorder={true} />

      <Takeaway>
        Conditional arrays passed to the css prop doesn't work.
      </Takeaway>
      <LinariaCssProp hasBorder={true} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
