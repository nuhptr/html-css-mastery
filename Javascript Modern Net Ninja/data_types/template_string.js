// TODO: Template String
let title = "Best read in 2021";
let author = "Mario";
let likes = 30;

// TODO: Conatenation way
let result =
  "the blog called " + title + " by " + author + " has " + likes + " likes ";
console.log(result); // the blog called Best read in 2021 by Mario has 30 likes

// TODO: Template String way
let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);

// TODO: Creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>this blog has ${likes} likes</span>
`;
console.log(html);
