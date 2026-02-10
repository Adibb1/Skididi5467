const Parse = require("parse/node");

function initializeParse() {
  Parse.initialize(
    process.env.NEXT_PUBLIC_PARSE_APP_ID,
    undefined,
    process.env.NEXT_PUBLIC_PARSE_MASTER_KEY
  );
  Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL;
  console.log("initialized Parse");
}

const initializeClasses = async () => {
  initializeParse();
  const allSchemas1 = await Parse.Schema.all();
  const allSchemas2 = allSchemas1.map((schema) => schema.className);
  console.log(allSchemas2)
  if (!allSchemas2.includes("GameAccount")) {
    Parse.Cloud.define("initGameAccountSchema", async () => {
      const schema = new Parse.Schema("GameAccount");

      schema.addPointer("user", "_User");
      schema.addString("game");
      schema.addString("title");
      schema.addString("description");
      schema.addString("price");
      schema.addString("level");
      schema.addString("rank");

      await schema.save({ useMasterKey: true });
    });
    await Parse.Cloud.run("initGameAccountSchema");
    console.log("created GameAccount class");
  }
  console.log("done initializing classes")
};

module.exports = { initializeClasses };
