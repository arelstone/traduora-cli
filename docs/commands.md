# Commands

## Help
Display the help

```bash
$ traduora help
```

## Stats
Get stats for your project

```bash
$ traduora stats
```

## Term
Add a term

```bash
$ traduora term:add NAME
```

## Language
Add a locale to your project in ISO format with an _ seperating

[List of country codes](http://www.lingoes.net/en/translator/langcode.htm)

```bash
$ traduora language:add CODE
```

## Translate
Translate a given term for a given locale

```bash
$ traduora translate VALUE --code=<CODE> --term=<TERM>
$ traduora translate VALUE -c=<CODE> -t=<TERM>
```

## Export
Export translations into a flat json file.

You can append `> <PATH>` to write to a file

### Formats
Avalible rxport formats is:
- `js` - Will export an exported.module
- `jsonflat` - Will export a flat json-file
- `jsonnested` - Will export a nested json-file

```bash
$ traduora export --code=<CODE> > <EXPORT_PATH_TO_FILE_NAME>
$ traduora export -c=<CODE> --format=<FORMAT> > <EXPORT_PATH_TO_FILE_NAME> 
$ traduora export -c=<CODE> > <EXPORT_PATH_TO_FILE_NAME>
$ traduora export -c=<CODE> -f=<FORMAT> > <EXPORT_PATH_TO_FILE_NAME> 
```
