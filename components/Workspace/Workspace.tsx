import React from 'react';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import Footer from '../nonauthenticated/Footer';

const Workspace = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow flex">
        <div className="w-1/2 overflow-y-auto">
          <ProblemDescription />
        </div>
        <hr/>
        <div className="w-1/2 overflow-y-auto">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Workspace;
