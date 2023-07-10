module.exports = ({
  name: "redirect",
  code: `
$description[Set the Redirect channel to <#$mentionedChannels[1]>]
$setGuildVar[rchannel;$mentionedChannels[1]]
$onlyIf[$channelExists[$findChannel[$message[1];false]]==true; **$username** mention a vaild channel]
$onlyIf[$hasPerms[$guildid;$authorid;managechannels]==true; **You are missing the \`managechannels\` permission**]
$onlyIf[$hasPerms[$guildId;$clientID;managechannels]==true; **I am missing the \`managechannels\` permission**]`
});