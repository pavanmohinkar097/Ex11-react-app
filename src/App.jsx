import "./App.css";

//Rendering List///

// const App = () => {
//   const items = ["Nike", "Adidas", "Onitsuka Tiger", "Puma"];

//   // const result = [
//   //   <li>Nike</li>,
//   //   <li>Adidas</li>,
//   //   <li>Onitsuka Tiger</li>,
//   //   <li>Puma</li>,
//   // ];
//     // Using Map//
//   const result = items.map((items) => <li>{items}</li>);
//   return (
//     // <main>
//     //   <ul>{result}</ul>
//     // </main>
//     <h1>{result}</h1>
//   );
// };
//  Another Example using MAP  ///
const App = () => {
  const phones = ["iphones11", "iphones12", "iphones13"];
  return (
    <div>
      {phones.map((phone) => (
        <p>{phone}</p>
      ))}
    </div>
  );
};

export default App;
