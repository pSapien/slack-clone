import React from 'react';

export default function DirectMessages() {
  return (
    <div className="mb-8">
      <div className="px-4 mb-2 text-white flex justify-between items-center">
        <div className="opacity-75">Direct Messages</div>
        <div>
          <svg
            className="fill-current h-4 w-4 opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
          </svg>
        </div>
      </div>
      <div className="flex items-center mb-3 px-4">
        <svg
          className="h-2 w-2 fill-current text-green mr-2"
          viewBox="0 0 20 20"
        >
          <circle cx={10} cy={10} r={10} />
        </svg>
        <span className="text-white opacity-75">
          Adam Wathan <span className="text-grey text-sm">(you)</span>
        </span>
      </div>
      <div className="flex items-center mb-3 px-4">
        <svg
          className="h-2 w-2 fill-current text-green mr-2"
          viewBox="0 0 20 20"
        >
          <circle cx={10} cy={10} r={10} />
        </svg>
        <span className="text-white opacity-75">David Hemphill</span>
      </div>
      <div className="flex items-center px-4 mb-6 opacity-50">
        <svg
          className="h-2 w-2 stroke-current text-white mr-2"
          viewBox="0 0 22 22"
        >
          <circle cx={11} cy={11} r={9} fill="none" strokeWidth={3} />
        </svg>
        <span className="text-white">Steve Schoger</span>
      </div>
    </div>
  );
}
