import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import App from "./components/app";
import store, { history } from "./stores";
import { ActionCableProvider } from "react-actioncable-provider";
import Defender from "./helpers/defender";
import registerServiceWorker from "./registerServiceWorker";
import "antd/dist/antd.css";

const actionCableUrl = "ws://localhost:3000/cable";
const token = "?token=" + Defender.token();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <ActionCableProvider url={actionCableUrl + token}>
          <App />
        </ActionCableProvider>
      </React.Fragment>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("home")
);
registerServiceWorker();
