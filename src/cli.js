"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const version = require("../package").version;
const cli = (0, cac_1.default)();
cli.command("init <args>", "测试....")
    .option("-f, --force", "强制")
    .action((args, option) => {
    console.log(args, option);
});
cli.parse(process.argv);
