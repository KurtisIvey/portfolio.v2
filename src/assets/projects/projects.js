import bobaProjectImage from "./boba-project.jpg";
import membersOnlyImage from "./members-only.jpg";
import projectBlogClient from "./project-blog-client.jpg";
import projectBlogAdmin from "./project-blog-admin.jpg";

const projects = [
  {
    name: "Boba Project",
    id: 1111,
    url: "https://boba-project-ki.herokuapp.com/",
    githubUrl: "https://github.com/Kitsunebackfire/boba_project",
    description:
      "A server side Boba collection website that is able to categorize drinks based on temperature. In addition, images for said bobas are able to be uploaded via storage in my AWS S3 bucket and then the url is stored in MongoDB",
    techStack: "Javascript, Node.js, Express, MongoDB, AWS S3 ",
    image: bobaProjectImage,
  },
  {
    name: "Project Blog Client",
    id: 1112,
    url: "https://kitsunebackfire.github.io/project-blog-client/",
    githubUrl: "https://github.com/Kitsunebackfire/project-blog-client",
    description:
      "A React front end that allows users to register to comment and read blog posts. It is integrated with my node backend that is hosted on heroku. Due to heroku eco-plan not allowing me to set cookies, I ended up using local storage to store jwt tokens to verify users. Styling is done via Tailwind css.",
    techStack: "React, Javascript, Node.js, Express, MongoDB, Tailwind, Heroku",
    image: projectBlogClient,
  },
  {
    name: "Project Blog Admin",
    id: 1113,
    url: "https://kitsunebackfire.github.io/project-blog-admin/",
    githubUrl: "https://github.com/Kitsunebackfire/project-blog-admin",
    description:
      "A React front end that allows admin to create/edit/delete blog posts that are stored on MongoDB. It is integrated with my node backend that is hosted on Heroku. Due to heroku eco-plan not allowing me to set cookies, I ended up using local storage to store jwt tokens to verify admin status that I manually set in MongoDB. Styling is done via Tailwind css.",
    techStack: "React, Javascript, Node.js, Express, MongoDB, Tailwind, Heroku",

    image: projectBlogAdmin,
  },
  {
    name: "Members Only Project",
    id: 1114,
    url: "https://members-only-ki.herokuapp.com/",
    githubUrl: "https://github.com/Kitsunebackfire/members-only",
    description:
      "A server side Node.js project that utilizes MongoDB for the database and webpages built with ejs. It uses passport local for authentication and is hosted on Heroku. Users with admin status are able to delete posts.",
    image: membersOnlyImage,
    techStack: "Javascript, Node.js, Express, MongoDB, Heroku",
  },
];

export default projects;
