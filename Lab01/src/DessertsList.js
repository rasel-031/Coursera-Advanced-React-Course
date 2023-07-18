function DessertsList(props) {
  // Implement the component here.
  const newDesserts = props.data;
  const filterDesserts = newDesserts.filter(checkCalories => checkCalories.calories < 500);
  const sortDesserts = filterDesserts.sort((a, b) => {return a.calories - b.calories;});

  const newFilterDesserts = sortDesserts.map((dessert, index) => {
    return <li key={index}> {dessert.name} - {dessert.calories} cal</li>;
  });

  return(
    <div>
    <ul> {newFilterDesserts}</ul>
    </div>
  );
}

export default DessertsList;
