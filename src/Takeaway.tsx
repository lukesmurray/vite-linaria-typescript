import tw, { styled } from "twin.macro";

export const Takeaway = styled.div<{ failure?: boolean }>`
  ${tw`border-l-4 border-green-400 py-2 px-2`}
`;
