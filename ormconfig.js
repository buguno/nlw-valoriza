module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "migrations": [
    `${(process.env.MODE === "prod") ? "dist/database/migrations/*.js" : "src/database/migrations/*.ts"}`
  ],
  "entities": [
    `${(process.env.MODE === "prod") ? "dist/entities/*.js" : "src/entities/*.ts"}`
  ],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}
