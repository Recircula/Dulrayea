---
tags:
  - "#Location"
  - "#Geography"
art: z_Assets/Misc/PlaceholderImage.png
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
> **Pronounced** |  `INPUT[textArea:pronounced]`
> **Aliases** | `INPUT[list:aliases]` |
> **Terrain** | `INPUT[Terrain][inlineListSuggester:terrain]` |
> **Dominion** | `INPUT[inlineListSuggester(optionQuery(#Character OR #Organization AND !"z_Templates"), useLinks(partial)):dominion]` |
> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
> **Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Info
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Terrain** | `VIEW[{terrain}][text]` |
> **Dominion** | `VIEW[{dominion}][link]` |
> **Location** | `VIEW[{location}][link]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!kirk|info] Info (Remove me)
> <center><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8MI5JyiH-Wo?si=G-lpyB0tK_I479FF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>

> [!metadata|map]- Map
> ```leaflet
> id: TBD
> image: [[PlaceholderImage.png]]
> lock: true
> recenter: true
> noScrollZoom: false
> ### Use this [LINK](https://docs.google.com/spreadsheets/d/1jKQxktYSUFcCJhEkAAPr1wMVBTqUdpEfA5XveUXI17I/edit?usp=sharing) to work out your map's bounds.
> ### bounds: [[0,0], [0, 0]] (Remove the ### and these parentheses with the content within from this line to enable the bounds)
> height: 600px
> width: 640px
> lat: 0
> long: 0
> minZoom: 1
> maxZoom: 6.5
> defaultZoom: 1
> zoomDelta: 0.5
> unit: miles
> scale: 1
> darkMode: false
> ```

> [!metadata|county]- Counties
> ```dataview
> TABLE join(aliases, ", ") AS Aliases, join(terrain, ", ") AS Terrain, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "County")
> SORT nation ASC, file.name ASC

> [!metadata|settlements]- Settlements
> ```dataview
> TABLE join(aliases, ", ") AS Aliases, settlementtype AS Type, defence AS Defences, join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Settlement")
> SORT nation ASC, file.name ASC

> [!metadata|location]- Locations
> ```dataview
> TABLE join(aliases, ", ") AS Aliases, join(poitype, ", ") AS Type, join(link(organization), ", ") AS "Organization(s)", join(link(dominion), ", ") AS "Dominion"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "POI")
> SORT tags DESC, poitype ASC, file.name ASC

> [!metadata|organizations]- Organizations
> ```dataview
> TABLE join(aliases, ", ") AS Aliases, join(organizationtype, ", ") AS Type
> FROM "Campaign"
> WHERE contains(location, this.file.link) AND contains(tags, "Organization")
> SORT organizationtype ASC, file.name ASC

> [!metadata|characters]- Characters
> ```dataview
> TABLE join(aliases, ", ") AS Aliases, join(occupation, ", ") AS "Occupations", join(link(organization), ", ") AS "Organizations"
> FROM "Campaign"
> WHERE econtains(location, this.file.link) AND contains(tags, "Character") AND !contains(condition, "Dead")
> SORT tags DESC, file.name ASC

## Overview 

> [!kirk|info] Prompt (Remove me)
> Create an overview that encapsulates the spirit and character of this region. Explore its cultural diversity, geographical landmarks, societal values, and any defining aspects that contribute to its identity. What makes this region unique and distinct from others? Paint a vivid picture that captures the essence and allure of this land.

## Current Events

> [!kirk|info] Prompt (Remove me)
> Capture the pulse of the present moment by examining current events. Dive into the ongoing occurrences, societal shifts, or global happenings that are shaping the world today. Analyze the trends, controversies, or innovations unfolding in real-time. What stories are making headlines, and how might these current events influence the future trajectory of the society?

## History

> [!kirk|info] Prompt (Remove me)
> Delve into the historical legacy of the inhabitants of this region. Explore the diverse cultures, migrations, and societal developments that have shaped the people's identity and contributed to the region's tapestry. Investigate the stories of resilience, innovations, and cultural amalgamations that reflect the rich history within this region. How have the people's experiences and interactions shaped the course of this region's history?

## Notes

