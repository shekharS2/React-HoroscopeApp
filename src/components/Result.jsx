export default function (props) {
  return (
    <div>
      <h3>{props.data.color}</h3>
      <h3>{props.data.compatibility}</h3>
      <h3>{props.data.current_date}</h3>
      <h3>{props.data.date_range}</h3>
      <h3>{props.data.description}</h3>
      <h3>{props.data.lucky_number}</h3>
      <h3>{props.data.lucky_time}</h3>
      <h3>{props.data.mood}</h3>
    </div>
  );
}
