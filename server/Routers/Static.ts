import express from 'express';
import { resolve, join } from 'path';
import { existsSync } from 'fs';

export class Static {
    static getStaticFile(request: express.Request, response: express.Response) {
        const path = join(__dirname, '../../dist/', request.path);
        const filePath = resolve(path);
        if (!existsSync(filePath)) return Static.getIndexFile(request, response);
        return response.sendFile(resolve(filePath));
    }

    static getIndexFile(_request: express.Request, response: express.Response) {
        const path = join(__dirname, '../../dist/', 'index.html');
        return response.sendFile(resolve(path));
    }

    static get router() {
        const router = express.Router({ caseSensitive: false });
        router.get('/', Static.getIndexFile);
        router.get('/*', Static.getStaticFile);
        return router;
    }
}
