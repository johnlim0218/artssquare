import * as url from 'url';
import next from "next";
import expressApp from './express';
import { Request, Response } from 'express';

const dev = process.env.NODE_ENV === "development";

const app = next({ dev, conf: { distDir: ".next" } });

const handle = app.getRequestHandler();


const nextApp = async () => {
  await app.prepare();

  expressApp.get('*', (req: Request, res: Response) => {
    let parsedUrl = url.parse(req.url, true);

    const pathname = parsedUrl.pathname;
    if(pathname !== "/" && pathname?.endsWith("/") && parsedUrl.pathname){
      parsedUrl = url.parse(parsedUrl.pathname.slice(0, -1), true);
    }

    return handle(req, res, parsedUrl);
  });

  return expressApp;

};

export default nextApp;