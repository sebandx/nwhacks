export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "put name here",
  description:
    "Beautifully designed components built with Radix UI and bruh CSS.",
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
    }
  ],
  links: {
    meeting: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
}
