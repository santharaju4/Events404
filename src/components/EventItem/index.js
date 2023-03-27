// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, isActive, setActiveEventId} = props
  console.log(eventDetails)
  console.log(isActive)
  const {id, name, imageUrl, location} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  const eventImageClassName = isActive ? 'event-image active' : 'event-image'
  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={eventImageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
