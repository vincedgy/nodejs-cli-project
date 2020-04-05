# NodeJS CLI boostrap project

This project is a simple CLI using a lot of great tools.

It uses ESM for packaging.

It's inspired from this article [https://www.twilio.com/blog/how-to-build-a-cli-with-node-js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js), but not limited to.

## Dependencises

- esm : nodejs module management
- arg : for commmand line arguments processing
- chalk : for ANSI colorization of the command line
- inquirer : modules that promps the user
- marked : Markedown compilation lib
- marked-terminal : displays Markedown (marked) to the terminal


## Install

Install dependencies

```sh
npm install
```

Install the CLI as an executable in you npm local installation

```sh
npm link
```

## Run it

You can use the CLI with options and arguments like so :

```sh
$ cli-project Javascript -g
Your options were {
  skipPrompts: false,
  help: false,
  git: true,
  template: 'Javascript',
  runInstall: false
}
Processing...

```

You can also be prompted if no options are provided

```sh
$ cli-project
? Please choose which project template to use (Use arrow keys)
❯ JavaScript 
  TypeScript 
? Initialize git repository (false)
Your options were {
  skipPrompts: false,
  help: false,
  git: false,
  template: 'JavaScript',
  runInstall: false
}
Processing...

```

### Help display

The help content is written with Markdown from HELP.md


```sh
$ cli-project -h

# CLI written with NodeJs

## Sub Title

This is a super CLI

### How to use it ?

    1. one
    2. two
    3. three

This is a sample

### TODO

What's missing ?

    * [X]: option 1

```

## Architecture

- `src/cli.js` : is reponsible for the CLI management which are controls on options and arguments
- `src/main.js` : where resides your logic. It receives the JSON object with validated options
- `src/help.js` : helper function tha handle the display of HELP.md

- `bin/cli-project` : the project use ESM, this is the main project/module declaration file

