set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table "public"."todos" (
  "todoId"      serial, // this tells postgres that it needs to be a todoID for special keys.
  "task"        text           not null,
  "isCompleted" boolean        not null,
  "createdAt"   timestamptz(6) not null default now(),
  "updatedAt"   timestamptz(6) not null default now(),
  primary key ("todoId")
);

//we are starting from fresh when we run this script. This script looks in the file server.env it finds a thing call the script url database and that tells
us how to access the postgres server and our database folder. This is for the import file.
// it drops the schema before it wipes out the data base before it runs . Re runs schema. Import . sh is a s
