import { useEffect, useState } from "react";
import TablaVentas from "../components/TablaVentas";
import useMiniERP from "../hooks/useMiniERP";

function Sales() {
    const [ventas, setVentas] = useState([]);
    const { getVentas, error } = useMiniERP();

    useEffect(() => {
        getVentas().then((v) => {
            setVentas(v ?? []);
        });
    }, []);


    return <TablaVentas ventas={ventas} setVentas={setVentas} />;
}

export default Sales;
