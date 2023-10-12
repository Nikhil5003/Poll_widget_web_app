import React, { useEffect, useState } from "react";

const RenderPollItem = ({ id, label, data, setPollData, voteCount }) => {
  const [selected, setSelected] = useState(false);
  const onSelect = (id) => {
    setSelected(!selected);
    const options = [...data];
    const updatedData = options.map((data) => {
      return data.id === id
        ? {
            ...data,
            voteCount: selected ? data.voteCount - 1 : data.voteCount + 1,
          }
        : data;
    });
    setPollData(updatedData);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          padding: "20px",
        }}
      >
        <input
          onChange={() => onSelect(id)}
          type="checkbox"
          name={label}
          id={id}
          style={{
            width: "100px",
          }}
        />
        <span>{label}</span>
        <span>{voteCount}</span>
      </div>
    </>
  );
};

export default RenderPollItem;
