# File Disassembler
Disassemble a file into enormous amount of small files, and optionally reassemble it back

## Prerequistes
* [NodeJS](https://nodejs.org/en/) installed on your computer
* NPM or Yarn (By default , NPM is installed)

## Preparation
1. Install dependencies by `npm install` or `yarn`

## Running the Disassembler

### Disassembling:
> Note: <> are required arguments, while [] are optional arguments

To disassemble a file, use the following command
```
$ npm run break <filename>
```
This will generate a folder called `output` in the root directory, and there lies all the shattered files. If you wish to zip it, run
```
$ npm run zip [disassembled-folder-path] [export-zip-file-path]
```
By default , it will zip the `output/` folder and create an `output.zip` zip file if you did not provide the path

### Assembling:
To reassemble a file, use the following command
```
$ npm run restore [disassembled-folder-path] [restored-file-extension]
```
If you did not specify the disassembled folder paht and restored file export path, the command will restore the disassembled file inside `output/` folder into `output.txt`