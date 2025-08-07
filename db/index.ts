// db/index.ts
import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

// Cambia esta línea:
// const db = drizzle(process.env.DATABASE_URL!);

// Por esta línea:
export const db = drizzle(process.env.DATABASE_URL!);