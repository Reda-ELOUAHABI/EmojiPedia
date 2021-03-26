import "./styles.css";
import emojipedia from "./emojipedia";
import Card from "./components/Card";

// function mapList(emojipedia) {
//   return (
//     <div className="App">
//       <div className="row">
//         <Card
//           key={emojipedia.key}
//           icon={emojipedia.emoji}
//           name={emojipedia.name}
//           desc={emojipedia.meaning}
//         />
//       </div>
//     </div>
//   );
// }
export default function App() {
  return emojipedia.map(emojipedia =>     <div className="App">
  <div className="row">
    <Card
      key={emojipedia.key}
      icon={emojipedia.emoji}
      name={emojipedia.name}
      desc={emojipedia.meaning}
    />
  </div>
</div>);
  // return emojipedia.map(mapList);
}
