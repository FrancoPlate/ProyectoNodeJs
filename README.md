# Proyecto Final de NodeJs

## 🐶 Descripción

Backend para una tienda de mascotas con funcionalidades CRUD básicas:

* Obtener todos los productos
* Buscar un producto por **ID**
* Agregar un producto
* Eliminar un producto

## 🛠 Tecnologías utilizadas

* **Node.js**
* **Express.js**
* **Firebase / Firestore**

## 🚀 Endpoints disponibles

> Actualmente configurados en **localhost**, pero se desplegarán en un dominio de **Vercel**.

### 📌 Autentificar el usuario

```
GET /auth/login
```

## 📝 Estructura de autentificar el usuario

Para autentificar el usuario, enviá un JSON con la siguiente estructura:

```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### 📌 Obtener todos los productos

```
GET /api/products
```

### 📌 Obtener un producto por ID

```
GET /api/products/:id
```

### 📌 Crear un producto

```
POST /api/products/create
```

## 📝 Ejemplo de estructura de un producto

Para crear un nuevo producto, enviá un JSON con la siguiente estructura:

```json
{
  "categoria": "Collar",
  "descripcion": "un buen collar anti-pulgas",
  "nombre": "Collar de perro anti-pulgas",
  "precio": 2500,
  "stock": 5
}
```

### 📌 Eliminar un producto por ID

```
DELETE /api/products/:id
```

## 📂 Estructura básica del proyecto 

```
ProyectoNodeJs/
├──src/
    ├── controllers/
    ├── services/
    ├── data/
    ├── models/
    ├── routes/
    ├── index.js
    └── package.json
```

## 🧪 Ejecución del proyecto

Para instalar dependencias:

```
npm install body-parse cors dotenv express firebase jsonwebtoken
```

Para ejecutar en desarrollo:

```
npm start
```

## ✨ Autor

Proyecto realizado por Franco Plate Paz.
