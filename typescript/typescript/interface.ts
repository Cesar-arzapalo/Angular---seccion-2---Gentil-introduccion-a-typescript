(()=>{
    
    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string;
    }

    const enviarMision = (xmen:Xmen) =>{
        console.log(`Enviado a ${xmen.nombre} a la mision`)
    }

    const regresarMision = (xmen:Xmen) =>{
        console.log(`Regresa ${xmen.nombre} de la mision`)
    }

    const wolverine = {
        nombre: 'Logan',
        edad: 60
    }

    enviarMision(wolverine)
    regresarMision(wolverine)
})(); 