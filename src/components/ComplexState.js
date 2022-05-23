import { useState } from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import NameTag from "./NameTag"

const initNames = [
  {firstName: "Sofie", lastName: "Jakobsson"},
  {firstName: "kofie", lastName: "kakobsson"},
  {firstName: "dofie", lastName: "dakobsson"},
  {firstName: "öofie", lastName: "öakobsson"},
  {firstName: "Jamie", lastName: "öakobsson"},
];

const ComplexState = () => {
    const [names, setNames] = useState(initNames);
    return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
      }}>
          <h1>Complex stat in react</h1>
          {names.map((p, i) => {
             return (
                 <NameTag key={i} firstName={p.firstName} lastName={p.lastName}/>
             )
          })}
      </div>
    );
  };
  
  export default ComplexState;