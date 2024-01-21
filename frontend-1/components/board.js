'use client'
import React, { useEffect, useState } from 'react';
import Profiles from './profiles';
import { getLeaderboards } from './database';

export default function Board() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading status
  
  useEffect(() => {
    (async () => {
      const data1 = await getLeaderboards();
      setData(data1);
      setLoading(false); // Set loading to false once data is fetched
    })(); // Immediately invoke the async function
  }, []);

  const [period, setPeriod] = useState(0);

  const handleClick = (e) => {
    setPeriod(e.target.dataset.id);
  }

  if (loading) {
    return <div>Loading...</div>; // Render loading state
  }

  return (
    <div className="board">
      <h1 className='leaderboard'>Leaderboard</h1>
      <button style={{ marginTop: '2.5em', fontWeight: '500' }} className='mt-10 text-3xl font-extrabold leading-tight' disabled data-id=''>Leaderboard</button>

      <Profiles Leaderboard={[...data].reverse()}></Profiles>
    </div>
  )
}
