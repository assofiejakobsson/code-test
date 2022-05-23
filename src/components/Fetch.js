import { useState, useEffect } from "react";

const initProfile = {
   publicRepos: null,
   website: null,
}

const Fetch = () => {
    const [profile, setProfile] = useState(initProfile);

    const getProfile = async () => {
       const response = fetch("https://api.github.com/users/assofiejakobsson");
       const json = await  await response.json();
    }

    useEffect (() => {

    }, [])

    return (
      <div>
          Fetch data whit useEffect
      </div>
    );
  };
  
  export default Fetch;