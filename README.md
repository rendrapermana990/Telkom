# log-to-json-cli

## Install

Requires Node >=10.

From npm,

```sh
npm i -g log-to-json-cli
```

## CLI Usage

```bash
➜ log-to-json --help
Usage: log-to-json [options] <input-log-file>

An easy CLI tool to convert .log files to .json

Options:
  -V, --version        output the version number
  -o, --output <file>  Relative or absolute file path. If not provided, a new
                       JSON file with similar name is created.
  -h, --help           output usage information

```

### Example

With out output file option (`-o`):

```bash
➜ log-to-json sample._log
✔ Output file created at: /home/user/path/log-to-json/tests/sample._log.json
```

With `-o` option

```bash
➜ log-to-json sample._log -o magic.json
✔ Output file created at: /home/qbuser/gith/log-to-json/tests/magic.json
# Telkom
