function useState(initialValue) {
  let state = initialValue;

  function setState(newValue) {
    state = newValue;
    console.log("Updated:", state);
  }

  return [state, setState];
}

const result = useState(0);
console.log("result is", result)

const [count, setCount] = useState(0);

console.log("set", setCount(5))
console.log("con", count)