---
tags:
  - "#Service"
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
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Provider** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):provider]` |
>> **Customer** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):customer]` |
>> **Request Date** |  `INPUT[textArea:requestdate]`
>> **Estimated Delivery Date** |  `INPUT[textArea:deliverydate]`
>> **Cost** |  `INPUT[textArea:servicecost]`
>> **Status** | `INPUT[Status][:status]` |

> [!infobox]
> #### Service Info
>  |
> ---|---|
> **Provider** | `VIEW[{provider}][link]` |
> **Customer** | `VIEW[{customer}][link]` |
> **Request Date** | `VIEW[{requestdate}][link]` |
> **Estimated Delivery** | `VIEW[{deliverydate}][link]` |
> **Cost** | `VIEW[{servicecost}]` |
> **Status** | `VIEW[{status}]` |




# `=this.file.name`

> [!kirk|info] Prompt (Remove me)
Detail the service commissioned by the players. Describe the specific task, skill, or goods they've requested. Explore the intricacies of the service, outlining what the provider will produce or deliver. Additionally, delve into any unique or interesting aspects tied to this service request. What makes this service stand out, and how might it impact the players' journey or the unfolding narrative?

## Notes

> [!kirk|info] Prompt (Remove me)
Document the journey and lifespan of the task. Record any notable events, challenges, or unexpected occurrences that transpired during the execution of the service. Outline the issues faced or opportunities that emerged along the way. Did any significant obstacles hinder progress or unexpected opportunities arise that influenced the task's trajectory?
