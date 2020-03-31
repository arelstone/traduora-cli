# Installation

### Prerequisites
- If you are not already using Traduora.  Follow the install steps. [Getting started guide](https://docs.traduora.com/docs/getting-started)

- dotenv should be installed installed


```bash
npm install @arelstone/traduora-cli -save-dev
```

### Env variables
To be able to use this package you should add these variables to your `.env`-file

If you do not alrady have [dotenv](https://www.npmjs.com/package/dotenv) installed, do it byrunning:

```bash
npm install dotenv --save
```

#### .env
```
TR_BASE_URL=http://localhost:8080/api/v1
TR_USERNAME=
TR_PASSWORD=
TR_PROJECT_ID=
```

## Usage
In your `package.json` add traduora-cli to your scripts section. Because we rely on dotenv you need to 
```json
"scripts": {
    "traduora": "node -r 'dotenv/config' traduora"
}
```

Now you will be able to use the cli by running
```bash
npm run traduora -- stats
npm run traduora -- locale:add en_US
```
