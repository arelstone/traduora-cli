# Installation

### Prerequisites
- If you are not already using Traduora.  Follow the install steps. [Getting started guide](https://docs.traduora.com/docs/getting-started)

- dotenv should be installed installed


```bash
npm install @arelstone/traduora-cli -save-dev
```

#### .traduorarc
This package needs to know a few things about your traduora project before being able to communicate with your server, for this we'll use an rc file.

In the root of your project create a `.traduorarc`-file.

!> The filenames allowed is: `.traduorarc.js`, `.traduorarc.json` and `.traduorarc`

```js
{
    username: '', // Path to the api. Remeber the api/v1 suffix
    password: '', // The username of who will be authendicated
    baseUrl: '', // The password
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
npm run traduora -- stats
npm run traduora -- locale:add en_US
```
