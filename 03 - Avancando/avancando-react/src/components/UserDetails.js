const UserDetails = ({ name, age, profession }) => {
  return (
    <div>
      <ul>
        <li>Nome: {name}</li>
        <li>Idade: {age}</li>
        <li>Profissão: {profession}</li>
        {age >= 18 && <li>Pode tirar carteira de Motorista</li>}
      </ul>
    </div>
  );
};

export default UserDetails;
