import express from "express";
export class Api {
    static postScore(request: express.Request, response: express.Response) {
        const result: {
            name: string;
            time: number;
        } = request.body;
        console.log(result);
        response.end();
    }
    static get router() {
        const router = express.Router({ caseSensitive: false });
        router.post('/api/score', Api.postScore);
        return router;
    }
}
