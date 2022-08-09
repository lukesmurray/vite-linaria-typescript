import { css, globalStyles } from "twin.macro";

/** Render this to apply global styles */
export const GlobalStyles = () => {
  css`
    :global() {
      /* cast to any cause linaria css interpolation doesn't like Record<string, unknown> */
      ${globalStyles as any}
    }
  `;
  return <></>;
};
