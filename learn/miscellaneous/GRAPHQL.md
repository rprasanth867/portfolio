
### GraphQL

> Reference  
> https://www.geeksforgeeks.org/node-js/how-to-build-a-graphql-server-with-nodejs-and-express/

- the open-supply question-based language
- used for querying the data
- a server that exposes a single endpoint (usually `/graphql`)
- handle precise data queries, mutations, and subscriptions


### Implementation in Node.js/Express.js


**Simple GraphQL**

```sh
npm install express graphql-http graphql
```

```javascript
import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';

// 1. Define schema
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    user(id: ID!): User
  }
`);

// 2. Define root resolvers
const rootValue = {
  user: ({ id }) => {
    return { id, name: "Sample User" };
  }
};

const app = express();

// 3. Apply the modern handler middleware to your route
app.all('/graphql', createHandler({ schema, rootValue }));

app.listen(4000, () => {
  console.log('🚀 GraphQL server running at http://localhost:4000/graphql');
});
```


**GraphQL with MySQL, MongoDB**

```sh
npm install express graphql graphql-http mongoose sequelize mysql2
```

```javascript
// database.js

import mongoose from 'mongoose';
import { Sequelize, DataTypes } from 'sequelize';

// 1. Connect to MongoDB via Mongoose
await mongoose.connect('mongodb://localhost:27017/graphql_multi_db');
console.log('🍃 Connected to MongoDB');

const mongoUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});
export const MongoUser = mongoose.model('User', mongoUserSchema);


// 2. Connect to MySQL via Sequelize
export const sequelize = new Sequelize('graphql_multi_db', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

export const MySQLPost = sequelize.define('Post', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  authorId: { type: DataTypes.STRING, allowNull: false }, // References MongoDB User ID
});

// Sync MySQL tables
await sequelize.sync();
console.log('🐬 Connected and synced MySQL');
```

```javascript
// server.js

import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { buildSchema } from 'graphql';
import { MongoUser, MySQLPost } from './databases.js';

// 1. Unified Schema Definition
const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
  }

  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    createPost(title: String!, content: String!, authorId: ID!): Post
  }
`);

// 2. Dynamic Field Mapping Resolvers
class UserResolver {
  constructor(mongoDoc) {
    this.id = mongoDoc._id.toString();
    this.name = mongoDoc.name;
    this.email = mongoDoc.email;
  }
  // Cross-DB Query: Fetch this user's posts from MySQL
  async posts() {
    return await MySQLPost.findAll({ where: { authorId: this.id } });
  }
}

class PostResolver {
  constructor(sqlDoc) {
    this.id = sqlDoc.id;
    this.title = sqlDoc.title;
    this.content = sqlDoc.content;
    this.authorId = sqlDoc.authorId;
  }
  // Cross-DB Query: Fetch this post's author from MongoDB
  async author() {
    const user = await MongoUser.findById(this.authorId);
    return user ? new UserResolver(user) : null;
  }
}

// 3. Root Entry Point Resolvers
const rootValue = {
  users: async () => {
    const users = await MongoUser.find();
    return users.map(u => new UserResolver(u));
  },
  posts: async () => {
    const posts = await MySQLPost.findAll();
    return posts.map(p => new PostResolver(p));
  },
  createUser: async ({ name, email }) => {
    const user = await MongoUser.create({ name, email });
    return new UserResolver(user);
  },
  createPost: async ({ title, content, authorId }) => {
    const post = await MySQLPost.create({ title, content, authorId });
    return new PostResolver(post);
  }
};

// 4. Initialize Express Application
const app = express();

app.all('/graphql', createHandler({ schema, rootValue }));

app.listen(4000, () => {
  console.log('🚀 Hybrid Server running at http://localhost:4000/graphql');
});
```