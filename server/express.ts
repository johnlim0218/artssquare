import "reflect-metadata";
import express from "express";
import { Application } from 'express';
import { ApolloServer } from "apollo-server-express";
import { applyMiddleware } from "graphql-middleware";
import { buildSchemaSync, NonEmptyArray } from "type-graphql";

// const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
//   __dirname + "/models/**/*.resolver.{ts,js}",
// ];

// const schema = applyMiddleware(
//   buildSchemaSync({
//     resolvers,
//   })
// );

// const server = new ApolloServer({
//   schema,
// })

const expressApp: Application = express();
// server.applyMiddleware({ app: expressApp });
export default expressApp;