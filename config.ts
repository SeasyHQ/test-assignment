export const port = Number(process.env.PORT!);
export const db = String(process.env.DATABASE_URL!);
export const nodeEnv = process.env.NODE_ENV || "dev";
