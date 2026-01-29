import Parse from "parse/node";

Parse.initialize(process.env.APP_ID!, undefined, process.env.MASTER_KEY);
Parse.serverURL = "http://localhost:1337/parse";

export default Parse;

// Import the browser-specific build to avoid the UUID error
// import Parse from "parse";

// // Client-side initialization
// if (typeof window !== "undefined") {
//   // Client-side initialization
//   Parse.initialize(
//     process.env.NEXT_PUBLIC_PARSE_APP_ID!,
//     process.env.NEXT_PUBLIC_PARSE_MASTER_KEY!
//   );
//   Parse.serverURL = "http://localhost:1337/parse";
// } else {
//   // Server-side initialization (Node.js)
//   const ParseNode = require("parse/node");
//   Parse.initialize(
//     process.env.NEXT_PUBLIC_PARSE_APP_ID!,
//     process.env.NEXT_PUBLIC_PARSE_MASTER_KEY!
//   );
//   Parse.serverURL = "http://localhost:1337/parse";
// }

// export default Parse;
