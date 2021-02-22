import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class StoreIdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log(`Request: ${JSON.stringify(req.headers)}`);
        if (!req.headers['x-store-id']) {
            req.headers['x-store-id'] = process.env.DEFAULT_STORE_ID;
        }
        console.debug(`x-store-id is ${req.headers['x-store-id']}`);
        next();
    }
}
