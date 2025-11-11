import Card from "./card";

export default function List({ data, cardClicked }) {
  return (
    <div className="card-list">
      {data.map((entry) => {
        return (
          <Card
            key={entry.id}
            name={entry.name}
            image={entry.image}
            cardClicked={() => cardClicked(entry.id)}
          />
        );
      })}
    </div>
  );
}
