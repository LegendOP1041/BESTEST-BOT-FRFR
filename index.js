/*DON'T TOUCH IT
Below code is used to keep the repl alive, don't touch it neither keep_alive.js*/
const keep_alive = require('./keep_alive.js')
const BOT_TOKEN = process.env['BOT_TOKEN'];
const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: BOT_TOKEN,
    prefix: ";",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
//DON'T TOUCH THE ABOVE CODE!!!
/*
Below code is used to have a separate place to add variables, go to /handler/variables.js
*/
require('./handler/variables.js')(bot);
/*
Below code is used to load commands
*/
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/");