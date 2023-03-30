const {program} = require("commander");
const {
  createProjectAction,
  createComponentAction,
  createPageAndRouteAction,
  createStoreAction,
} = require("./actions");

const createCommands = () => {
  // yuuki create [projectName]
  program
    .command("create <project> [others...]")
    .description("clone a repository into a folder")
    .action(createProjectAction);
  // yuuki addcpn [cpnName]
  program
    .command("addcpn <componentName>")
    .description("create a component")
    .action((componentName) => {
      // 获取一些 -d -h等后面的参数
      const options = program.opts();
      createComponentAction(componentName, options.dest || "src/components");
    });

  // yuuki addpage [pageName]
  program
    .command("addpage <pageName>")
    .description("create a [pageName].vue and router.js")
    .action((pageName) => {
      const options = program.opts();
      createPageAndRouteAction(pageName, options.dest || "src/pages");
    });

  // yuuki addstore [storeName]
  program
    .command("addstore <storeName>")
    .description("create a [storeName].js and types.js")
    .action((pageName) => {
      const options = program.opts();
      createStoreAction(pageName, options.dest || "src/store/modules");
    });
};

module.exports = {
  createCommands,
};
