/** @format */

import React from "react";
import { PaperClipIcon } from "@heroicons/react/solid";

const NoteContent = (props) => {
  return (
    <div>
      <main className='relative flex-1 overflow-y-auto focus:outline-none'>
        <div className='py-6'>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 md:px-8'>
            <h1 className='text-2xl font-semibold text-gray-900'>
              {props.title}
            </h1>
          </div>
          <div className='text-center '>
            <svg
              className='w-12 h-12 mx-auto text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'>
              <path
                vectorEffect='non-scaling-stroke'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
              />
            </svg>
            <h3 className='mt-2 text-sm font-medium text-gray-900'>No notes</h3>
            <p className='mt-1 text-sm text-gray-500'>
              Get started by creating a new note.
            </p>
            <div className='mt-6'>
              <button
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <PaperClipIcon
                  className='w-5 h-5 mr-2 -ml-1'
                  aria-hidden='true'
                />
                New Note
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoteContent;
