'use client';

import { siteConfig } from "@/config/site";

export async function getLeaderboards() {
    const response = await fetch(`${siteConfig.backend1}/leaderboards`);
    return response.json();
}

export const Leaderboard = [
    {
        name: "Shawn Hanna",
        location: "India",
        score : 1550,
        dt: "2022-02-10"
    },
    {
        name: "Fidel Hand",
        location: "USA",
        score : 9999,
        dt: "2021-01-01"
    },
    {
        name: "Bessie Hickle",
        location: "Chaina",
        score : 350,
        dt: "2021-08-17"
    },
    {
        name: "Adella Wunsch",
        location: "Japan",
        score : 2100,
        dt: "2021-10-23"
    },
    {
        name: "Clair O'Connell",
        location: "London",
        score : 1250,
        dt: "2022-01-22"
    },
    {
        name: "Kameron Prosacco",
        location: "Canada",
        score : 5250,
        dt: "2022-01-21"
    }
]
