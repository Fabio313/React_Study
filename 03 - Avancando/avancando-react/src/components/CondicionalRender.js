import { useState } from "react";

function CondicionalRender() {
  const [x] = useState(false);
  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x ? <p> se x for true, sim!</p> : <p> se x for falso, sim!</p>}
    </div>
  );
}

export default CondicionalRender;
