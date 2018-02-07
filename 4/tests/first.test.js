const listHelper = require('../utils/list_helper')

test('dummy is called', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})


describe('total likes', () => {
  const listWithOneBlog = [
{
"_id": "5a74d63f639c943b14e9da25",
"title": "Harry Portter",
"author": "Geijo",
"url": "google.com",
"likes": 4,
"__v": 0
},
{
"_id": "5a7adbe9e65bc32ff8ffb940",
"title": "Testikamaa",
"author": "Jokujambba",
"url": "test.com",
"likes": 2,
"__v": 0
}
]

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(6)
  })
})

describe('Most likes', () => {
  const listWithOneBlog = [
    {
    "_id": "5a74d63f639c943b14e9da25",
    "title": "Harry Portter",
    "author": "Geijo",
    "url": "google.com",
    "likes": 4,
    "__v": 0
    },
    {
    "_id": "5a7adbe9e65bc32ff8ffb940",
    "title": "Testikamaa",
    "author": "Jokujambba",
    "url": "test.com",
    "likes": 2,
    "__v": 0
    }
    ]

  test('Blog with most likes is:', () => {
    const result = listHelper.favoriteBlog(listWithOneBlog)
    console.log(result);
    expect(result).toEqual(listWithOneBlog[0])
  })
})
