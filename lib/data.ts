export const navigationLinks = [
  { index: "01.", href: "#about", label: "About" },
  { index: "02.", href: "#projects", label: "Projects" },
  { index: "03.", href: "#contact", label: "Contact" },
];

export const tagColors: { [key: string]: string } = {
  React: "bg-blue-500 text-white",
  Vite: "bg-purple-500 text-white",
  API: "bg-green-500 text-white",
};


export const projects = [
  {
    title: "Blog Website",
    image: "/Blog.png",
    description:
      "A website displaying Blogs related to my Software Development journey created from my CMS site",
    tags: ["React", "Vite", "API"],
    links: {
      live: "https://blog-client-kappa-seven.vercel.app/",
      repo: "https://github.com/JamieYau/blog-client",
    },
  },
];
