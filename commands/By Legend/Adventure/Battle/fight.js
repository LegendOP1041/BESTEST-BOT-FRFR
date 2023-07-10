module.exports = ({
  name: "fight",
  code: `$channelSendMessage[$if[$channelExists[$getGuildVar[rchannel]]==true;$getGuildVar[rchannel];$channelID];
  $if[$getGuildVar[fight;1];$description[you re fighting xyz];$description[there is no monster]]`
})