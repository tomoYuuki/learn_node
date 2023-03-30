const {program} = require("commander");
const {createProjectAction, createComponentAction} = require("./actions");

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
    .action(createComponentAction);
};

module.exports = {
  createCommands,
};
