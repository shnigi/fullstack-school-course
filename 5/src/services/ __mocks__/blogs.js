let token = null

const blogs = [
{
"id": "5a85c88bcd0bd10c4084aca7",
"title": "jokujuttu",
"author": "kekekek",
"url": "helloworld.com",
"likes": 5,
"user": "5a7cc158b637673820e40361"
},
{
"id": "5a86d98c4856e825a02ba0d8",
"title": "testset",
"author": "testse",
"url": "testse",
"likes": 7,
"user": "5a7cc158b637673820e40361"
},
{
"id": "5a86e8f4aa90b62584e61f19",
"title": "shniginkirja",
"author": "shnigi",
"url": "shnigi.com",
"likes": 500,
"user": "5a86e8b4aa90b62584e61f18"
}
]

const getAll = () => {
  console.log('PASKAAAAAAAAAAAAAAAAAAAAAAAA');
  return Promise.resolve(blogs)
}

export default { getAll, blogs }
