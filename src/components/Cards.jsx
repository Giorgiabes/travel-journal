import Card from "./Card";
import data from "../data"

export default function Cards() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return (
    <div className="cards">
      {cards}
    </div>
  )
}