import { cacheProvider } from "./init.js";

export function withCache(ttl = 3600) {
    return async (req, res, next) => {
        // request come before [method + url]
        let key = `${req.method}: ${req.originalUrl}`;
        const cached = await cacheProvider.get(key);
        if (cached) {
            res.setHeader("X-Cache", "HIT");
            return res.json(JSON.parse(cached));
        }

        //interceptor
        const originalJson = res.json.bind(res);

        res.json = (body) => {
            res.setHeader("X-Cache", "MISS");
            cacheProvider.set(key, JSON.stringify(body), ttl);
            return originalJson(body);
        };
        next();
    };
}
