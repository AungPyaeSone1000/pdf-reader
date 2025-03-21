import { neon, neonConfig } from "@neondatabase/serverless";
import {drizzle} from "drizzle-orm/neon-http";
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

const db = neon(process.env.DATABASE_URL);
export const drizzleClient = drizzle(db);