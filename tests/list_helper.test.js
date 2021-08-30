const listHelper = require('../utils/list_helper');

const emptyBlogs = [];
const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
];

const blogs = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0,
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0,
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0,
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10,
    __v: 0,
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0,
    __v: 0,
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2,
    __v: 0,
  },
];

describe('dummy', () => {
  test('dummy returns one', () => {
    const blogs = [];

    const result = listHelper.dummy(blogs);
    expect(result).toBe(1);
  });
});

describe('total likes', () => {
  test('of empty list is zero', () => {
    expect(listHelper.totalLikes(emptyBlogs)).toBe(0);
  });

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog);

    expect(result).toBe(listWithOneBlog[0].likes);
  });

  test('of many blogs is calculated right', () => {
    const result = listHelper.totalLikes(blogs);

    expect(result).toBe(36);
  });
});

describe('favorite blog', () => {
  const favoriteBlogOfOne = {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    likes: 5,
  };

  const favoriteBlog = {
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    likes: 12,
  };

  const listWithSameLikes = [
    {
      _id: '4b422a851b54a676234d1acd',
      title: 'Super blog',
      author: 'Super man',
      url: 'https://superblog.com/',
      likes: 12,
      __v: 0,
    },
    {
      _id: '5a422a851b54a676234d17f7',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'https://reactpatterns.com/',
      likes: 12,
      __v: 0,
    },
  ];

  test('of empty list is null', () => {
    expect(listHelper.favoriteBlog(emptyBlogs)).toBe(null);
  });

  test('when list has only one blog equals that', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog);

    expect(result).toEqual(favoriteBlogOfOne);
  });

  test('of many blogs returns blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs);

    expect(result).toEqual(favoriteBlog);
  });

  test('of two blogs with same number of likes is last article in list', () => {
    const result = listHelper.favoriteBlog(listWithSameLikes);

    expect(result).toEqual(favoriteBlog);
  });
});

describe('most blogs', () => {
  const oneBlogAuthor = {
    author: 'Edsger W. Dijkstra',
    blogs: 1,
  };

  const mostProlificAuthor = {
    author: 'Robert C. Martin',
    blogs: 3,
  };

  test('of empty blog list is null', () => {
    const result = listHelper.mostBlogs(emptyBlogs);

    expect(result).toEqual(null);
  });

  test('when list only has one blog equals that author with blogs set to 1', () => {
    const result = listHelper.mostBlogs(listWithOneBlog);

    expect(result).toEqual(oneBlogAuthor);
  });

  test('returns most prolific author', () => {
    const result = listHelper.mostBlogs(blogs);

    expect(result).toEqual(mostProlificAuthor);
  });
});

describe('most likes', () => {
  const oneBlogAuthor = {
    author: 'Edsger W. Dijkstra',
    likes: 5,
  };

  const mostFamousAuthor = {
    author: 'Edsger W. Dijkstra',
    likes: 17,
  };

  test('of empty blog list is null', () => {
    const result = listHelper.mostLikes(emptyBlogs);

    expect(result).toEqual(null);
  });

  test('when list only has one blog equals that author with blogs set to 1', () => {
    const result = listHelper.mostLikes(listWithOneBlog);

    expect(result).toEqual(oneBlogAuthor);
  });

  test('returns most famous author', () => {
    const result = listHelper.mostLikes(blogs);

    expect(result).toEqual(mostFamousAuthor);
  });
});
