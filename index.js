import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://m3nt1ros0:AnTRNdNM8qTo4JMh@testcluster.rxv1zxu.mongodb.net/?retryWrites=true&w=majority");

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