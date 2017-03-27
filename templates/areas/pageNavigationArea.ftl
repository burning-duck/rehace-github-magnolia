[#assign parent = cmsfn.parent(content, "mgnl:page")! ]
  [#-- child pages link list --]
<h2>Project Page Links</h2>
<ul>
  [#list cmsfn.contentListByTemplateId(cmsfn.asJCRNode(parent), "rehace-github-magnolia:pages/projectDetail") as child ]
    [#assign childPage = cmsfn.asContentMap(child)]
    <li>
      <a class="item" href="${cmsfn.link(childPage)}">${childPage.title!}</a>
    </li>
  [/#list]
</ul>
