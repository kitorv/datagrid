const fs = require("fs");
const path = require("path");
const postcss = require("postcss");
const scssPath = path.resolve(__dirname, "../src/components/color/index.scss");
const scssContent = fs.readFileSync(scssPath, "utf-8");
const scssNodes = postcss.parse(scssContent).nodes;
const prettier = require("prettier");

let snippets = "";
scssNodes.forEach((node) => {
  const snippetName = node.prop;
  const snippetValue = node.value.replace("!default", "").trim();
  snippets += `"${snippetName}":{"prefix":"${snippetName}","body":"${snippetName};$1","description":"${snippetValue}"},`;
});

fs.writeFile(
  path.resolve(__dirname, "../.vscode/scss.code-snippets"),
  prettier.format(`{${snippets}}`, { parser: "json" }),
  () => {}
);
