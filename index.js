require('dotenv').config()
import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const article = await Blog.create({
  title: "First Post!",
  slug: "first-post",
  published: true,
  content: "This is the first post added.",
  tags: ['featured', 'announcement']
})

article.title = "Best post"
await article.save();

console.log(article);