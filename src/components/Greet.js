import { useEffect } from "react";

const Greet = ({name}) => {
    const message = `Hello ${name}`

    useEffect (() => {
       document.title = `Greetings to ${name}`;
    }, [name])
    return (
      <div>
          useEffect
          <p>{message}</p>
          {}
      </div>
    );
  };
  
  export default Greet;