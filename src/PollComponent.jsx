import React, { useState } from "react";
import RenderPollItem from "./RenderPollItem";
function PollComponent({ data: pollData = [] }) {
  const [data, setPollData] = useState(pollData);
  const TotalVoteCount = data.reduce((sum, { voteCount }) => {
    return sum + voteCount;
  }, 0);
  return (
    <div>
      {data.map(({ id, label, voteCount }) => (
        <RenderPollItem
          id={id}
          label={label}
          setPollData={setPollData}
          data={data}
          voteCount={voteCount}
        />
      ))}
      <h2>TotalVoteCount : {TotalVoteCount}</h2>
    </div>
  );
}

export default PollComponent;
