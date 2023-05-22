import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState ("green");
	//let selected = "yellow";

	return (
		<div className="semaforo">
			<div onClick={() => {setSelected("red")}} className={"light red " + " " + (selected === "red" ? "glow" : "")}></div>
			<div onClick={() => {setSelected("yellow")}} className={"light yellow " + " " + (selected === "yellow" ? "glow" : "")}></div>
			<div onClick={() => {setSelected("green")}} className={"light green" + " " + (selected === "green" ? "glow" : "")}></div>
		
		</div>
	);
};

export default Home;