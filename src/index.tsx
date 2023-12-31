import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import client from "./apolloClient";
import { ApolloProvider } from "@apollo/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* ApolloProvider allows any of elements inside Application to access the client using useApolloClient Hook */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
