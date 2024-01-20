export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and bruh CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },  
    {
      title: "Login",
      href:"/",
    },
    {
      title: "Sign Up",
      href:"/", 
    }
    ,
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
