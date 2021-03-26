import "./style.scss";

function Card(props) {
  return (
    <div className="card col-4">
      <dl>
        <dt>
          <h1>{props.icon}</h1>
          {/* <img src={props.image} alt="" /> */}
        </dt>
        <dt>{props.name}</dt>
        <dd>{props.desc}</dd>
      </dl>
    </div>
  );
}
export default Card;
