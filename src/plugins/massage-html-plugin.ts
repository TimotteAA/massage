import { Plugin } from "vite";
import fs from "node:fs/promises";

import { HTML_TEMPLATE } from "../constants";

/**
 * 对开发网络请求进行拦截
 * 尝试返回模板页面
 */
const massageHtmlPlugin: () => Plugin = () => ({
    name: 'massageHtmlPlugin',
    configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
            // 尝试拦截并返回html文件？
            let htmlFile;
            try {
                htmlFile = await fs.readFile(HTML_TEMPLATE, { encoding: "utf-8" });
                const html = await  server.transformIndexHtml(
                    req.url,
                    htmlFile,
                    req.originalUrl
                )
                res.setHeader("Content-Type", "text/html");
                res.end(html);
                res.statusCode = 200;
            } catch (e) {
                // 读取失败，转交给vite处理
                next(e);
            }
        })
    }
})

export {
    massageHtmlPlugin
};
