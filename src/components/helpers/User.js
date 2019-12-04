import React, { useState } from "react";

function User(props) {
  const [role, setRole] = useState(none);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default User;
