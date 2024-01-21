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
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
