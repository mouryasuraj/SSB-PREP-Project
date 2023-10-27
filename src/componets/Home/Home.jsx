import React from 'react'
import PsychologyCard from './Psychology/PsychologyCard';
import Heading from './Psychology/Heading';


function Home() {
  return (
    <div className="px-20 py-5 mt-5 flex flex-col lg:h-[100vh] h-fit items-center justify-start">
      <Heading headingName='pyschology test' />
      <div className="flex flex-wrap justify-around my-16 w-full">
        <PsychologyCard sectionName='Thematic Apperception test' />
        <PsychologyCard sectionName='Word Association Test' goTo='word-association-test' />
        <PsychologyCard sectionName='Situation Reaction Test' />
        <PsychologyCard sectionName='Self Description Test' />
      </div>
    </div>
  );
}


export default Home
