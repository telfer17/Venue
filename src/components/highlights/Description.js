import React from 'react';
import Fade from 'react-reveal/Fade';

const Description = () => {
  return (
    <Fade>
      <div className="center_wrapper">
        <h2>Highlights</h2>
        <div className="highlight_description">
        <h3>So what is HOLO?</h3>
        <iframe width="560" height="315" src="https://www.youtube.com/watch?v=rnXhqFvTm5I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>The HOLO concept is a culmination of the several years of holographic technology Eric’s been working on during his EPIC shows.  The goal of HOLO was to introduce a tourable holographic live experience that works in more locations than the purpose-built EPIC stages.  It’s an exciting prospect given what Eric’s done with holographic elements to date in his EPIC shows.</p>
        </div>
      </div>
    </Fade>
  );
};

export default Description;
