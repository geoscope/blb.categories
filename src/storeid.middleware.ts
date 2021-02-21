import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class StoreIdMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {
        console.log(`Request: ${JSON.stringify(req.headers)}`);
        if (!req.headers['x-store-id']) {
            // TODO: get this from config instead of hard-coding
            req.headers['x-store-id'] = '1';
        }
        console.log(`x-store-id is ${req.headers['x-store-id']}`);
        next();
    }
}
