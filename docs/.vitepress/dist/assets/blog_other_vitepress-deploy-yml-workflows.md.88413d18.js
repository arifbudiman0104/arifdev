import{_ as s,c as n,o as a,a as l}from"./app.0fd6edaa.js";const D=JSON.parse('{"title":"Vite Deploy yml Workflows","description":"","frontmatter":{},"headers":[],"relativePath":"blog/other/vitepress-deploy-yml-workflows.md"}'),p={name:"blog/other/vitepress-deploy-yml-workflows.md"},e=l(`<h1 id="vite-deploy-yml-workflows" tabindex="-1">Vite Deploy yml Workflows <a class="header-anchor" href="#vite-deploy-yml-workflows" aria-hidden="true">#</a></h1><p><code>.github/workflows/deploy.yml</code></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - master</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          fetch-depth: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: 16</span></span>
<span class="line"><span style="color:#A6ACCD;">          cache: npm</span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Install</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: rm -rf node_modules/ &amp;&amp; npm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: npm run docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          github_token: \${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          publish_dir: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">          # cname: example.com # if wanna deploy to custom domain</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,3),o=[e];function c(t,r,i,C,A,y){return a(),n("div",null,o)}const m=s(p,[["render",c]]);export{D as __pageData,m as default};
