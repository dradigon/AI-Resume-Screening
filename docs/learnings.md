## Phase 1.1 — Learnings

- Understood the role of Express in backend development
- Learned how middleware works in Express
- Learned how environment variables are used via dotenv
- Understood the purpose of separating routes, controllers, and models
- Learned how a backend server listens for HTTP requests


## Learnings — Phase 1.2 (MongoDB Integration)

- Learned the difference between CommonJS and ES Modules in Node.js.
- Understood how `"type": "module"` affects module resolution.
- Gained hands-on experience with MongoDB Atlas setup.
- Learned how MongoDB creates databases and collections lazily.
- Understood authentication errors and password encoding issues.
- Learned how to securely manage secrets using environment variables.

This phase improved my understanding of real-world backend architecture.


## Learnings — Phase 1.3 (User Modeling)

- Learned how to design schemas before writing code.
- Understood why normalization is preferred in MongoDB for scalable systems.
- Learned how User acts as a root entity in application data models.


## Learnings — Phase 1.3 (Database Modeling)

- Learned how to design schemas before writing APIs.
- Understood the importance of normalization in MongoDB.
- Learned how to model one-to-many relationships using ObjectId references.
- Gained clarity on separating authentication data from domain data.
- Learned how schema design impacts ML pipelines and scalability.
- Improved understanding of real-world backend data architecture.

This phase strengthened my ability to think in terms of system design
rather than just coding features.


## Learnings — Phase 1.4 (Database Validation)

- Learned how MongoDB creates databases and collections lazily.
- Understood how to verify schema relationships using ObjectId references.
- Gained experience writing one-time seed scripts for testing.
- Learned the importance of validating infrastructure before API development.
- Improved confidence in debugging backend–database integration.

This phase helped bridge the gap between design and real data execution.


### Authentication Security – Key Learnings

- Password hashing must occur at schema level, not controller level
- bcrypt with salt rounds = industry standard
- Never expose password comparison logic outside model


### JWT Authentication Learnings

- JWT is signed, not encrypted
- Tokens must be short-lived
- Authentication logic must be isolated from controllers


### Registration API Learnings

- Authentication APIs must never return passwords
- JWT generation should occur immediately after user creation
- Proper HTTP status codes improve API clarity


## Authentication & Security Architecture (Phase 2)

The backend uses JWT-based stateless authentication.

### Flow
1. User registers or logs in
2. Backend validates credentials
3. JWT token is generated containing:
   - userId
   - role
4. Token is returned to the client
5. Client sends token in Authorization header for protected routes

### Why JWT?
- Stateless authentication
- Scales well for REST APIs
- Enables role-based access control
- Industry standard for MERN applications

Password security is handled at the schema level using bcrypt hashing.


## Authentication & Security Learnings

- Password hashing must be handled at the schema level
- Async Mongoose middleware must not use next()
- JWT is signed, not encrypted
- Environment variables must be loaded before app startup
- Authentication APIs should not reveal which credential failed
- JWT enables stateless, scalable backend authentication


### Login API Learnings

- Authentication should not reveal which credential failed
- JWT must be regenerated on every login
- Password comparison logic belongs in the model


## Phase 2 — Authentication Learnings

- Password hashing should be handled at the schema level
- Async Mongoose middleware must not use next()
- JWT is signed, not encrypted
- Environment variables must be loaded before app startup
- Authentication APIs should not reveal which credential failed
- Middleware is the correct place to enforce authorization
- Bearer token format is mandatory for protected routes
