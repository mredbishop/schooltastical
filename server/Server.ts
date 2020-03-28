import express from "express";
import { Api } from "./Routers/Api";
import { Static } from "./Routers/Static";

export class Server {
    static start() {
        const app: express.Express = express();
        const port = 3000;

        app.use(Static.router);
        app.use(Api.router);

        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }
}

Server.start();
