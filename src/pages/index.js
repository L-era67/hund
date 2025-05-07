import { Component1 } from "../compenents/Compenent1";

export default function Home() {
  const data = "100 components"
  return (
    <>
      <Component1 props = {data}/>
    </>
  );
}
