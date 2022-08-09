import { cx } from "@linaria/core";
import React from "react";
import ReactDOM from "react-dom/client";
import tw, { css, styled } from "twin.macro";
import { GlobalStyles } from "./styles/GlobalStyles";

const Container = styled.div`
  ${tw`flex flex-col gap-4 max-w-screen-md mx-auto p-2`}
`;

const Takeaway = styled.div`
  ${tw`text-lg border-t-4 border-black`}
`;

const Example = styled.div`
  ${tw`bg-white shadow-inner rounded p-4`}
`;

const Note = styled.div`
  ${tw`text-base px-4 text-gray-700`}
`;

function TwinCssImportVanilla() {
  return (
    <h2
      className={css`
        /* text-sm */
        font-size: 0.875rem;
        line-height: 1.25rem;
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

const TwinStyledImportVanilla = styled.h2`
  /* text-sm */
  font-size: 0.875rem;
  line-height: 1.25rem;
  /* bg-blue-200 */
  background-color: rgb(191 219 254);
  /* text-purple-800 */
  color: rgb(107 33 168);
`;

const stylesObject = {
  /* text-sm */
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  /* bg-blue-200 */
  backgroundColor: "rgb(191 219 254)",
  /* text-purple-800 */
  color: "rgb(107 33 168)",
};
const TwinStyledImportVanillaObjectInterpolation = styled.h2`
  ${stylesObject}
`;

function TwinCssImportObjectInterpolation() {
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
    <h2 tw="text-sm bg-blue-200 text-purple-800">
      Twin tw prop {'(tw="...")'}
    </h2>
  );
}

function TwinCssPropWithoutArray() {
  return (
    <h2 css={tw`text-sm bg-blue-200 text-purple-800`}>
      Twin css prop without array {"(css={tw`...`})"}
    </h2>
  );
}

function TwinCssPropWithArray() {
  return (
    <h2 css={[tw`text-sm bg-blue-200 text-purple-800`]}>
      Twin css prop with array {"(css={[tw`...`]})"}
    </h2>
  );
}

const TwinTwImport = tw.h2`text-sm bg-blue-200 text-purple-800`;

const BaseH2 = styled.h2``;
const TwinClonedComponent = tw(BaseH2)`text-sm bg-blue-200 text-purple-800`;

function TwinCssImportPropStylesVanilla({ hasBorder }: { hasBorder: boolean }) {
  return (
    <h2
      className={cx(
        css`
          /* text-sm */
          font-size: 0.875rem;
          line-height: 1.25rem;
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

const TwinStyledImportPropStylesVanilla = styled.h2<{ hasBorder: boolean }>`
  /* text-sm */
  font-size: 0.875rem;
  line-height: 1.25rem;
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

function TwinCssImportTwCss() {
  return (
    <h2
      className={css`
        ${tw`text-sm bg-blue-200 text-purple-800`}
      `}
    >
      Twin css import with tw interpolation {"(className={css`${tw`...`}`})"}
    </h2>
  );
}

function TwinCssImportTwCssArray() {
  return (
    <h2
      className={css`
        ${[tw`text-sm`, tw`bg-blue-200`, tw`text-purple-800`]}
      `}
    >
      Twin css import with tw interpolation array{" "}
      {"(className={css`${[tw`...`, tw`...`]}`})"}
    </h2>
  );
}

const TwinStyledImportTwCss = styled.h2`
  ${tw`text-sm bg-blue-200 text-purple-800`}
`;

const TwinStyledImportTwCssArray = styled.h2`
  ${[tw`text-sm`, tw`bg-blue-200`, tw`text-purple-800`]}
`;

function TwinCssImportPropStylesTwCss({ hasBorder }: { hasBorder: boolean }) {
  return (
    <h2
      className={cx(
        css`
          ${tw`text-sm bg-blue-200 text-purple-800`}
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

const TwinStyledImportPropStylesTwCss = styled.h2<{ hasBorder: boolean }>`
  ${tw`text-sm bg-blue-200 text-purple-800`}
  ${({ hasBorder }) => (hasBorder ? tw`border-2 border-purple-800` : tw``)}
`;

function TwinCssImportPropStylesCssProp({ hasBorder }: { hasBorder: boolean }) {
  return (
    <h2
      css={[
        css`
          ${tw`text-sm bg-blue-200 text-purple-800`}
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
    <Container>
      <Takeaway>
        <h2
          className={css`
            ${tw`text-4xl`}
          `}
        >
          Overview
        </h2>
        Each example applies styling to an h2 using different methods. If it
        looks like no styling was applied the method didn't work.
      </Takeaway>

      <Takeaway>
        Global styles if the background color of this page is gray.
      </Takeaway>
      <GlobalStyles />

      <Takeaway>Twin css import vanilla css.</Takeaway>
      <Example>
        <TwinCssImportVanilla />
      </Example>

      <Takeaway>Twin styled import vanilla css.</Takeaway>
      <Example>
        <TwinStyledImportVanilla>
          Twin styled import with vanilla css {"(styled.h2`...`)"}
        </TwinStyledImportVanilla>
      </Example>

      <Takeaway>Twin styled import with vanilla css object.</Takeaway>
      <Example>
        <TwinStyledImportVanillaObjectInterpolation>
          Twin styled import with vanilla css passed as an object{" "}
          {"(styled.h2`${stylesObject}`)"}
        </TwinStyledImportVanillaObjectInterpolation>
      </Example>

      <Takeaway>Twin css import with vanilla css object.</Takeaway>
      <Example>
        <TwinCssImportObjectInterpolation />
      </Example>

      <Takeaway>
        Twin css import with vanilla css and prop based styling.
        <Note>
          This example uses cx to conditionally apply border styling because
          component props cannot be accessed from inside the css interpolation.
        </Note>
      </Takeaway>
      <Example>
        <TwinCssImportPropStylesVanilla hasBorder={true} />
      </Example>

      <Takeaway>
        Twin styled import with vanilla css and prop based styling.
        <Note>
          This example uses prop functions to set the border-color and
          border-width. Prop functions can only set css property values, not css
          property names, since prop functions are compiled into css variables.
        </Note>
      </Takeaway>
      <Example>
        <TwinStyledImportPropStylesVanilla hasBorder={true}>
          Twin styled import with vanilla css and prop based styling.{" "}
          {"(styled.h2`... border-color: ${({hasBorder}) => ...}`)"}
        </TwinStyledImportPropStylesVanilla>
      </Example>

      <Takeaway>Twin tw prop.</Takeaway>
      <Example>
        <TwinTwProp />
      </Example>

      <Takeaway>Twin css prop with an array and without an array.</Takeaway>
      <Example>
        <TwinCssPropWithArray />
        <TwinCssPropWithoutArray />
      </Example>

      <Takeaway>Twin tw import to create a styled component.</Takeaway>
      <Example>
        <TwinTwImport>Twin tw import {"(tw.h2`...`)"}</TwinTwImport>
      </Example>

      <Takeaway>Twin tw import to clone a styled component.</Takeaway>
      <Example>
        <TwinClonedComponent>
          Twin cloned component {"(tw(BaseH2)`...`)"}
        </TwinClonedComponent>
      </Example>

      <Takeaway>Twin css import with tailwind css.</Takeaway>
      <Example>
        <TwinCssImportTwCss />
        <TwinCssImportTwCssArray />
      </Example>

      <Takeaway>Twin styled import with tailwind css.</Takeaway>
      <Example>
        <TwinStyledImportTwCss>
          Twin styled import with tw interpolation {"(styled.h2`${tw`...`}`)"}
        </TwinStyledImportTwCss>
        <TwinStyledImportTwCssArray>
          Twin styled import with tw interpolation array{" "}
          {"(styled.h2`${[tw`...`, tw`...`]}`)"}
        </TwinStyledImportTwCssArray>
      </Example>

      <Takeaway>
        Twin css import with tailwind css and prop based styling.
      </Takeaway>
      <Example>
        <TwinCssImportPropStylesTwCss hasBorder={true} />
      </Example>

      <Takeaway>
        Twin styled import with tailwind css and prop based styling. (Doesn't
        work. Missing a border. Only base styles applied.)
        <Note>
          This doesn't work because we cannot return a tw interpolation from a
          prop function. Tailwind makes it easy to set Properties and Values
          simultaneously but linaria expected just the property value.
        </Note>
      </Takeaway>
      <Example>
        <TwinStyledImportPropStylesTwCss hasBorder={true}>
          Twin styled import with tw interpolation and prop based styling.{" "}
          {"(styled.h2`${tw`...`} ${({hasBorder}) => ${tw`...`}`)"}
        </TwinStyledImportPropStylesTwCss>
      </Example>

      <Takeaway>
        Conditional arrays passed to the css prop doesn't work.
      </Takeaway>
      <Example>
        <TwinCssImportPropStylesCssProp hasBorder={true} />
      </Example>
    </Container>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
