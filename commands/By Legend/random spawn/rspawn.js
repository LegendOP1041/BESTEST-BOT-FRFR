//mcount is a variable which means message count
module.exports = ({
  name: "$alwaysExecute",
  code: `
$channelSendMessage[$if[$channelExists[$getGuildVar[rchannel]]==true;$getGuildVar[rchannel];$channelID];$title[A Monster has Appeared]
$description[$get[picture]]
$let[picture;$randomText[It's a Goblin $thumbnail[https://cdn.discordapp.com/attachments/784826717562208285/1127912675331018802/8-ePxbdEojXF8ctfv.png]; It's an Orc $thumbnail[https://cdn.discordapp.com/attachments/784826717562208285/1127910189337686046/Hotpot.png]]]]
$setGuildVar[fight;1;$guildID]
$setGuildVar[mcount;0;$guildID]
$onlyIf[$getGuildVar[mcount]>=$random[15;20];$setGuildVar[mcount;$sum[$getGuildVar[mcount];1];$guildID]`
});