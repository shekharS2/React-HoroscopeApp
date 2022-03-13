import "../styles.css";
export default function FormInputText(props) {

	let handleChange = (event) => {
		if(props.type === "name"){
			let tmp = event.target.value.toLowerCase();
			props.setName(tmp);
		}else if(props.type === "email"){
			let tmp = event.target.value.toLowerCase();
    	props.setEmail(tmp);
		}else if(props.type === "sign"){
			let tmp = event.target.value.toLowerCase();
    	props.setSign(tmp);
		}else if(props.type === "day"){
			let tmp = event.target.value.toLowerCase();
    	props.setDay(tmp);
		}
	}
	
  return (
		<div>
			<div>
				<input
					placeholder={props.placeholder}
					onChange={handleChange}
					required
				></input>
			</div>

			<div>
				<label>{props.error}</label>
			</div>
		</div>
  );
}