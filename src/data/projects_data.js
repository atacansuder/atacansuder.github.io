const projects = [
  {
    title: "Research Paper Library (Bachelor thesis - grade: 1,5)",
    technologies: ["React", "Django"],
    description:
      "Prof. Matthew Smith's team from the University of Bonn wanted to develop a library where people can store and browse academic research data from cybersecurity related papers. The goal was to create a platform that is kind of similar to Google Scholar, but more specialized on cybersecurity and with more specific data.\nI have started with analyzing 40 research papers, finding what information they have in common and developed an appropriate database model. Afterwards, a Django backend was developed by Prof. Smith's team, which allowed users to enter data. However, Django's own admin interface is not very user friendly and intiutive to use, especially for complex data.\nThus, my primary goal was to develop a frontend to help users enter and browse data more efficiently. I have created an interface using React with Material UI components and extended the Django backend with Django REST framework to allow data exchange. The interface ended up saving around 30% of time compared to entering data in Django's admin interface.",
    links: [],
  },
  {
    title: "Sklearn and Scikit Parser",
    technologies: ["Python", "git", "Jira"],
    description:
      "For the software development group project at the university, I worked with 7 other students to develop a Python software for Sklearn and Scikit libraries that detects errors and redundancies in user code that might not be detected by compilers. We have worked with real customers from the academic world. Agile methodologies were also used during development, helping us understand the management and teamwork aspect of software development.",
    links: [
      {
        label: "Project's GitHub repository",
        link: "https://github.com/AST-2020/python-package-parser",
      },
    ],
  },
  {
    title: "forza-garage",
    technologies: ["Next.js", "Google Firebase", "Python"],
    description:
      "Forza Horizon is a racing video game series where users can modify and tune their own cars to race against other players. The modification and tuning is quite complex with many parameters, which pushes a lot of players to using tunes from other players. I have created this website to help tuners share their creations and players to browse in an environment better than Forza Horizon's own tune browser. The website's goal is to use more filters and data to help players find a tune that they exactly need and to allow them to see more information before deciding if the tune would indeed suit their needs.\nThe website is discontinued after low popularity. But at least it was a good development experience for me.",
    links: [
      {
        label: "forza-garage",
        link: "https://www.forzagarage.net",
      },
    ],
  },
  {
    title: "Forsen Soundboard",
    technologies: ["React Native"],
    description:
      'A simple soundboard app I developed with a friend to learn React Native and app development. The app contains hundreds of sounds and voice lines from the popular Twitch streamer "forsen".',
    links: [
      {
        label: "Forsen Soundboard on Google Playstore",
        link: "https://play.google.com/store/apps/details?id=com.kivimasoftware.forsensoundboard&hl=en_US&gl=US",
      },
    ],
  },
  {
    title: "湾岸ミッドナイト (Wangan Midnight) Unity",
    technologies: ["Unity", "C#", "Blender", "Python"],
    description:
      "A remake of the famous Japanese arcade racing game Wangan Midnight Maximum Tune for PC using the Unity game engine. I have started this project around the summer of 2020 to learn about game development. The game scripts were written in C# and Blender was used with Python for batch process of 3D models and textures. The project is currently on hiatus.\nYou can watch gameplay videos on my YouTube channel:",
    links: [
      {
        label: "My Youtube channel",
        link: "https://www.youtube.com/channel/UCy74Fm4jCGcMRScjY_WODPg",
      },
    ],
  },
];

export default projects;
