(function() {
    const miFuncion = function(a:String){
        return a.toUpperCase();
    }
    
    const miFuncionF= (a: String) => a.toUpperCase();
    
    console.log(miFuncion('Normal'))
    console.log(miFuncionF('Flecha'))

    const sumarN = function (a:number, b:number){
        return a + b;
    }
    
    const sumarF = (a:number, b:number) => a+b;
    const hulk={
        nombre: 'Hulk',
        smash(){
            setTimeout(()=>{
                console.log(`${this.nombre} smash!!!`)
            },1000)
            
        }
    }
        
    hulk.smash()
    

    console.log(sumarN(5,5))
    console.log(sumarF(10,10))
})();