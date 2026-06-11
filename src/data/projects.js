// ============================================================
//  PROJECTS DATA
//  Add a new project by copying one object and editing it.
//  - image: put a cover in /public/images/projects/ and link it here
//  - tech : drives the technology filter buttons automatically
// ============================================================

export const projects = [
  {
    id: 4,
    title: "QuickBite",
    description:
      "A fast pizza-ordering app — browse a live menu, build your cart with quantity controls, place an order with geolocation-assisted address entry, and track it by ID (with the option to mark it priority). Built with Redux Toolkit for cart/user state and React Router's data loaders & actions for fetching and mutations.",
    image: "/images/projects/quickbite.svg",
    github: "https://github.com/samsonharry23/quickbite",
    demo: "https://samsonharry23.github.io/quickbite/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 3,
    title: "TravelWorld",
    description:
      "A travel-tracking app that logs the cities and countries you've visited on an interactive world map. Click the map to add a place (auto-detected via reverse geocoding), browse trips by city or country, and use geolocation to find yourself. Built with React Router (nested + protected routes) and global state via Context API + useReducer.",
    image: "/images/projects/travelworld.svg",
    github: "https://github.com/samsonharry23/travelworld",
    demo: "https://samsonharry23.github.io/travelworld/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    title: "Movie Rating",
    description:
      "A React app to search movies, view details, and rate them — powered by the OMDB API. Features live search, an interactive star-rating component, a personal watched-list with summary stats, keyboard shortcuts, and localStorage persistence. Built with custom hooks (useMovies, useLocalStorageState, useKey).",
    image: "/images/projects/movie-rating.svg",
    github: "https://github.com/samsonharry23/movie-rating",
    demo: "https://samsonharry23.github.io/movie-rating/",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    id: 1,
    title: "Pig Game",
    description:
      "A classic two-player dice game built with vanilla JavaScript. Players take turns rolling — rack up points, but roll a 1 and you lose your turn's score. Hold to bank your points and race to win. Features turn switching, live score tracking, and a clean reset.",
    image: "/images/projects/pig-game.png",
    github: "https://github.com/samsonharry23/pig-game",
    demo: "https://samsonharry23.github.io/pig-game/",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];
