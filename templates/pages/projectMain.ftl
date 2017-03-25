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
  <a href="#" class="header item">
    ReMaCe
  </a>
  <a href="#" class="item">Home</a>
</div>

[#-- Content --]
<div class="ui main text container">
  <div class="ui vertical center aligned segment">
  </div>
  <div class="ui grid">
    <div class="red four wide column">
      <p>NAV</p>
      [@cms.area name="pageNavigationArea" /]
    </div>
    <div class="green twelve wide column">
    [#-- Header --]
      <div class="ui text container">
      [@cms.area name="headerArea"/]
      </div>
      <p>CONTENT</p>
    [@cms.area name="metricsArea"/]
    [@cms.area name="mainArea"/]
    </div>
  </div>
</div>




[#-- Check if this page is a detail page and register the project --]
[#assign currentPageTemplate = cmsfn.metaData(content, "mgnl:template")]
[#if currentPageTemplate?? && currentPageTemplate == "rehace-github-magnolia:pages/projectDetail"]
<div data-component="GithubProjectRegistration"
     data-prop-owner="${content.owner!}"
     data-prop-repo="${content.repo!}">
</div>
[/#if]

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
