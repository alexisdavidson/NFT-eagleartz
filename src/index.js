import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import App from './frontend/components/App';
import * as serviceWorker from './serviceWorker';

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Poppins", "Montserrat:500,700,400", "Days One:400"],
  },
});

const rootElement = document.getElementById("root");
render( <App />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
