import { useState, useCallback } from "react";

const BASE_URL = "https://minierp.rbnetto.dev";

const useMiniERP = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const isUserLogged = () => {};
    // keep it DRY ;)
    const getAuthHeaders = () => ({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    });
    // ╭────────────────────────────────────────────────────────╮
    // │                         Login                          │
    // ╰────────────────────────────────────────────────────────╯
    const login = useCallback(async (correo, contrasena) => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}/api/users/users/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: correo, password: contrasena }),
            });
            const data = await response.json();

            if (!response.ok) throw new Error(data.detail || "Error en login");

            // Guardamos el token
            if (data.access_token) {
                localStorage.setItem("token", data.access_token);
                return data.access_token;
            }
        } catch (error) {
            setError(error.message);
            console.error("Login error:", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    // ==========================================================
    //                         INVENTARIO
    // ==========================================================

    const getProductos = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/inventory/products/`, {
                method: "GET",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Error al obtener productos");

            const data = await response.json();
            return data.results;
        } catch (err) {
            setError(err.message);
            console.error("getProductos error:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    const addProducto = useCallback(async (producto) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/inventory/products/`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(producto),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(JSON.stringify(data));

            return data;
        } catch (err) {
            setError(err.message);
            console.error("addProducto error:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const editProducto = useCallback(async (id_producto, producto) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/inventory/products/${id_producto}/`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify(producto),
            });

            if (!response.ok) throw new Error("Error al editar producto");
            return true;
        } catch (err) {
            setError(err.message);
            console.error("editProducto error:", err);
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteProducto = useCallback(async (id_producto) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/inventory/products/${id_producto}/`, {
                method: "DELETE",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Error al eliminar producto");
            return true;
        } catch (err) {
            setError(err.message);
            console.error("deleteProducto error:", err);
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    const getProductoById = useCallback(async (id_producto) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/inventory/products/${id_producto}/`, {
                method: "GET",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Producto no encontrado");
            const data = await response.json();
            return data;
        } catch (err) {
            setError(err.message);
            console.error("getProductoById error:", err);
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    // ==========================================================
    //                    ORDENES DE VENTA
    // ==========================================================

    const getVentas = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/sales/orders/`, {
                method: "GET",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Error al obtener órdenes de venta");
            const data = await response.json();
            return data.results;
        } catch (err) {
            setError(err.message);
            console.error("getVentas error:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    const addVenta = useCallback(async (venta) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/sales/orders/`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(venta),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(JSON.stringify(data));
            return data;
        } catch (err) {
            setError(err.message);
            console.error("addVenta error:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    // ==========================================================
    //                    cLIENTES
    // ==========================================================

    const getClientes = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/sales/customers/`, {
                method: "GET",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Error al obtener clientes");
            const data = await response.json();
            return data.results;
        } catch (err) {
            setError(err.message);
            console.error("getClientes error:", err);
            return [];
        } finally {
            setLoading(false);
        }
    }, []);

    const addCliente = useCallback(async (cliente) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/sales/customers/`, {
                method: "POST",
                headers: getAuthHeaders(),
                body: JSON.stringify(cliente),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(JSON.stringify(data));
            return data;
        } catch (err) {
            setError(err.message);
            console.error("addCliente error:", err);
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const deleteCliente = useCallback(async (id_cliente) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${BASE_URL}/api/sales/customers/${id_cliente}/`, {
                method: "DELETE",
                headers: getAuthHeaders(),
            });

            if (!response.ok) throw new Error("Error al eliminar cliente");
            return true;
        } catch (err) {
            setError(err.message);
            console.error("deleteCliente error:", err);
            return false;
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        loading,
        error,
        login,
        getProductos,
        addProducto,
        editProducto,
        deleteProducto,
        getProductoById,
        getVentas,
        addVenta,
        getClientes,
        addCliente,
        deleteCliente,
    };
};

export default useMiniERP;
