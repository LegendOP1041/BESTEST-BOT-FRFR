module.exports = ({
  name:'profile',
  code: `$description [ **PROFILE** 
  
  $thumbnail[$userAvatar]
  **NAME** :- $username

  **CREDITS**: $getGlobalUserVar[credits]
  
  **HP**: $getGlobalUserVar[hp]
  
  **ATK**: $getGlobalUserVar[atk]
  
  **DEF**: $getGlobalUserVar[def]
  
  **STAMINA**: $getGlobalUserVar[stamina]
  
  **SPD**: $getGlobalUserVar[spd]
  
  **INT**: $getGlobalUserVar[int]
  
  UNSPENT POINTS
  
  
  
  LIFES REMAINING]
    $color[#2aff00]
    `
})