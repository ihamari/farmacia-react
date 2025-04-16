import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className="w-full bg-blue-500 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
            <Link to='/home' className='hover:underline'>Farmácia Generation</Link>
            <div className ="flex gap-4" >
                <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
                <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar