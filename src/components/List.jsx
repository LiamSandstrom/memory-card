import Card from "./card";

export default function List({ data }) {
  return (
    <div className="card-list">
      {data.map((entry) => {
        return <Card key={entry.id} data={entry} />;
      })}
    </div>
  );
}
