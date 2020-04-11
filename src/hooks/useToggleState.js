import { useState } from "react";

function useToggle(initialVal = false) {
  //call useState, "reserves piece of state"
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };

  //returns piece of state and function to toggle it
  return [state, toggle];
}

export default useToggle;
