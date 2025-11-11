export default function Card({ data }) {
  return (
    <div className="card">
      <img src={data.image} alt="" />
      <h2>{data.name}</h2>
    </div>
  );
}
