<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
<head>
[@cms.page /]
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}"/>
    <meta name="keywords" content="${content.keywords!""}"/>


</head>
<body>
[#-- Register project data in state --]
<div data-component="RemaceProjectRegistration"
     data-prop-owner="${content.owner!}"
     data-prop-repo="${content.repo!}">
</div>

<header>
    [@cms.area name="headerArea"/]
</header>
<main>
[@cms.area name="mainArea"/]
</main>

<script src="${ctx.contextPath}/.resources/remace/webresources/remace-bundle.js"></script>
</body>
</html>
