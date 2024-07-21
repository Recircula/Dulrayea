---
tags:
  - "#SessionNote"
---
> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Aliases** | `INPUT[list:aliases]` |
>> **Which Party** | `INPUT[Null][suggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Session Date** | `INPUT[datePicker:sessiondate]`
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>
>> [!metadata|metadataoption]- Quick References
>> #### Quick References
>>  |
>> ---|---|
>> **Character** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):characters]` |
>> **Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates")):locations]` |
>> **Miscellaneous** | `INPUT[inlineListSuggester(optionQuery("" AND !"z_Templates")):misc]` |

#  `=link(this.whichparty)` `=this.file.name` "`=this.aliases`"
## Prep
### To-Do

> [!kirk|info] Prompt (Remove me)
Create a To-Do section to list and organize the tasks you need to complete for this session. Outline the key preparations, notes, or materials you need to have ready. This may include crafting specific encounters, detailing NPC interactions, preparing maps, or any other essential elements for a smooth and engaging session. Use this section as a checklist to ensure you're well-prepared and organized for the upcoming gaming session.

### Quick References

> [!kirk|info] Info (Remove me)
This is a list of links to various notes within your Vault. Use this to give yourself quick ways to find any relevant information you need on hand for your session.

> [!column|3 no-title]
>> [!metadata|characters] People
>> `VIEW[{characters}][link]`
>
>> [!metadata|location] Locations
>> `VIEW[{locations}][link]`
>
>> [!metadata|misc] Misc
>> `VIEW[{misc}][link]`

## During
### Events

> [!kirk|info] Prompt (Remove me)
Use this section to record significant events occurring during the session. Note down key moments, plot twists, player decisions, or any unexpected developments that unfold. Include details about NPC interactions, major discoveries, or impactful player choices. This section serves as a timeline of noteworthy occurrences, helping you track the progression of the story and ensuring that important events are documented for future reference.

### Travel & Rest

> [!kirk|info] Prompt (Remove me)
Use this area to track the party's travel and rest activities during the session. Note down the duration of their travels, including any notable encounters or events that occur during the journey. Additionally, record periods of rest, whether short breaks or longer rests, and indicate how time passes in-game. This section helps you maintain a coherent timeline, manage resources, and ensure a consistent flow of time within the session.

### Loot, Rewards & Purchases

> [!kirk|info] Prompt (Remove me)
Use this space to record all loot, rewards, and purchases obtained by the party during the session. Document any valuable items, treasures, or magical artifacts they acquire. Note down rewards for completing quests or overcoming challenges. Additionally, keep track of any purchases the party makes, detailing items, costs, and relevant information. This section serves as a consolidated record of the party's wealth and acquisitions, aiding in resource management and future gameplay decisions.

## Post
### New Creations

> [!kirk|info] Prompt (Remove me)
Use this section to consolidate and expand upon any spontaneous creations made during the session. After reviewing your During Session notes, use this area to flesh out and detail any new elements, characters, locations, or concepts that emerged. Provide additional information, backgrounds, and intricacies to bring these creations to life. This section serves as a post-session development space, ensuring that any improvisations made during the session can be refined and integrated seamlessly into your campaign world.

### Date & Time

> [!kirk|info] Prompt (Remove me)
> Note down the in-game time and date that your session ended on.

### End of Session Notes

> [!kirk|info] Prompt (Remove me)
Use this section to capture any final thoughts, reflections, or references you want to note for future sessions. Summarize the key takeaways, player actions, or unresolved plot threads. Include any insights gained during the session that could influence future storytelling or campaign development. This section serves as a concise record of noteworthy elements and considerations, providing a valuable resource for continuity and ongoing narrative planning.
