const Challenge = () => {
  const a = 1;
  const b = 2;

  return (
    <div>
      <button onClick={() => console.log(a + b)}>
        A:{a} e B:{b}
      </button>
    </div>
  );
};

export default Challenge;
