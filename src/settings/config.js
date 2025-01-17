require("dotenv").config();

module.exports = {
  // ⬇⬇⬇ BOT DETAILS
  token: process.env.TOKEN || "MTIyMDA0MzAyNDU1NDUyNDY5Mg.GhOhCg.NPDPQYmF9XCAAfd_KuQPOzkrIipZaFMO-eaRvU", // <==== PASTE YOU TOKEN
  prefix: process.env.PREFIX || ",", // <==== SET YOU PRERIX BOT [ OWNER COMMANDS ]
  color: process.env.EMBED_COLOR || "#2f3136", // <==== YOU EMBEDED HEX COLOR
  owner: process.env.OWNER_ID || "1173547185758015498", // <==== BOTS OWNER ID
  guildLogs: process.env.GUILD_LOGS || "1219657567060496394", // <==== YOUR SERVER JOIN LEFT LOGS CHANNEL ID
  leaveTimeout: process.env.LEAVE_TIMEOUT || "20000", // <==== SET LEAVE TIMEOUT WHEN BOT WAS ALONE || 1000 = 1sec
  disableYouTube: parseBoolean(process.env.DISABLE_YOUTUBE || "false"), // <==== SET "TRUE OR FALSE" | ENABLE/DISABLE YOUTUBE FEATURES. DISABLING THIS WILL MAKE "AUTOPLAY" COMMANDS USELESS!!!

  // ⬇⬇⬇ PORU DETAILS
  playSource: process.env.PLAY_SOURCE || "ytsearch", // <==== SET YOUR PLAY SOURCE || "ytsearch","ytmsearch","scsearch"
  poruOptions: {
    defaultPlatform: process.env.DEFAULT_SOURCE || "ytsearch", // <==== SET DEFAULT SOURCE || "ytsearch","ytmsearch","scsearch"
    clientID: process.env.SPOTIFY_ID || "e6f84fbec2b44a77bf35a20c5ffa54b8", // <==== SPOTIFY CLIENT ID
    clientSecret: process.env.SPOTIFY_SECRET || "498f461b962443cfaf9539c610e2ea81", // <==== SPOTIFY CLIENT SECRET
    reconnectTries: 5, // <==== TOTAL ATTEMPS TO TRY IF RECONNECT FAILED. YOU CAN CHANGE IT TO "Infinity" FOR UNLIMITED ATTEMPS.
    playlistLimit: 2, // <==== 1 = 100 TRACKS
    albumLimit: 2, // <==== 1 = 50 TRACKS
    artistLimit: 2, // <==== 1 = 50 TRACKS
    searchMarket: "us",
  },
  nodes: [
    {
      name: process.env.NODE_NAME1 || "Node", // lavalink node name (anything you want)
      host: process.env.NODE_HOST1 || "lavalink.devamop.in", // <==== LAVALINK NAME HOST
      port: parseInt(process.env.NODE_PORT1 || "443"), // <==== LAVALINK PORT
      password: process.env.NODE_PASSWORD1 || "DevamOP", // <==== PASSWORD/AUTH
      secure: parseBoolean(process.env.NODE_SECURE1 || "true"), // <==== LAVALINK SECURE "true/false"
      regions: process.env.NODE_REGIONS1 || ["singapore"], // <==== AVAILABLE LAVALINK REGIONS [ "singapore","indonesian","japan"," ]
    }
  ],

  // ⬇⬇⬇ LINK BOTS DETAILS
  mongoUri: process.env.MONGO_URI || "mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority", // <==== YOUR MONGODB LINK
  supportUrl: process.env.SUPPORT_URL || "https://discord.gg/animeverse", // <==== YOUR SUPPORT SERVER LINK
  voteUrl: process.env.VOTE_URL || "https://top.gg/bot/vote", // <==== YOUR VOTE UR
  inviteUrl: process.env.INVITE_URL || "https://discord.com/api/oauth2/authorize?client_id=&permissions=8&scope=bot%20applications.commands", // <==== YOUR BOT INVITE LINK
  imageUrl: process.env.IMAGE_URL || "https://media.discordapp.net/attachments/1133797861495152680/1136322705126342736/Picsart_23-08-02_22-40-12-957.png", // <==== YOUR IMAGE LINK 
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
