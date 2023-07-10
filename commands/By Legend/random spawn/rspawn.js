//mcount is a variable which means message count
module.exports = ({
  name: "$alwaysExecute",
  code: `
$channelSendMessage[$if[$channelExists[$getGuildVar[rchannel]]==true;$getGuildVar[rchannel];$channelID];A new quest is available!]

$setGuildVar[mcount;0;$guildID]
$onlyIf[$getGuildVar[mcount]>=$random[15;20];$setGuildVar[mcount;$sum[$getGuildVar[mcount];1];$guildID]`
});