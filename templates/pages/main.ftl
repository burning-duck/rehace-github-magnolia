<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
<head>
[@cms.page /]
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>${content.windowTitle!content.title!}</title>
    <meta name="description" content="${content.description!""}"/>
    <meta name="keywords" content="${content.keywords!""}"/>
    <link rel="stylesheet" type="text/css" href="${ctx.contextPath}/.resources/remace/webresources/remace-bundle.css" media="all"/>
</head>
<body class="main ${cmsfn.language()}">

<div class="container ">
    <h1>main works!</h1>
    <div data-component="FooProjectPage" data-prop-dialog-title="${content.title!}"></div>
</div>

<script src="${ctx.contextPath}/.resources/remace/webresources/remace-bundle.js"></script>
</body>
</html>
