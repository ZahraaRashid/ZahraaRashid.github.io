import React from 'react';

const CombinedComponent = ({ text, isReading, transcript }) => {
  const words = text.split(' ');
  const spokenWords = transcript.split(' ');
  
  return (
    <p>
      {words.map((word, index) => {
        const isSpoken = spokenWords.includes(word);
        const isSpokenOrAfter = isSpoken || spokenWords.includes(words[index - 1]);

        return (
          <span
            key={index}
            style={{
              color: isSpokenOrAfter ? 'green' : isReading ? 'blue' : 'black',
            }}
          >
            {word + ' '}
          </span>
        );
      })}
    </p>
  );
};

export default CombinedComponent;

