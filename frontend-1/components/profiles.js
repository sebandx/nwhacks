import React from 'react';

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Leaderboard.map((value, index) => (
        <div className="flex" key={index}>
          <div className="item">
            <img src={`https://api.dicebear.com/7.x/fun-emoji/svg?seed=${value.username}`} alt={`${value.username}'s avatar`} />

            <div className="info">
              <h3 className='name text-dark'>{value.username}</h3>
            </div>
          </div>
          <div className="item">
            <span>{value.numReps}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
