traduora-cli
============

![](https://raw.githubusercontent.com/arelstone/traduora-cli/master/docs/_media/image.jpg)

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/traduora-cli.svg)](https://npmjs.org/package/@arelstone/traduora-cli)
[![Downloads/week](https://img.shields.io/npm/dw/traduora-cli.svg)](https://npmjs.org/package/@arelstone/traduora-cli)
[![License](https://img.shields.io/npm/l/traduora-cli.svg)](https://github.com//traduora-cli/blob/master/package.json)

-  [Documentation](https://arelstone.github.io/traduora-cli/)
- [Issues](https://arelstone.github.io/traduora-cli//issues)

Read more in the [documentation](https://arelstone.github.io/traduora-cli/)


## Installation
```bash
npm install @arelstone/traduora-cli -save-dev
```

## .traduorarc
This package needs to know a few things about your traduora project before being able to communicate with your server, for this we'll use an rc file.

In the root of your project create a `.traduorarc`-file.

The filenames allowed is: `.traduorarc.js`, `.traduorarc.json` and `.traduorarc`

```js
{
    baseUrl: '', // Path to the api. Remeber the api/v1 suffix
    username: '', // The username of who will be authendicated
    password: '', // The password
    projectId: '', // The project is for your traduora project
}
```


## Usage
In your `package.json` add traduora-cli to your scripts section. Because we rely on dotenv you need to 
```json
"scripts": {
    "traduora": "traduora"
}
```

Now you will be able to use the cli by running
```bash
npm run traduora stats
npm run traduora locale:add en_US
```

For more commands see the [commands](/?id=commands)

## Prerequisites
- If you are not already using Traduora.  Follow the install steps. [Getting started guide](https://docs.traduora.com/docs/getting-started)
