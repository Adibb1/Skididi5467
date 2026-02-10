'use client'

import Parse from "parse";

if (!Parse.applicationId) {
  Parse.initialize(
    process.env.NEXT_PUBLIC_PARSE_APP_ID!,
    process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY!,
    // process.env.NEXT_PUBLIC_PARSE_MASTER_KEY!
  );

  Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL!;
}

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
