import React from 'react';

const Stats = () => {
    return (
        <div>
              <div className="flex justify-center py-10 px-4">
      <div className="stats shadow w-full max-w-6xl flex flex-col lg:flex-row">
        {/* Stat 1 */}
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title  font-bold  text-xl">Users Signed Up</div>
          <div className="stat-value text-violet-400">25.6K</div>
          <div className="stat-desc text-sm">21% more than last month</div>
        </div>

        {/* Stat 2 */}
        <div className="stat">
          <div className="stat-figure text-violet-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-8 w-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-bold text-xl">Total Bill Paid</div>
          <div className="stat-value text-violet-400">297k</div>
          <div className="stat-desc text-sm">11% more than last month</div>
        </div>

        {/* Stat 3 */}
        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar avatar-online"></div>
          </div>
          <div className="stat-title  font-bold  text-xl">Bills Unpaid </div>
          <div className="stat-value text-violet-400">12K</div>
          <div className="stat-desc text-sm">10% bill remaining</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Stats;