'use client';

export async function getLeaderboards() {
    try {
        const response = await fetch('http://localhost:5555/User/sorted');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (e) {
        console.error("Failed to fetch leaderboards:", e);
        return []; // Return an empty array in case of an error
    }
}
