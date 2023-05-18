//libs
import React from 'react';
//components
import CreativeWaypoint from './waypoints/CreativeWaypoint';
import PeoplePoint from './waypoints/PeoplePoint';
import KnowledgeWaypoint from './waypoints/KnowledgeWaypoint';
import StrategyWaypoint from './waypoints/StrategyWaypoint';
import ResourceWaypoint from './waypoints/ResourceWaypoint';

const Atlas = () => {
  //
  /*
  @desc: The atlas is a map of social and productive ecosystems
  # These ecosystems are effectively networks with:
  - End Goals
  - Contribution Waypoints
  - An activation bubble that tracks how close an idea is to completion
  # The Activation Bubble
  - A bubble that measures how close an idea is to completion based on the sum of any number of weights
  # Activation weights
  - Each weight has an activation score between 0-9, with each 0 being the lowest and 9 being the highest
  - Weights measure the strength of particular contribution metric
  */
  return (
    <div className='atlas'>
      <PeoplePoint />
      <ResourceWaypoint />
      <CreativeWaypoint />
      <StrategyWaypoint />
      <KnowledgeWaypoint />
    </div>
  );
};

export default Atlas;
