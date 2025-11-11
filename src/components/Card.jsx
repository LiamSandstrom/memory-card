export default function Card({ name, image, cardClicked }) {
  return (
    <div onClick={cardClicked} className="card">
      <img draggable={false} src={image} alt={name} />
      <h2>{name}</h2>
      <div className="white-bottom"></div>
    </div>
  );
}
