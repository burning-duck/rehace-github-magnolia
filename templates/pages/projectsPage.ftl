<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
<head>
[@cms.page /]
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${content.windowTitle!content.title!}</title>
  <meta name="description" content="${content.description!""}"/>
  <meta name="keywords" content="${content.keywords!""}"/>
  <link rel="stylesheet" type="text/css" href="${ctx.contextPath}/.resources/remace/webresources/remace-bundle.css"
        media="all"/>
</head>
<body>
<ul>
[#list cmsfn.children(content, "mgnl:page") as child ]
  <li>${child.title!}</li>
[/#list]
</ul>

<ul>
[#list cmsfn.contentListByTemplateId(cmsfn.asJCRNode(content), "remace:pages/ghProject") as child ]
  [#assign pageContent = cmsfn.asContentMap(child)]
  [#-- Register project data in state --]
    <div data-component="RemaceProjectRegistration"
         data-prop-owner="${pageContent.owner!}"
         data-prop-repo="${pageContent.repo!}">
    </div>

  <li>${pageContent.owner!} / ${pageContent.repo!}</li>
[/#list]
</ul>

<pre>
  META:
  template = ${cmsfn.metaData(content, "mgnl:template")}
</pre>
<script src="${ctx.contextPath}/.resources/remace/webresources/remace-bundle.js"></script>
</body>
</html>
