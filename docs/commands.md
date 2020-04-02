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
$ traduora language:add CODE
```

## Translate
Translate a given term for a given locale

### Example
```bash
$ traduora translate VALUE --code=<CODE> --term=<TERM>
$ traduora translate VALUE -c=<CODE> -t=<TERM>
```


## Export
Export translations into a flat json file.

You can append `> <PATH>` to write to a file

### Example
```bash
$ traduora export --code=<CODE> > <EXPORT_PATH_TO_FILE_NAME>
$ traduora export -c=<CODE> > <EXPORT_PATH_TO_FILE_NAME>
```
