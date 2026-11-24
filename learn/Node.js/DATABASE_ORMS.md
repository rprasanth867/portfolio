
# Database ORMS
- ORM --> Object Relational Mapping

## Drizzle ORM

**Drizzle ORM** is a TypeScript/JavaScript ORM for working with SQL databases such as PostgreSQL, MySQL, and SQLite.

- Drizzle is a TypeScript ORM for SQL databases.
- It is lightweight and fast.
- It is type-safe.
- It is SQL-like, so knowing SQL makes Drizzle easy to learn.
- Supports databases like:
  - PostgreSQL
  - MySQL
  - SQLite
  - MSSQL
  - CockroachDB
- You can define your database schema using TypeScript.
- Supports CRUD operations.
- Supports JOINs and relationships.
- Supports transactions.
- Supports migrations using Drizzle Kit.
- Supports raw SQL when needed.
- Provides good TypeScript autocomplete and type checking.
- Has low ORM overhead.
- Can be used for large-scale applications.
- Can be used with Node.js/TypeScript backends.
- Can also be used with SQLite in React Native.
- It doesn't force a particular project architecture (headless ORM).

|                      | **Drizzle**     | **Prisma**         | **Sequelize**       |
| -------------------- | --------------- | ------------------ | ------------------- |
| TypeScript support   | ⭐⭐⭐⭐⭐           | ⭐⭐⭐⭐⭐              | ⭐⭐⭐                 |
| SQL-like             | **Very high**   | Low                | Medium              |
| Type safety          | Excellent       | Excellent          | Good                |
| Performance overhead | Very low        | Moderate           | Moderate            |
| Learning curve       | Low–Medium      | Low                | Medium              |
| Schema definition    | TypeScript      | Prisma Schema      | JS/TS               |
| Migrations           | Drizzle Kit     | Prisma Migrate     | Sequelize CLI       |
| Query style          | SQL-like        | ORM abstraction    | ORM abstraction     |
| Raw SQL              | Easy            | Possible           | Possible            |
| Relations            | Supported       | Excellent          | Excellent           |
| Lightweight          | **Yes**         | No                 | No                  |
| Best suited for      | Modern TS + SQL | Full-featured apps | Mature Node.js apps |
