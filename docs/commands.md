# Commands

## Help
Display the help

### Example
```bash
$ traduora help
```

## Stats
Get stats for your project

### Example
```bash
$ traduora stats
```

### Response
```
Project stats for: PROJECT_NAME
Progress: 9%
Translated: 5
Number of terms: 9
Number of locales: 6


Code  - Progress
en_GB - 44%
de_DE - 0%
sv_SE - 5%
```

## Term
Add a term

### Example
```bash
$ traduora term:add NAME
```

## Language
Add a locale to your project in ISO format with an _ seperating

[List of country codes](http://www.lingoes.net/en/translator/langcode.htm)

### Example
```bash
$ traduora language:add country_code
```


## Export
Export translations into a flat json file.

You can append `> <PATH>` to write to a file

### Example
```bash
$ traduora export --code=en_GB > ./locale/gb_DB.json
```
