function Footer() {
    let data = new Date().getFullYear()

  return (
    <div className="flex justify-center bg-cyan-950 text-white">
        <div className="container flex flex-col items-center py-4">
            <h3 className='text-lg'>
                Projeto Farmácia Generation | Copyright: {data}
            </h3>
            <p>Feito com carinho e um pouco de desespero ❤️</p>
        </div>
    </div>
  )
}

export default Footer