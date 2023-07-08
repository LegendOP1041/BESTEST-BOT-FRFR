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

require('./handler/variables.js')(bot);

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/");