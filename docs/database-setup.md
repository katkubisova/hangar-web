# Database Setup Guide

This guide explains how to set up and use the database with Drizzle ORM and PostgreSQL in this project.

## Prerequisites

- Docker and Docker Compose
- Node.js and pnpm

## Quick Start

1. **Start PostgreSQL container:**
   ```bash
   pnpm docker:up
   ```

2. **Wait for database to be ready** (check status):
   ```bash
   pnpm docker:status
   ```

3. **The database is now ready to use!**

## Available Scripts

### Docker Management
- `pnpm docker:up` - Start PostgreSQL container
- `pnpm docker:down` - Stop PostgreSQL container
- `pnpm docker:logs` - Follow database logs
- `pnpm docker:status` - Check container status
- `pnpm docker:reset` - Reset database (stops with volume cleanup and restarts)

### Database Operations
- `pnpm db:generate` - Generate migrations from schema changes
- `pnpm db:migrate` - Run migrations against database
- `pnpm db:push` - Push schema directly (development only)
- `pnpm db:studio` - Launch Drizzle Studio (database GUI)
- `pnpm db:pull` - Pull schema from existing database

## Project Structure

```
src/
  db/
    index.ts              # Database connection and export
    schema/               # Schema definitions directory
      index.ts            # Export all schemas (currently empty)
      users.ts            # Example: add table schemas here
      posts.ts
      ...
drizzle/                 # Migration output directory
drizzle.config.ts         # Drizzle configuration
```

## Creating Tables

1. **Create a new schema file** in `src/db/schema/`:
   ```typescript
   // src/db/schema/users.ts
   import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

   export const users = pgTable('users', {
     id: serial('id').primaryKey(),
     name: text('name').notNull(),
     email: text('email').notNull().unique(),
     createdAt: timestamp('created_at').defaultNow(),
   });
   ```

2. **Export the schema** in `src/db/schema/index.ts`:
   ```typescript
   export * from './users';
   ```

3. **Generate migrations:**
   ```bash
   pnpm db:generate
   ```

4. **Run migrations:**
   ```bash
   pnpm db:migrate
   ```

## Using the Database

```typescript
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

// Query data
const allUsers = await db.select().from(users);

// Insert data
await db.insert(users).values({
  name: 'John Doe',
  email: 'john@example.com',
});

// Update data
await db.update(users)
  .set({ name: 'Jane Doe' })
  .where(eq(users.id, 1));

// Delete data
await db.delete(users).where(eq(users.id, 1));
```

## Drizzle Studio

Drizzle Studio is a lightweight database GUI:

```bash
pnpm db:studio
```

Then open http://localhost:4983 in your browser.

## Development Workflow

### Adding a New Table
1. Create schema file in `src/db/schema/`
2. Add table definition
3. Export in `src/db/schema/index.ts`
4. Run `pnpm db:generate`
5. Run `pnpm db:migrate`

### Making Schema Changes
1. Modify existing schema files
2. Run `pnpm db:generate` (creates new migration)
3. Run `pnpm db:migrate` (applies changes)

### Quick Development (No Migrations)
- Use `pnpm db:push` for immediate schema changes
- **Warning:** Not recommended for production workflows

## Environment Variables

Copy `.env.example` to `.env` if needed:

```bash
cp .env.example .env
```

Variables:
- `POSTGRES_DB` - Database name (default: speculibro)
- `POSTGRES_USER` - Database user (default: postgres)
- `POSTGRES_PASSWORD` - Database password (default: postgres)
- `DATABASE_URL` - Full connection string

## Troubleshooting

### Database Connection Failed
- Ensure Docker is running: `docker ps`
- Check container status: `pnpm docker:status`
- View logs: `pnpm docker:logs`
- Restart container: `pnpm docker:reset`

### Migration Issues
- Check migration status in database
- Review generated SQL in `drizzle/` directory
- Manually verify schema in `src/db/schema/`

### TypeScript Errors
- Ensure proper exports in `src/db/schema/index.ts`
- Check Drizzle types are installed: `@types/pg`
- Restart TypeScript server in your IDE

## Production Considerations

- Use migrations (not `db:push`) in production
- Set strong passwords and secure DATABASE_URL
- Use environment-specific configuration
- Backup database regularly
- Consider connection pooling for high-traffic applications

## Additional Resources

- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Drizzle Kit Documentation](https://orm.drizzle.team/docs/kit-overview)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)