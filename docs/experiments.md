## Phase 1.1 — Backend Initialization

### What was done
- Created backend project using Node.js
- Initialized project with npm
- Installed Express, dotenv, and cors
- Created standard backend folder structure
- Implemented a basic Express server
- Verified server by accessing localhost in browser

### Issues faced
- npm command not recognized initially
- Resolved by installing Node.js and adding it to PATH

### Outcome
- Backend server successfully running on localhost


## Experiment: MongoDB Atlas Connection Setup

### Objective
Establish a secure connection between the Node.js backend and MongoDB Atlas.

### Steps Performed
- Created MongoDB Atlas free cluster (M0).
- Created database user with read/write permissions.
- Configured network access using `0.0.0.0/0`.
- Integrated Mongoose for database connectivity.
- Switched backend to ES Modules (`import/export`).

### Issues Faced
- Initial authentication failure due to special characters in database password.

### Resolution
- Reset database password using alphanumeric characters only.
- Updated connection string in `.env`.
- Restarted server after configuration change.

### Result
- Backend successfully connected to MongoDB Atlas.
- Connection verified through application logs.

### Status
✅ Successful


## Experiment: User Schema Design

### Objective
Design a scalable and secure User schema for recruiters.

### Design Considerations
- Email must be unique.
- Password will be stored in hashed form.
- Role field added for future access control.
- No embedded job or resume data to keep schema normalized.

### Result
Finalized User schema structure ready for implementation.


## Experiment: Database Schema Design & Validation (Phase 1.3)

### Objective
Design and implement MongoDB schemas for User, Job, and Resume entities.

### Steps Performed
- Designed User schema for recruiter authentication and role management.
- Designed Job schema linked to recruiter using ObjectId reference.
- Designed Resume schema linked to Job with ML-related fields.
- Implemented schemas using Mongoose with validation and timestamps.
- Verified schema correctness by restarting backend without errors.

### Design Decisions
- Kept User schema minimal and focused on identity and access.
- Avoided embedding jobs or resumes inside User documents.
- Stored resume text explicitly to support ML vectorization.
- Included status fields to support async ML processing.

### Result
All schemas compiled successfully and are ready for data insertion.
Database collections will be created lazily upon first write.

### Status
✅ Successful


## Experiment: End-to-End Database Seeding (Phase 1.4)

### Objective
Verify database schemas and MongoDB connectivity by inserting real documents.

### Steps Performed
- Created a seed script to insert test data.
- Inserted a User document (recruiter).
- Inserted a Job document linked to the User.
- Inserted a Resume document linked to the Job.
- Executed the script using Node.js.

### Observations
- MongoDB created the database and collections automatically.
- ObjectId references correctly linked User → Job → Resume.
- Data was visible in MongoDB Atlas under Browse Collections.

### Result
End-to-end database setup validated successfully.

### Status
✅ Successful


## Phase 2.1 — Password Hashing Experiment

- Implemented bcrypt password hashing using Mongoose pre-save hook
- Verified passwords are never stored in plaintext
- Confirmed hash generation using MongoDB Atlas inspection
- Learned importance of isModified() to avoid re-hashing


## Phase 2.2 — JWT Token Generation

- Implemented JWT utility using jsonwebtoken
- Designed minimal token payload (id, role)
- Configured token expiry using environment variables


## Phase 2.3 — User Registration API

- Implemented secure user registration
- Verified bcrypt hashing via schema hooks
- JWT generated on successful signup
- Tested API using Postman


## Phase 2 — Authentication & Security

### Phase 2.1: Password Hashing
- Implemented bcrypt hashing using Mongoose pre-save hook
- Verified passwords are never stored in plaintext
- Confirmed hashing via MongoDB Atlas

### Phase 2.2: JWT Token Generation
- Created reusable JWT utility
- Token payload contains userId and role
- Token expiry configured via environment variables

### Phase 2.3: Register API
- Built secure user registration endpoint
- Validated duplicate users
- JWT issued upon successful registration
- Tested using Postman

### Phase 2.4: Login API
- Implemented credential verification using bcrypt
- JWT regenerated on login
- Invalid credentials correctly rejected


## Phase 2.4 — Login API

- Implemented secure login using bcrypt comparison
- JWT issued on successful authentication
- Invalid credentials correctly rejected


## Phase 2 — Authentication & Security Experiments

- Implemented bcrypt password hashing using Mongoose middleware
- Verified hashed passwords in MongoDB Atlas
- Generated JWT tokens using jsonwebtoken
- Configured environment-based secrets
- Tested registration and login APIs using Postman
- Implemented JWT middleware for route protection
- Verified protected routes reject unauthorized requests
- Successfully accessed protected route using Bearer token
