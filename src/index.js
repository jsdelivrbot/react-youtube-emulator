import React from 'react';
import ReactDOM from 'react-dom'

const youtubeApiKey = process.env.YOUTUBE_API_KEY;

console.log('YouTube Api Key:');
console.log(youtubeApiKey);

const App = () => {
    return <div>Hi</div>;
};

ReactDOM.render(<App/>, document.querySelector('.container'));