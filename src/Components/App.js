import React from "react";
import {
  BrowserRouter as Router, Link,
  useLocation
} from "react-router-dom";


function Products() {

  const location = useLocation();
  console.log(location);

  return (
      <div className="container">
        <h2>Products page</h2>
        <p>Pathname: {location.pathname}</p>
        <p>Search Parameter: {new URLSearchParams(location.search).get('name')}</p>
      </div>
  );
}


export default function App() {
  return (
      <Products/>
  );
}



