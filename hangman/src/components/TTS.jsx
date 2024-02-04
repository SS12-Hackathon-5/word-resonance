import { useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  useEffect(() => {
    if (window.responsiveVoice) {
      window.responsiveVoice.speak(text, "UK English Female");
    } else {
      console.log("ResponsiveVoice is not loaded");
    }
  }, [text]);

  return null;
};

export default TextToSpeech;