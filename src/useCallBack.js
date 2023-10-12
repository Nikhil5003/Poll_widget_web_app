import React from "react";
const Myfunction = ({ func }) => {
  func();
};
export default React.memo(Myfunction);
