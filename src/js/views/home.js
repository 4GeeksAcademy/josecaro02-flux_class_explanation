import React, {useContext}from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Characters from "./Characters";
import Color1 from "./Color1";
import Color2 from "./Color2";

export const Home = () => {
	const {store, actions} = useContext(Context);
	return (
	<div className="text-center mt-5">
		<Characters/>
		<Color1/>
		<Color2/>		
	</div>);
}
