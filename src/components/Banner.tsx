export const Banner = () => {
  return (
    <div className='flex items-center justify-center mb-16 bg-cover bg-center w-full h-40 sm:h-80 lg:h-96 p-10 sm:p-10 lg:p-40'
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <h1 className="font-semibold tracking-tight text-center px-3 pt-2 pb-3 md:pb-3 lg:pb-5 bg-teal-800 text-white text-3xl md:text-5xl lg:text-6xl">Aconsegueix la millor qualitat</h1>
    </div>
  )
};