import { useState } from "react";

const ListRender = () => {
  const [list] = useState([
    "Fabio",
    "Gabriel",
    "Lucas",
    "Miguel",
    "Eduardo",
    "Santos",
    "Vasco",
    "Flamento",
    "Goat",
  ]);

  const [users] = useState([
    { id: 1, name: "Rogerio", age: 31 },
    { id: 2, name: "Carlos", age: 18 },
    { id: 3, name: "Sidney", age: 20 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((item) => (
          <li key={item.id}>
            {item.name} - {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
