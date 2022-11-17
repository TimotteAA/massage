import { ROOT_DIR } from "./constants";
import { createServer } from "vite";
import { massageHtmlPlugin } from "./plugins";

async function createDevServer(root: string = ROOT_DIR) {
    // root: 项目根目录
    // 直接传入配置文件地址也可以？
    const server = await createServer({
        root,
        plugins: [massageHtmlPlugin()]
    });

    return server;
}

export {
    createDevServer
};
