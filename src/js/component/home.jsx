import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState ("red");

	return (
		<div className="semaforo">
			<div className={"light red" + (selected === "red" ? "glow" : "")}></div>
			<div className={"light yellow" + (selected === "yellow" ? "glow" : "")}></div>
			<div className={"light green" + (selected === "green" ? "glow" : "")}></div>
		
		</div>
	);
};

export default Home;