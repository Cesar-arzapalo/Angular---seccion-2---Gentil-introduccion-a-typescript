(()=>{
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    }
    
    const extraer = ({nombre,clave}:any) =>{
        console.log(nombre);
        console.log(clave);
    }
    
    extraer(avenger)

    const avengers: string[] = ['Thor','Iroman','Spiderman']

    const [,,araña] = avengers;

    console.log(araña);

    const extarerArr = ([thor,iroman,spiderman]:String[])=>{
        console.log(thor)
        console.log(iroman)
        console.log(spiderman)
    }
})();