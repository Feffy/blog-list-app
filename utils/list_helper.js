const dummy = (blogs) => {
  return blogs.length ? 1 : 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((likes, blog) => likes + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) return null;

  return blogs
    .map(({ title, author, likes }) => ({
      title,
      author,
      likes,
    }))
    .reduce((previous, current) =>
      previous.likes > current.likes ? previous : current
    );
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) return null;

  return blogs
    .map(({ author }) => ({
      author,
      blogs: blogs.filter((item) => item.author === author).length,
    }))
    .reduce((previous, current) =>
      previous.blogs > current.blogs ? previous : current
    );
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) return null;

  return blogs
    .reduce((previous, current) => {
      const authorPosition = previous.findIndex(
        (item) => item.author === current.author
      );

      if (authorPosition !== -1) {
        previous[authorPosition].likes += current.likes;
        return previous;
      }

      return previous.concat(...previous, {
        author: current.author,
        likes: current.likes,
      });
    }, [])
    .reduce((previous, current) =>
      previous.likes > current.likes ? previous : current
    );
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
