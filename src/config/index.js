module.exports = {
  author: "@konstantinmuenster",
  siteTitle: "Gatsby Starter Portfolio Minimal",
  siteShortTitle: "SEDA GULKESEN.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "A modern one-page portfolio with a clean yet expressive design.",
  siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
  siteLanguage: "en_US",
  siteIcon: "src/content/favicon.png", // Relative to gatsby-config file

  splashScreen: false, // Set this to true if you want to use the splash screen

  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}

  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/seda-gulkesen/",
    },
    // {
    //   name: "Medium",
    //   url: "https://medium.com/@konstantin.muenster",
    // },
    {
      name: "Github",
      url: "https://github.com/sedagulkesen",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/sedagulkesen",
    },
  ],

  navLinks: {
    menu: [
      {
        name: "About Me",
        url: "/#about",
      },
      {
        name: "Projects",
        url: "/#projects",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },

  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
