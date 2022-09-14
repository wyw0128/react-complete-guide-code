// NOTE: index.js file is the first file to be executed

// NOTE: ReactDOM and React these two dependencies together form the React library which we're going to learn all about in this course. So whenever we import something from React or from ReactDOM it's basically both all about React and we're using React features.

import ReactDOM from "react-dom";

import "./index.css";

// NOTE: This App.js file, you just may omit and you should omit dot js as an extension in your imports here. If it's another file, like a CSS file, you have to add it. But if it's a third-party library, or one of your JS files, you emit the dot JS.

import App from "./App";

// NOTE: This looks like some kind of HTML code inside of a JavaScript file. And normally this also wouldn't work. Well again, here it does work, but only because this is transformed before it's delivered to the browser.

ReactDOM.render(<App />, document.getElementById("root"));
