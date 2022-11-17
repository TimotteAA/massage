import cac from "cac";
import { createDevServer } from "./dev";

const version = require("../package.json").version;

const cli = cac("massage");

cli.usage("command <args> [options]");
cli.command("dev", "启动开发服务器")
    // .option("-f, --force", "强制")
    .action(async () => {
        const server = await createDevServer();
        await server.listen(5173);
        server.printUrls();
    });

cli.version(version);
cli.help();

cli.parse(process.argv);
