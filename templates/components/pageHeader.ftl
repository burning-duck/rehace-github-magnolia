[#assign title = content.title?has_content?then(content.title, "")]
[#assign description = content.description?has_content?then(content.description, "")]
[#assign overwrite = content.overwrite?has_content?then(content.overwrite?then("true", "false"), "false")]

[#assign icon = content.icon?has_content?then(content.icon, "false")]
[#assign textAlign = content.textAlign?has_content?then(content.textAlign, "left")]
[#assign inverted = content.inverted?has_content?then(content.inverted?then("true", "false"), "false")]


<div data-component="GithubProjectHeader"
     data-prop-title="${title}"
     data-prop-description="${description}"
     data-prop-overwrite="${overwrite}"
>
</div>
