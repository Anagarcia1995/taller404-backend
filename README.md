# taller404-backend
20/20/2025
Hoy hemos creado el backend básico de la ticketera Taller404:

Servidor Express: configurado y corriendo en http://localhost:3000.

Conexión a MongoDB: usando Mongoose, con la URI configurada en .env.

Modelo de Eventos:
Campos: name (nombre de la fiesta), date (día/mes), djs, price, createdAt.

CRUD completo para eventos:
POST /events
GET /events
PUT /events/:id
DELETE /events/:id

Pruebas funcionales: usando Thunder Client, todas las operaciones funcionan correctamente.

////////////// ENGLISH //////////////

Today we built the basic backend for the Taller404 ticketing system:

Express server: configured and running at http://localhost:3000.

MongoDB connection: using Mongoose, URI configured in .env.

Event model:
Fields: name (party name), date (day/month), djs, price, createdAt.

Complete CRUD for events:
POST /events
GET /events
PUT /events/:id
DELETE /events/:id

Functional testing: tested in Thunder Client, all operations work correctly.

--------------------------------------------------------------------------------

21/10/2025
Hoy hemos completado la autenticación de administradores y mejorado el backend de Taller404:

Modelo de Admin: campos username, email, password, con encriptación de contraseña usando bcrypt.

Controlador de Admin: registro y login con generación de token JWT.

Middleware de protección: protect verifica el token JWT para proteger rutas de creación, edición y eliminación de eventos.

Rutas de Admin y Eventos:

Eventos: creación, edición y eliminación protegidas por token de admin.

Se añadió endpoint para ver un solo evento (GET /events/:id).

Pruebas funcionales: creación, edición, eliminación y visualización de eventos con protección de admin funcionando correctamente.

////////////// ENGLISH //////////////

Today we completed admin authentication and enhanced the backend for Taller404:

Admin model: fields username, email, password, with bcrypt password hashing.

Admin controller: register and login with JWT token generation.

Protect middleware: protect checks JWT token to secure event creation, update, and delete routes.

Admin and Event routes:

Events: creation, update, and deletion are protected for admin only.

Added endpoint to view a single event (GET /events/:id).

Functional testing: creation, editing, deletion, and event viewing with admin protection are fully working.

--------------------------------------------------------------------------------

