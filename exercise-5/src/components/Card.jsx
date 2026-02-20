function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="card-content">
        <h4 className="card-title">{props.name}</h4>
        <small className="card-category">{props.category}</small>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;