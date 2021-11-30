// TODO: Object Literals
const blogs = [
  {
    title: "why mac",
    likes: 50,
  },
  { title: "mermaite", likes: 50 },
];

let user = {
  name: "crystal",
  age: 30,
  email: "crystal@gmail.com",
  location: "berlin",
  blogs: ["why mas and chese rules", "10 things to make with marmite"],
  login: function () {
    console.log("the user logged in");
  },
  logout: function () {
    console.log("user logout");
  },
  logBlogs: function () {
    console.log("this user has written the following blog : ");
    this.blogs.forEach((blog) => {
      console.log(blog); // blogs in curly braces
    });
  },
};

user.logBlogs();
console.log(blogs); // blogs properties

console.log(user);
console.log(user.name); // crystal

// user.age = 35;
console.log(user.age); // 30
user["location"] = "germany";
console.log(user.location);
