import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selected, setSelected] = useState ("green");
	//let selected = "yellow";

	return (
		<div>
			<div id="semaforoTop"></div>
			<div id="semaforo">
				<div onClick={() => {setSelected("red")}} className={"light red " + " " + (selected === "red" ? "glowRed" : "")}></div>
				<div onClick={() => {setSelected("yellow")}} className={"light yellow " + " " + (selected === "yellow" ? "glowYellow" : "")}></div>
				<div onClick={() => {setSelected("green")}} className={"light green" + " " + (selected === "green" ? "glowGreen" : "")}></div>
			</div>
		</div>
	);
};

export default Home;