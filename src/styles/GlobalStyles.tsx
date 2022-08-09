import tw, { css, globalStyles } from "twin.macro";

/** Render this to apply global styles */
export const GlobalStyles = () => {
  // you can use
  const customStyles = [tw`bg-red-50`, tw`bg-gray-100`];
  css`
    :global() {
      /* cast to any cause linaria css interpolation doesn't like Record<string, unknown> */
      ${globalStyles as any}

      body {
        /* linaria typescript types reject arrays but they work */
        ${customStyles as any}
      }
    }
  `;
  return <></>;
};
