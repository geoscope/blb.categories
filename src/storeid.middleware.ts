import { Logger, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class StoreIdMiddleware implements NestMiddleware {
    private readonly logger = new Logger(process.env.SERVICE_NAME);

    use(req: Request, res: Response, next: () => void) {
        if (!req.headers['x-store-id']) {
            req.headers['x-store-id'] = process.env.DEFAULT_STORE_ID;
        }
        this.logger.debug(`x-store-id is ${req.headers['x-store-id']}`);
        next();
    }
}
