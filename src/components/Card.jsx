import { RiMapPin2Fill } from "react-icons/ri"

export default function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imageUrl} alt="fuji mountain" className="card--img" />

        <div className="card--content">

          <div className="card--location">
            <RiMapPin2Fill className="card--pin" />
            <div className="card--country">{props.location.toUpperCase()}</div>
            <a href={props.googleMapsUrl} target="_blank" className="card--map">View on Google Maps</a>
          </div>

          <div className="card--title">
            <p>{props.title}</p>
          </div>

          <div className="card--date">
            <p>{props.startDate} - {props.endDate}</p>
          </div>

          <div className="card--text">
            <p>
              {props.description}
            </p>
          </div>

        </div>
      </div>

      <div className="card--line"></div>
    </>
  )
}