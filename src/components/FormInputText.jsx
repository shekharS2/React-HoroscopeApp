import "../styles.css";
export default function FormInputText(props) {
  return (
    <div>
      <input
        placeholder={props.placeholder}
        onChange={(event) => {
          props.handleInput(event);
        }}
      ></input>
    </div>
  );
}
