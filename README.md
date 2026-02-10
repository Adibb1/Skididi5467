## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org) (v14 or later)
* [Parse Server](https://firebase.google.com/docs/cli) (for production debugging)
* [Git](https://git-scm.com/) (for version control)
* [npm or yarn](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Installation
1. Clone the repository:

   ```bash
   git clone https://github.com/Adibb1/Skididi5467.git
   cd Skididi5467
   ```
2. Install dependencies:

   ```bash
   cd client
   npm install
   # or
   yarn install

   cd ../server
   npm install
   ```
3. Install MongoDB and add credentials to a .env file at the root of the client folder:

   ```bash
   PORT=1337
   DATABASE_URI=your-database-uri (example: mongodb://localhost:27017/gammac)
   NEXT_PUBLIC_PARSE_APP_ID=your-app-id
   NEXT_PUBLIC_PARSE_JS_KEY=your-js-key
   NEXT_PUBLIC_PARSE_MASTER_KEY=your-master-key
   NEXT_PUBLIC_PARSE_SERVER_URL=your-server-url (example: http://localhost:1337/parse)
   ```

### Running the App
Start the development client and server:
```bash
cd client
npm run dev
# or
yarn dev

cd ../server
nodemon index
```
