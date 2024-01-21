"use client"

import React from 'react';
import "@/styles/globals.css"
import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"
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
import { Label } from "@/components/ui/label"
import { useState } from 'react';
import { navigate } from "./redirect"

export default function LoginAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async (e) => {
    e.target.disabled = true;
    const response = await fetch(`${siteConfig.backend}/signin`, {
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
            <CardTitle className="text-2xl">Sign in</CardTitle>
            <CardDescription>
              Enter your email and password below to sign into your account
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
            <Button className="w-full" onClick={ e => login(e) }>Sign in</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
