# API Reference Documentation - HoursHub

This document outlines the API endpoints, request bodies, response formats, and potential exceptions for the HoursHub server.

## Base Configuration

- **Base URL:** `http://localhost:3000`
- **Global Pipes:** `ValidationPipe` is enabled (whitelist, forbidNonWhitelisted, transform).
- **Authentication:** JWT via HTTP-only cookies (`access_token`).

---

## 🔐 Authentication & Users

### 1. Register User

`POST /users/register`

Used to create a new user and login automatically.

**Request Body (`CreateUserDto`):**
| Field | Type | Required | Description / Validation |
| :--- | :--- | :--- | :--- |
| `name` | string | Yes | User's first name. |
| `apellido` | string | Yes | User's last name. (Frontend uses `lastName`) |
| `email` | string | Yes | Valid email format. Unique in DB. |
| `password` | string | Yes | Plain text password (hashed on server). |
| `role` | Role | Yes | `USER` or `CREATOR`. (Frontend uses `user` / `admin`) |

> [!WARNING]
> **Field Name Mismatch:** The backend expects `apellido` and `role`, but the current frontend form sends `lastName` and `typeUser`. You must map these before sending.

**Response (Success - 201):**

```json
{
  "message": "User created successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "Name Apellido",
    "role": "USER"
  }
}
```

_Sets `access_token` cookie._

**Potential Exceptions:**

- `ConflictException` (409): `"User already exists"` (Email taken).
- `ConflictException` (409): `"User could not be created"`.
- `BadRequestException` (400): Validation errors (e.g., missing fields, invalid email).

---

### 2. Login User

`POST /users/login`

**Request Body (`LoginUserDto`):**
| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `email` | string | Yes | |
| `password` | string | Yes | |

**Response (Success - 200):**

```json
{
  "message": "User logged in successfully",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "Name Apellido",
    "role": "USER",
    "schedulesAssigned": [...]
  }
}
```

_Sets `access_token` cookie._

**Potential Exceptions:**

- `NotFoundException` (404): `"User not found"`.
- `UnauthorizedException` (401): `"Incorrect password"`.

---

### 3. Get Current User (`me`)

`GET /users/me`

**Headers:** Cookie required.

**Response (Success - 200):**
Returns the user profile and their schedules.

**Potential Exceptions:**

- `UnauthorizedException` (401): `"Token inválido o expirado"`.
- `NotFoundException` (404): `"User not found"`.

---

### 4. Logout

`POST /users/logout`

**Response (Success - 201):**

```json
{ "message": "Logout exitoso" }
```

_Clears `access_token` cookie._

---

## 📅 Other Endpoints

| Method   | Path                | Description                      |
| :------- | :------------------ | :------------------------------- |
| `GET`    | `/users/all`        | List all users (Requires Token). |
| `PATCH`  | `/users/update/:id` | Update user data.                |
| `DELETE` | `/users/delete/:id` | Delete a user.                   |

---

## 🛡️ Exception Handling Summary

Standard NestJS HTTP exceptions are used:

- **400 Bad Request:** Thrown automatically by `ValidationPipe` for DTO mismatches.
- **401 Unauthorized:** Thrown for invalid tokens or incorrect passwords.
- **404 Not Found:** Thrown when a resource (User/Schedule) doesn't exist.
- **409 Conflict:** Thrown for duplication errors or creation failures.
- **500 Internal Server Error:** General catch-all for unhandled database or server logic errors.
