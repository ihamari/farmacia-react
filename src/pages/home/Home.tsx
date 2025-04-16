import ListaCategorias from "../../components/categorias/listacategorias/ListaCategorias"

function Home() {
  return (
    <>
        <div className="flex justify-center">
            <div className='container grid grid-cols-2'>
                <div className="flex flex-col gap-4 items-center justify-center py-4">
                    <h2 className='text-5xl font-bold'>
                        Seja Bem Vindo(a)!
                    </h2>
                    <p className='text-xl'>
                        Compre os poucos produtos que temos disponíveis (se conseguir! :D)
                    </p>
                </div>

                <div className="flex justify-center ">
                    <img
                        src="https://ik.imagekit.io/2zvbvzaqt/Acne%20treatment-amico.png?updatedAt=1744812483586"
                        alt="Imagem Página Home"
                        className='w-2/3'
                    />
                </div>
            </div>
        </div>
        <ListaCategorias />
    </>

  )
}

export default Home


