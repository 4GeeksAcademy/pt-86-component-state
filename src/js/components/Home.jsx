import React, {useState} from "react";
import { act } from "react";

//create your first component
const Home = () => {
	const [activeIcon, setActiveIcon] = useState("fav");
	return (
		<div className="text-center">
			{/* on line if/else statements */}
			{/* condition ? true : false */}
            <i 
				className={activeIcon == "fav" ?  "fa-solid fa-heart" : "fa-regular fa-heart"}
				onClick={()=>setActiveIcon("fav")}
			></i>
			<i 	
				className={activeIcon == "like" ?  "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"}
				onClick={()=>setActiveIcon("like")}
			></i>
		</div>
	);
};

export default Home;