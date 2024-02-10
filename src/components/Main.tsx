'use client';

import { useState } from 'react';

type Props = {};

export default function Main({}: Props) {
  const [wordsInput, setWordsInput] = useState<string>('');
  const [textInput, setTextInput] = useState<string>('');

  const words = wordsInput.split(' ');
  const wordsNotFound = words.filter((word) => {
    const textInputWithoutPunctuation = textInput
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
      .toLowerCase();
    return !textInputWithoutPunctuation.includes(word.toLowerCase());
  });

  return (
    <div className='grid grid-cols-3 grid-rows-2 gap-6 w-full'>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>Words</h2>
        <textarea
          name='words'
          value={wordsInput}
          onChange={(e) => setWordsInput(e.target.value)}
          className='bg-white/10 p-4 rounded-lg w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-2 row-span-2 col-span-2'>
        <h2 className='text-xl font-bold'>Text</h2>
        <textarea
          name='words'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className='bg-white/10 p-4 rounded-lg h-full'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold text-white/40'>Words Not Found</h2>
        <div className='bg-white/10 p-4 rounded-lg w-full h-full'>
          {wordsNotFound.join(' ')}
        </div>
      </div>
    </div>
  );
}
