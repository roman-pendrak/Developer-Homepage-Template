// General Information
const fullName = "First Last";
const location1 = "Location 1";
const location2 = "Location 2";
const jobTitle = "Job Title";
const greeting = "Greeting (Hello!)";
const aboutMe = [
  "Lorem ipsum dolor sit amet. Sed sunt nulla aut reprehenderit eveniet quo corrupti internos cum unde voluptatum sit iste architecto! Et suscipit aliquid et nemo Quis aut nemo nemo est alias laboriosam ad unde suscipit. In facilis internos aut pariatur velit et enim quisquam.",
  "Et aliquam culpa ut aspernatur labore aut enim quas ea laboriosam esse qui culpa consequatur! Eos accusamus officiis et recusandae alias ut esse commodi hic fuga distinctio. Qui porro omnis et quae sint sed praesentium voluptatum? Et nobis inventore non totam itaque qui Quis officiis non voluptatem quibusdam At velit ipsam aut molestiae voluptatibus.",
  "Est eligendi temporibus qui quia consequatur aut quibusdam nesciunt et temporibus pariatur est quas veritatis. Sed voluptatem harum ea accusamus omnis ut voluptatem rerum ut voluptatem provident qui harum dolor et quas placeat. Sit dolores provident et provident nisi ea voluptatem voluptatem et eaque laudantium ea ratione accusantium id commodi internos.",
];
export type SocialMediaLink = {
  enabled: boolean;
  name: string;
  link: string;
};
const socialMedia: SocialMediaLink[] = [
  {
    enabled: true,
    name: "GitHub",
    link: "https://github.com",
  },
  {
    enabled: true,
    name: "LinkedIn",
    link: "https://www.linkedin.com",
  },
  {
    enabled: true,
    name: "YouTube",
    link: "https://youtube.com",
  },
  {
    enabled: true,
    name: "Twitter",
    link: "https://twitter.com",
  },
  {
    enabled: true,
    name: "Twitch",
    link: "https://facebook.com",
  },
  {
    enabled: true,
    name: "Facebook",
    link: "https://facebook.com",
  },
  {
    enabled: true,
    name: "Instagram",
    link: "https://www.instagram.com",
  },
  {
    enabled: true,
    name: "Twitter",
    link: "https://www.twitter.com",
  },
];

interface Project {
  imageSource: string;
  title: string;
  description: string;
  buttonTitle: string;
  buttonUrl: string;
}

// List your project details here
const projectList: Project[] = [
  {
    imageSource: "./images/homepage.png",
    title: "Project Title 1",
    description:
      "Lorem ipsum dolor sit amet. Non voluptas obcaecati id cumque iusto id delectus voluptatibus et voluptatem earum non ipsa consequuntur. Et illum quia aut reiciendis voluptas ea minima assumenda qui mollitia culpa. Ut nesciunt aliquid quo possimus eligendi ut quidem ratione est laudantium quos sit voluptates quia hic impedit odit. Sed voluptatem harum ut consequuntur magnam ea enim ipsa sed officiis autem.",
    buttonTitle: "website url",
    buttonUrl: "website url",
  },
  {
    imageSource: "./images/homepage.png",
    title: "Project Title 2",
    description:
      "Lorem ipsum dolor sit amet. Non voluptas obcaecati id cumque iusto id delectus voluptatibus et voluptatem earum non ipsa consequuntur. Et illum quia aut reiciendis voluptas ea minima assumenda qui mollitia culpa. Ut nesciunt aliquid quo possimus eligendi ut quidem ratione est laudantium quos sit voluptates quia hic impedit odit. Sed voluptatem harum ut consequuntur magnam ea enim ipsa sed officiis autem.",
    buttonTitle: "website url",
    buttonUrl: "website url",
  },
  {
    imageSource: "./images/homepage.png",
    title: "Project Title 3",
    description:
      "Lorem ipsum dolor sit amet. Non voluptas obcaecati id cumque iusto id delectus voluptatibus et voluptatem earum non ipsa consequuntur. Et illum quia aut reiciendis voluptas ea minima assumenda qui mollitia culpa. Ut nesciunt aliquid quo possimus eligendi ut quidem ratione est laudantium quos sit voluptates quia hic impedit odit. Sed voluptatem harum ut consequuntur magnam ea enim ipsa sed officiis autem.",
    buttonTitle: "website url",
    buttonUrl: "website url",
  },
];

// List your skills here. Each array will represent a category.
// The first entry in the array will serve as the category title
const skills: Array<string[]> = [
  [
    "Category 1", // Title
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
    "Skill 7",
    "Skill 8",
  ],
  [
    "Category 2", // Title
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
    "Skill 7",
    "Skill 8",
  ],
  [
    "Category 3", // Title
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
    "Skill 7",
    "Skill 8",
  ],
];

// Email JS Account Info https://www.emailjs.com/
const serviceKey = "";
const templateKey = "";
const publicKey = "";

export {
  projectList,
  skills,
  fullName,
  location1,
  location2,
  jobTitle,
  greeting,
  aboutMe,
  socialMedia,
  serviceKey,
  templateKey,
  publicKey,
};
