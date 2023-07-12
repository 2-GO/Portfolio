/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "GO",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "2-GO",
    type: "website",
    url: "https://2-go.github.io/Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Gabriel Olivares",
  logo_name: "2-GO",
  nickname: "Frontend Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/142ixuv4rZQWiMUuuH3pFTtG7dNvl3TTh/view",
  portfolio_repository: "https://github.com/2-GO/Portfolio",
  githubProfile: "https://github.com/2-GO",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/2-GO",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/2-go/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:7gabe.o@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Frontend/Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML5, CSS3, JS & React",
        "⚡ Experienced in developing responsive and user-friendly websites, ensuring compatibility across different browsers and devices.",
        "⚡ Competent in using version control systems like Git, enabling collaborative and efficient code management",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/2-GO/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/domains/fp",
    },
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.freecodecamp.org/G-O",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University",
      subtitle: "B.S. in Financial Management",
      logo_path: "NU_logo-edit.png",
      alt_name: "NU",
      duration: "",
      descriptions: [
        "⚡ Gain theoretical and practical knowledge of corporate finance, including topics such as capital budgeting, cost of capital, and financial risk management.",
        "⚡ Understand the financial objectives of an organization and apply quantitative, qualitative, and problem-solving skills to achieve those objectives.",
        "⚡ Develop hands-on skills in data analysis to provide informed advice to senior managers on maximizing profits.",
        "⚡ Explore the range of tax laws and regulations impacting businesses and incorporate them into financial planning.",
      ],
      website_link: "https://www.nu.edu/",
    },
    {
      title: "San Joaquin Valley College",
      subtitle: "A.S. in Business Administration",
      logo_path: "SJVC_color_logo-edit.png",
      alt_name: "SJVC",
      duration: "",
      descriptions: [
        "⚡ Gain a comprehensive understanding of various functional areas of business, including marketing, finance, management, and entrepreneurship.",
        "⚡ Acquire knowledge of basic accounting principles and financial management, enabling you to analyze and interpret financial statements.",
        "⚡ Understand the essentials of human resource management, including recruitment, training, and employee relations.",
        "⚡ Learn how to analyze market trends and conduct basic market research to inform business decisions.",
      ],
      website_link: "https://www.sjvc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Responsive Web Design",
      subtitle: "- Quincy Larson",
      logo_path: "FCC_logo_large.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/G-O/responsive-web-design",
      alt_name: "FreeCodeCamp",
      color_code: "#2A73CC",
    },
    {
      title: "JS Algorithms & Data Structures",
      subtitle: "- Quincy Larson",
      logo_path: "FCC_logo_large.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/G-O/javascript-algorithms-and-data-structures",
      alt_name: "FreeCodeCamp",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "Frontend Web Developer, I bring a wealth of expertise in HTML, CSS, and JavaScript to create visually appealing and responsive websites. Throughout my career, I have successfully utilized frontend frameworks like JS & React. I deliver aesthetically pleasing and intuitive user interfaces. My portfolio showcases successful projects that highlight my ability to consistently deliver high-quality frontend solutions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "JAG Specialist",
          company: "Learn4Life",
          company_url: "https://learn4life.org/",
          logo_path: "Learn4Life_Logo.png",
          duration: "June 2018 - Present",
          location: "San Bernardino, CA",
          description:
            "Analyze student data and barriers to identify and develop a pool of qualified students in need of intensive academic support such as tutoring, extended learning, mentoring, and counseling.  Provide supportive services to program participants for the 12-month follow-up period post-high school graduation to ensure successful transition to postsecondary education, employment and/or military",
          color: "#0879bf",
        },
        {
          title: "Tutor",
          company: "Learn4Life",
          company_url: "https://learn4life.org/",
          logo_path: "Learn4Life_Logo.png",
          duration: "October 2017 - June 2018",
          location: "San Bernardino, CA",
          description:
            "Provide personalized tutoring sessions to high school students in various subjects, tailoring teaching methods and strategies to meet individual needs. Assess students' strengths, weaknesses, and learning styles to develop customized lesson plans.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Info coming soon",
          company: "Github",
          company_url: "https://github.com/2-GO",
          logo_path: "github_logo.png",
          duration: "",
          location: "",
          description: "",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "logowhitenobg.svg",
    description:
      "I am available on the following social media, I will try my best to get back to you within 24hrs. I can help you with Frontend/Web Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Coming soon.",
    link: " ",
    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Address",
    subtitle: "Rancho Cucamonga, CA",
    city: "Rancho Cucamonga",
    country: "US",
    state: "CA",
    postalCode: "12379",
    streetAddress: "N Mainstreet",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/The+Cheesecake+Factory/@34.1114165,-117.5342642,16.5z/data=!4m15!1m8!3m7!1s0x80c35bf938112791:0xad6a7aad82f2f34b!2sRancho+Cucamonga,+CA!3b1!8m2!3d34.1063989!4d-117.5931084!16zL20vMHI0bnc!3m5!1s0x80c34a1b0c24ecd3:0xafcb3f062de5cc41!8m2!3d34.1118985!4d-117.5353642!16s%2Fg%2F1tjcpqj5?entry=ttu",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
