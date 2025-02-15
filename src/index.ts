import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

// prisma
const prisma = new PrismaClient();

// server
const server = fastify({ logger: true });

// routes
server.get("/", async function handler(req, res) {
  return { hello: "world" };
});

// start
const start = async () => {
  try {
    await server.register(cors, {
      origin: true,
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
    });

    await server.listen({ port: 3000 });
    console.log(`Server is running on port ${3000}`);
  } catch (err) {
    console.error("Server startup error:", err);
    process.exit(1);
  }
};

// shutdown
const shutdown = async () => {
  try {
    await server.close();
    await prisma.$disconnect();
  } catch (err) {
    console.error("Error during shutdown:", err);
  } finally {
    process.exit(0);
  }
};

["SIGINT", "SIGTERM", "SIGTSTP"].forEach((signal) => {
  process.on(signal, shutdown);
});

// startup
start();
