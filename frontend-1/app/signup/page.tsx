"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { navigate } from "./redirect"
import { siteConfig } from "@/config/site"

export default function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const createAccount = async (e) => {
    e.target.disabled = true;
    const response = await fetch(`${siteConfig.backend}/signup`, {
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
      method: 'POST'
    });
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token);
      navigate('/');
    } else {
      e.target.disabled = false;
    }
  };
  return (
    <div className="items-start justify-center gap-6 rounded-lg p-8 md:grid">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>
              Enter your email below to create your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {/* <div className="grid grid-cols-2 gap-6">
              <Button variant="outline">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline">
                <Icons.google className="mr-2 h-4 w-4" />
                Google
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div> */}
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input id="email" type="text" placeholder="Username" onInput={ e => setUsername(e.target.value) } />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" onInput={ e => setPassword(e.target.value) } />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={ e => createAccount(e) }>Create account</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
