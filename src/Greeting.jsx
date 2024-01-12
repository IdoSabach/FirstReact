function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function Greeting() {
  const animals = ["Lion", "Cow", "Snake", "Lizard","Cat"];
  const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  return (
    <>
    <ul>{animalsList}</ul>
      <h1 className="title">Animals: </h1>
      <List animals={animals} />
    </>
  );
}

export default Greeting;
