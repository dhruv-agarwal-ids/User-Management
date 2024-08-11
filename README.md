# User-Management

This project is a User Management System built with NestJS, GraphQL, and MongoDB. It allows you to perform CRUD (Create, Read, Update, Delete) operations on users, with fields such as `firstname`, `lastname`, `email`, `username`, and `password`.

Set up a NestJS

npm i -g @nestjs/cli

nest new user-management

cd user-management

 Install Packages

 npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express mongoose @nestjs/mongoose

Create 6 files in 'src' of the user-management project naming : 

app.module.ts

user.dto.ts

user.module.ts

user.resolver.ts

user.schema.ts

user.service.ts

user.type.ts

'app.module.ts' file is already present their when you created the nest project.

Just copy the content from my file and past them accordingly.

Run the Application

npm run start

Test the GraphQL API

Navigate to http://localhost:3000/graphql in your browser. You can test the following GraphQL queries and mutations:-

Create a User:

mutation {
  createUser(createUserInput: {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    password: "password123"
  }) {
    id
    firstname
    lastname
    email
    username
  }
}

Get All Users:

query {
  users {
    id
    firstname
    lastname
    email
    username
  }
}

Get a User by ID:

query {
  user(id: "USER_ID") {
    id
    firstname
    lastname
    email
    username
  }
}

Update a User:

mutation {
  updateUser(id: "USER_ID", updateUserInput: {
    firstname: "Jane"
  }) {
    id
    firstname
    lastname
    email
    username
  }
}

Delete a User:

mutation {
  removeUser(id: "USER_ID") {
    id
    firstname
    lastname
  }
}
