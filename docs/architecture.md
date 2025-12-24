## Phase 1.1 — Backend Initialization

### Components Involved
- Backend: Node.js + Express

### Current Architecture
Client (Browser)
        ↓
Express Server (Node.js)

### Description
In Phase 1.1, a basic Express server was initialized to establish
the backend foundation. The server listens for HTTP requests and
responds to a test route, proving that the backend service is running.

No database, authentication, or business logic is included in this phase.


## Backend–Database Architecture (Phase 1.2)

The backend is built using Node.js and Express and connects to MongoDB Atlas using Mongoose.
The project uses ES Modules (`import/export`) for module management.

### Architecture Flow

Client (Browser)
→ Express Server (Node.js)
→ MongoDB Atlas (Cloud Database)

### Key Design Decisions

- MongoDB Atlas Free Tier (M0) used for development.
- Database connection logic isolated in `config/db.js`.
- Environment variables managed using `.env`.
- ES Modules enabled via `"type": "module"` in `package.json`.

This separation ensures scalability, maintainability, and clean architecture.


## User Data Model (Phase 1.3)

The User model represents recruiters who access the AI Resume Screening platform.

### Responsibilities
- Authentication
- Job creation ownership
- Access control

### Fields
- name (String)
- email (String, unique)
- password (String, hashed)
- role (String: recruiter/admin)
- createdAt (Date)
- updatedAt (Date)

The User model acts as the root entity for job and resume associations.


## Data Modeling Architecture (Phase 1.3)

The backend uses MongoDB with Mongoose ODM to model application data.
The data layer is designed using normalized schemas to ensure scalability,
clean relationships, and ML readiness.

### Core Entities

1. User
   - Represents recruiters using the platform.
   - Handles authentication and access control.

2. Job
   - Represents job postings created by recruiters.
   - Acts as the anchor for resume uploads and AI matching.

3. Resume
   - Represents candidate resumes submitted for a specific job.
   - Stores parsed resume text, extracted skills, and ML match score.

### Entity Relationships

User (Recruiter)
→ Job (createdBy)
→ Resume (job)

### Design Principles

- Separation of concerns between entities.
- No embedding of large or growing datasets.
- References used via ObjectId for scalability.
- Schemas designed to support downstream ML processing.

This architecture enables efficient querying, clean AI integration,
and future extensibility.


## Database Initialization & Verification (Phase 1.4)

After completing schema design, the database was validated using an
end-to-end seed script.

### Verification Flow

Seed Script
→ MongoDB Connection
→ User Document Creation
→ Job Document Creation (linked to User)
→ Resume Document Creation (linked to Job)

### Outcome

- MongoDB database and collections were created lazily on first write.
- Entity relationships were verified using ObjectId references.
- Backend–database integration confirmed end-to-end.

This phase validates the correctness of the data model and infrastructure
before API development.


### Authentication Layer

- JWT-based authentication
- Stateless authorization
- Token contains user id and role
- Used to protect all core APIs

## Phase 2 — Authentication & Security

The backend implements JWT-based authentication to secure all sensitive APIs.

### Components
- bcrypt for password hashing
- JWT for stateless authentication
- Authentication middleware for route protection

### Security Flow
1. User registers or logs in
2. Backend validates credentials
3. JWT token is issued with userId and role
4. Client sends token in Authorization header
5. Middleware verifies token before allowing access

### Design Principles
- Passwords are never stored in plaintext
- Authentication logic is isolated from controllers
- Middleware enforces security before business logic
