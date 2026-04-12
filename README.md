# HoursHub 🕒

HoursHub is a progressive system for managing schedules and users, built with a focus on efficiency and scalability. It features a robust role-based access control system that allows administrators (Creators) to manage, assign, and track schedules for different users.

## 🚀 Key Features

- **Role-Based Access Control (RBAC):** Distinct roles for `CREATOR` (Admin) and `USER` (Standard user).
- **Schedule Management:** Complete CRUD operations for schedules, including start/end dates, descriptions, and statuses.
- **Assignment System:** Creators can assign specific schedules to users and track their progress.
- **Secure Authentication:** Cookie-based JWT authentication for a seamless and secure session management.
- **Modern Tech Stack:** Built with cutting-edge tools for reliability and performance.

## 🛠️ Server Stack

The HoursHub server is a robust NestJS application designed with SOLID principles:

- **Framework:** [NestJS](https://nestjs.com/) (Node.js)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Database:** PostgreSQL (Hosted on Supabase/AWS)
- **Authentication:** JWT (JSON Web Tokens) with Cookie-based delivery.
- **Security:** Password hashing using `Bcryptjs`.
- **Infrastructure:** Configured for easy deployment and scalability.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20+)
- npm / pnpm / yarn
- A PostgreSQL database instance

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd HoursHub/server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the `server` directory and configure the following variables:

   ```env
   DATABASE_URL="your-postgresql-url"
   DIRECT_URL="your-direct-postgresql-url"
   JWT_KEY="your-secret-key"
   PORT=3000
   ```

4. **Prisma Setup:**
   Generate the Prisma client and run migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

### Running the Server

```bash
# development
$ npm run start

# watch mode (recommended for development)
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 📚 API Overview

The server exposes several endpoints for management:

- **Auth:** `/users/register`, `/users/login`, `/users/logout`
- **Profiles:** `/users/me`, `/users/update/:id`
- **Schedules:** `/schedules` (Full CRUD available for Creators)

## 📄 License

HoursHub is [MIT licensed](LICENSE).
