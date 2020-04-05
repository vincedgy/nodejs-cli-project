import arg from "arg";
import inquirer from "inquirer";
import help from "./help";
import main from "./main";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
        "--help": Boolean,
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-h": "--help",
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install"
    },
    {
      argv: rawArgs.slice(2)
    }
  );
  return {
    skipPrompts: args["--yes"] || false,
    help: args["--help"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false
  };
}

async function promptForMissingOptions(options) {
  const defaultTemplate = "JavaScript";
  if (options.skipPrompts) {
    return {
      ...options,
      template: options.template || defaultTemplate
    };
  }

  const questions = [];

  if (!options.template) {
    questions.push({
      type: "list",
      name: "template",
      message: "Please choose which project template to use",
      choices: ["JavaScript", "TypeScript"],
      default: defaultTemplate
    });
  }

  if (!options.git) {
    questions.push({
      type: "config",
      name: "git",
      message: "Initialize git repository",
      default: false
    });
  }

  const answers = await inquirer.prompt(questions);
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git
  };
}

export async function cli(args) {
  let options = parseArgumentsIntoOptions(args);
  if (options.help) {
    help()
    return
    }

  options = await promptForMissingOptions(options);
  console.info('Your options were', options)
  
  // Call the main fonction with options
  main(options)
  
}
