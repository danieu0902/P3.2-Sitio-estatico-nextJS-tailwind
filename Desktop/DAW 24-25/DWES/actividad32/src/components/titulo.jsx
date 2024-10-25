function Titulo({children, color, tam}) {
    return (  
        <h1 className="text-4xl text-blue-500 pb-2 border-b-4 border-blue-500">
            {children}
            {tam}
            {color}
        </h1>
    );
}
export default Titulo;