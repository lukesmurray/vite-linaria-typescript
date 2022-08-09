import React from "react";
import ReactDOM from "react-dom/client";
import { styled } from "@linaria/react";

const Container = styled.div`
  font-size: 24px;
`;

function App() {
  return <Container>This is my app</Container>;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
