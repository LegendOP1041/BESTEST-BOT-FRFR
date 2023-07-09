
module.exports = [{
    name: "hm",
    type: "interaction",
    prototype: "slash",
    code: `$interactionReply[;{newEmbed:{title:Покупка $username[$slashOption[пользователь]] <#COLON#sell#COLON#1126059624169213962>}{field:> **Должность** #COLON#:\`\`\`$getUserVar[rabota;$slashOption[пользователь]]\`\`\`:yes}{field: > **Зарплата** #COLON#:\`\`\`$getUserVar[zarplata;$slashOption[пользователь]] в час\`\`\`:yes}{color:#303136}{thumbnail:$userAvatar[$slashOption[пользователь]]}{footer: Цена $getUserVar[cen;$slashOption[пользователь]] <#COLON#coin#COLON#1126046095647187035>}};{actionRow:{button:Купить:success:buy_$authorID:no:<#COLON#coin#COLON#1126046095647187035>}};;all;false]
    $onlyIf[$getUserVar[register;$slashOption[пользователь]]==yes;{newEmbed:{title:Пользователь не зарегистрирован!}{description:Пользователь не зарегистрирован, напишите ему, чтоб использовал команду /register!}{color:#ff0000}{timestamp}}]`
}]