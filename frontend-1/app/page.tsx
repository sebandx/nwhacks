'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-5 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <p className="max-w-[700px] text-lg text-muted-foreground">
          Sun Tzu once said... 
        </p>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Excercise? More like
          Extra Fries!
      </h1>
        <Separator />
        <p className="max-w-[700px] text-lg text-muted-foreground">
          WiiGym is an application. It is one of the applications of all time.
        </p> 
      </div>
      <div className="">
        <Link
        href={siteConfig.links.meeting}
        className={buttonVariants()}>
          Click here to get the meeting link!
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="https://github.com"
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
