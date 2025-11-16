import TablaProducto from "../components/TablaProducto";
import AnadirProducto from "../components/AnadirProducto";
import Api from "../api/Api";
import { useState, useEffect } from "react";

function Home() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		Api.getProductos().then((p) => setProductos(p ?? []));
	}, []);

	return (
		<div>
			<AnadirProducto setProductos={setProductos} />
			<TablaProducto productos={productos} setProductos={setProductos} />
		</div>
	);
}

export default Home;
