---
title: Template - PC
tags:
type: pc
linter-yaml-title-alias: "**`=this.file.name`**"
art: ""

player:
name: 
aliases: ["**`=this.file.name`**"]
class:
subclass:
level:
background:
alignment: 

strength:
dexterity:
constitution:
intelligence:
wisdom:
charisma:
perception:
stealth:

hd: 
hp:
ac: 
pb: 
speed:
condition: 

action: 
skill-proficiencies: 
save-proficiencies: 
languages: 

overview:
traits: 
ideals: 
bonds: 
flaws: 

pronouns: 
pronounced: 
ancestry: 
gender:
age: 
sexuality:
height:
weight:

location: 
occupation: 
friends-family:
rivals: 
faction: 
religion: 
biography:
---

>[!infobox|left]  
>![[CG3.png]]
>###### Stats
>> -  :fas_dice_d20: \+`$= Math.floor((dv.current().dexterity -10) / 2)` ⋅ :fas_running: `=this.speed`ft
>> - :rif_shield_star: `=this.ac` ⋅ :fas_heart: `=this.hp`
>> - :fas_eye: `=this.perception` ⋅ :rif_spy: `=this.stealth`
>>
>> | Ability      | Score                | Mod                                        |
>> |--------------|----------------------|--------------------------------------------|
>> | Strength     | `=this.strength`     | `$= Math.floor((dv.current().strength -10) / 2)`     |
>> | Dexterity    | `=this.dexterity`    | `$= Math.floor((dv.current().dexterity -10) / 2)`    |
>> | Constitution | `=this.constitution` | `$= Math.floor((dv.current().constitution -10) / 2)` |
>> | Intelligence | `=this.intelligence` | `$= Math.floor((dv.current().intelligence -10) / 2)` |
>> | Wisdom       | `=this.wisdom`       | `$= Math.floor((dv.current().wisdom -10) / 2)`       |
>> | Charisma     | `=this.charisma`     | `$= Math.floor((dv.current().charisma -10) / 2)`     |
>> ||||
>>  - **Skill Proficiencies:** `=this.skill-proficiencies`
>>  - **Save Proficiencies:** `=this.save-proficiencies`
>>  - **Default Action:** `=this.action`
>>  -  **Condition:** `=this.condition`

# **`VIEW[{title}]`**
>[!info|bg-c-purple ttl-c nbrd]+ Overview
> `VIEW[{overview}][text(renderMarkdown)]`


>[!column|no-title] Traits
>> [!metadata|bg-c-blue]+ Traits
>> - `=this.traits`
>
>> [!metadata|bg-c-blue]+ Ideals, Bonds, & Flaws
>> -  `=this.ideals`
>> -  `=this.bonds`
>> -  `=this.flaws`
 
>[!column|no-title]
>> [!info|bg-c-gray ttl-c]+ Bio
>> - **Alias(es):** `=this.aliases` 
>> - **Age:**  `=this.age` 
>> - **Sex:**  `=this.gender` 
>> - **Sexuality:**  `=this.sexuality` 
>> - **Height:**  `=this.height` 
>> - **Weight:**  `=this.weight` 
>> - **Occupation(s):**  `=this.occupation` 
>> - **Group(s):**  `=link(this.associatedGroup)` 
>> - **Religion(s):**  `=link(this.associatedReligion)` 
>
>> [!info|bg-c-gray ttl-c]+ Other Info 
>> - **Ancestry:**  `=this.ancestry`
>> - **Background:** `=this.background`
>> - **Class:** `=this.class`
>> - **Level:** `=this.level`
>> - **Alignment:** `=this.alignment`
>> - **Current Location:**  `=link(this.location)` 

## Relationships
>[!column|dataview|clean no-title] Relationships
>> [!metadata|bg-c-green]- Friends & Family
>> - `=this.friends-family`
>
>> [!metadata|bg-c-orange]- Rivals
>> - `=this.rivals`


## Biographical Details

`=this.biography`