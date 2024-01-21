export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "WiiGym",
  description: "WiiGym offers an easy way to workout with friends.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Log In",
      href: "/login",
    },
    {
      title: "Sign Up",
      href: "/signup",
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
    },
    {
      title: "Stats",
      href: "/stats",
    }
  ],
  links: {
    meeting: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  backend: "http://localhost:8080",
  app: "https://c08d-142-103-203-209.ngrok-free.app/"
}
