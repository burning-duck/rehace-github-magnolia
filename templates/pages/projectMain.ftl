<!DOCTYPE html>
<html xml:lang="${cmsfn.language()}" lang="${cmsfn.language()}">
<head>
[@cms.page /]
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>${content.windowTitle!content.title!}</title>
  <meta name="description" content="${content.description!""}"/>
  <meta name="keywords" content="${content.keywords!""}"/>
  <link rel="stylesheet" type="text/css"
        href="${ctx.contextPath}/.resources/rehace-github-magnolia/webresources/rehace-github-magnolia-bundle.css"
        media="all"/>
</head>
<body>

[#-- Menu --]
<div class="ui fixed inverted menu">
  <div class="item">
    <img class="logo"
         src="${ctx.contextPath}/.resources/rehace-github-magnolia/webresources/public/assets/burning-duck-logo.png">
  </div>
  [#assign currentNode = cmsfn.asJCRNode(content)]
  [#assign rootPage = cmsfn.root(currentNode, "mgnl:page")!]
  [#if rootPage?has_content]
    <a class="header item" href="${cmsfn.link(rootPage)}">${rootPage.title!}</a>
  [#else]
    <a class="header item" href="${cmsfn.link(content)}">${content.title!}</a>
  [/#if]
</div>

[#-- Content --]
<div class="ui main text container segment">
  <div class="ui vertical center aligned segment">
  </div>
  <div class="ui grid">
    <div class="grey four wide column">
      [@cms.area name="pageNavigationArea" /]
    </div>
    <div class="twelve wide column">
    [#-- Header --]
      <div class="ui text container">
        [@cms.area name="headerArea"/]
      </div>
      [@cms.area name="mainArea"/]
    </div>
  </div>
</div>

[#-- Get the list of child pages which are project details and register them --]
[#list cmsfn.contentListByTemplateId(cmsfn.asJCRNode(content), "rehace-github-magnolia:pages/projectDetail") as child ]
  [#assign childPage = cmsfn.asContentMap(child)]
<div data-component="GithubProjectRegistration"
     data-prop-owner="${childPage.owner!}"
     data-prop-repo="${childPage.repo!}">
</div>
[/#list]
<script
  src="${ctx.contextPath}/.resources/rehace-github-magnolia/webresources/rehace-github-magnolia-bundle.js"></script>
</body>
</html>