import React from "react";
import ReactDOM from "react-dom";

import { styled } from "@linaria/react";

const Container = styled.div`
  font-size: 24px;
`;

function App() {
  return <Container>This is my app</Container>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
