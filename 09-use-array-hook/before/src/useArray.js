import { useState } from "react";

export function useArray(initialArray) {
  const [array, setArray] = useState(initialArray);

  function push(element) {
    setArray((currentArray) => [...currentArray, element]);
  }

  function replace(index, newElement) {
    setArray((currentArray) =>
      currentArray.map((element, currentIndex) =>
        currentIndex === index ? newElement : element,
      ),
    );
  }

  function filter(callback) {
    setArray((currentArray) => currentArray.filter(callback));
  }

  function remove(index) {
    setArray((currentArray) =>
      currentArray.filter((_, currentIndex) => currentIndex !== index),
    );
  }

  function clear() {
    setArray([]);
  }

  function reset() {
    setArray(initialArray);
  }

  return {
    array,
    set: setArray,
    push,
    replace,
    filter,
    remove,
    clear,
    reset,
  };
}
