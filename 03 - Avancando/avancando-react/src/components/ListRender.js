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

  const [users, setUsers] = useState([
    { id: 1, name: "Rogerio", age: 31 },
    { id: 2, name: "Carlos", age: 18 },
    { id: 3, name: "Sidney", age: 20 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

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
      <button onClick={deleteRandom}>Deletar random user</button>
    </div>
  );
};

export default ListRender;
