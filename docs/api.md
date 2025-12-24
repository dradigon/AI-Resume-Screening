API implementation will begin in Phase 2 

## API Readiness Status

Database schemas have been validated with real data.
The backend is now ready for API development.

Next Phase:
- Authentication APIs (register, login)
- JWT-based authorization


## POST /api/auth/register

Registers a new recruiter or admin.

### Request Body
- name (string, required)
- email (string, required)
- password (string, required)
- role (recruiter | admin)

### Response
- JWT token
- User metadata (id, name, email, role)


# Authentication APIs

## POST /api/auth/register

Registers a new user (recruiter or admin).

### Request Body
- name: string (required)
- email: string (required, unique)
- password: string (required)
- role: recruiter | admin

### Success Response (201)
- JWT token
- User metadata (id, name, email, role)

### Errors
- 400: Missing required fields
- 409: User already exists


## POST /api/auth/login

Authenticates an existing user.

### Request Body
- email: string (required)
- password: string (required)

### Success Response (200)
- JWT token
- User metadata (id, name, email, role)

### Errors
- 400: Missing credentials
- 401: Invalid email or password


## POST /api/auth/login

Authenticates an existing user.

### Request Body
- email (string, required)
- password (string, required)

### Response
- JWT token
- User metadata


# Authentication APIs (Phase 2)

## POST /api/auth/register
Registers a new user.

### Request Body
- name: string (required)
- email: string (required, unique)
- password: string (required)
- role: recruiter | admin

### Response
- JWT token
- User metadata

### Errors
- 400: Missing required fields
- 409: User already exists


## POST /api/auth/login
Authenticates an existing user.

### Request Body
- email: string (required)
- password: string (required)

### Response
- JWT token
- User metadata

### Errors
- 400: Missing credentials
- 401: Invalid email or password


## GET /api/auth/profile
Returns logged-in user details.

### Headers
- Authorization: Bearer <JWT>

### Access
- Protected route

### Response
- User metadata (password excluded)
