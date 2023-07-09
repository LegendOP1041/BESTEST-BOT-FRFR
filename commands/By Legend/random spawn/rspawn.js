//mcount is a variable which means message count
module.exports = ({
  name: "$alwaysExecute",
  code: `A new quest is available!
$setGlobalUserVar[mcount;0;$authorID]
$onlyIf[$getGlobalUserVar[mcount]>=$random[15;20];$setGlobalUserVar[mcount;$sum[$getGlobalUserVar[mcount];1];$authorID]`
});