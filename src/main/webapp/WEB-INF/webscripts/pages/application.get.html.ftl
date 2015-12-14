<#if jsonModel??>
   <@processJsonModel/>
<#else>
   ${msg(jsonModelError, jsonModelErrorArgs!"")?html}
</#if>
