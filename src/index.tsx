/* Dependencies */
import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

/* App */
import { App } from "./App/App";
/* Service Worker */
import * as serviceWorker from "./serviceWorker";

/* Render */
ReactDOM.render(<App />, document.getElementById("root"));
/* Unregister Service Worker */
serviceWorker.unregister();
