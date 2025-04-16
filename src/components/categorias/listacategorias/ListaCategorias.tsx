import CardCategoria from "../cardcategoria/CardCategoria";
import { useState, useEffect } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";

function ListaCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscarCategoria();
    }, []);

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;