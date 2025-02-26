import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "To Vinh",
  lastName: "Tien",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Mobile Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally share about software development, software architecture, and share insights on
      building good applications.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Terry-UIT",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/se-terry/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/publ.terry/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:se.terry.2004.career@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software-Engineer</>,
  subline: (
    <>
      I'm To Vinh "Terry" Tien, a software engineering student at <InlineCode>UIT - University of Information Technology</InlineCode>, where I learn about programming skills.
      I'm seeking for a internship opportunity as a Software Developer/ Mobile Developer.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/terry-dev",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tien is a Vietnamese software engineer with a passion for transforming complex 
        challenges into simple, elegant solutions. His work focuses on mobile app 
        development, user-friendly interfaces, and optimizing performance to enhance the 
        mobile experience.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Looking for the first job",
        timeframe: "Present",
        role: "Software Developer/ Mobile Developer",
        achievements: [
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "",
          //   alt: "",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Information Technology (UIT) - Vietnam National University Ho Chi Minh City",
        description: <>Persuing Software Engineering Bachelor's Degree from Aug 2022 - Jun 2026.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Proficient in using Figma for UI/UX design and prototyping.</>,
        // optional: leave the array empty if you don't want to display images
        // images: [
        //   {
        //     src: "",
        //     alt: "",
        //     width: 16,
        //     height: 9,
        //   },
        // ],
      },
      {
        title: "Flutter - Dart",
        description: <>Experienced in building cross-platform mobile applications using Flutter and Dart.</>,
      },
      {
        title: "Firebase",
        description: <>Skilled in implementing Firebase services for backend solutions, including authentication, real-time database, and cloud functions.</>,
      },
      {
        title: "Kotlin",
        description: <>Proficient in native Android development using Kotlin and Android SDK.</>,
      },
      {
        title: "HTML, CSS & JavaScript",
        description: <>Strong foundation in web development fundamentals and creating responsive user interfaces.</>,
      },
      {
        title: "PHP & Laravel",
        description: <>Experience in building web applications using PHP and the Laravel framework.</>,
      },
      {
        title: "C# & ASP.NET",
        description: <>Competent in developing applications using C# and ASP.NET framework.</>,
      },
      {
        title: "MongoDB",
        description: <>Familiar with NoSQL database design and implementation using MongoDB.</>,
      },
      {
        title: "Java & Spring Boot",
        description: <>Proficient in Java development and building REST APIs using Spring Boot framework.</>,
      },
      {
        title: "C++",
        description: <>Strong understanding of object-oriented programming concepts using C++.</>,
      },
    ],
  },
};

const blog = {
  // label: "Blog",
  // title: "Writing about design and tech...",
  // description: `Read what ${person.name} has been up to recently`,
  // // Create new blog posts by adding a new .mdx file to app/blog/posts
  // // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  // label: "Gallery",
  // title: "My photo gallery",
  // description: `A photo collection by ${person.name}`,
  // // Images from https://pexels.com
  // images: [
  //   {
  //     src: "/images/gallery/img-01.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-02.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-03.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-04.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-05.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-06.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-07.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-08.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-09.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-10.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-11.jpg",
  //     alt: "image",
  //     orientation: "vertical",
  //   },
  //   {
  //     src: "/images/gallery/img-12.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-13.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  //   {
  //     src: "/images/gallery/img-14.jpg",
  //     alt: "image",
  //     orientation: "horizontal",
  //   },
  // ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
