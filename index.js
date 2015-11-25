var ColorCodes = {
    "&0": "black",
    "&1": "dark_blue",
    "&2": "dark_green",
    "&3": "dark_aqua",
    "&4": "dark_red",
    "&5": "dark_purple",
    "&6": "gold",
    "&7": "grey",
    "&8": "dark_grey",
    "&9": "green",
    "&a": "aqua",
    "&b": "red",
    "&c": "red",
    "&d": "light_purple",
    "&e": "yellow",
    "&f": "white"
}

var SecondaryCodes = {
    "&k": "obfuscated",
    "&l": "bold",
    "&m": "strike",
    "&n": "underline",
    "&o": "italic"
}
var ResetCodes = {
    "&r" : true
}

module.exports = ParseChat

function ParseChat(Text){
    var Place = 0
    var Output = {text: "", color: "white"}
    var LastNode = Output
    
    var SkipOne = false
    
    for(CharKey in Text){
        if(SkipOne == true){
            SkipOne = false
            continue
        }
        var Char = Text[CharKey]
        var CharAndNext = Text[CharKey] + Text[Number(CharKey) + 1]
        
        if(ColorCodes[CharAndNext] != undefined || ResetCodes[CharAndNext] != undefined){
            var NextNode = {text:""}
            NextNode.color = ColorCodes[CharAndNext] || white
            LastNode.extra = [NextNode]
            LastNode = NextNode
            SkipOne = true
        }else{
            if(SecondaryCodes[CharAndNext] != undefined){
                LastNode[SecondaryCodes[CharAndNext]] = true
                SkipOne = true
            }else{
                LastNode.text += Char
            }
        }
    }
    return Output   
}