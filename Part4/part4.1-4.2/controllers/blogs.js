const blogsRouter = require('express').Router();

const BlogList = require('../models/blogs');

blogsRouter.get('/', (request, response) => {
  BlogList.find({}).then(blogs => {
    response.json(blogs);
  });
});

blogsRouter.post('/', (request, response) => {
  const body = request.body;
  const blog = new BlogList(body);
  blog.save().then(result => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
