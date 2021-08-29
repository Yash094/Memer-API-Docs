import DocsManager from "./DocsManager";

const blacklisted = new Set(["docs", "v3.1.0@beta", "v3.0.7" ,"v3.0.0@beta" ,"v1" ,"v2","v3.0.7", "v2.2.1" ]);

export default new DocsManager({
    id: "memer",
    name: "Main",
    global: "Memer",
    repo: "Yash094/memer-api",
    defaultTag: "main",
    docsBranch: "docs",
    branchFilter: (branch) => !blacklisted.has(branch) && !branch.startsWith("dependabot/")
});
