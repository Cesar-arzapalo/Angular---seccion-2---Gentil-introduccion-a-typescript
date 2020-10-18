"use strict";
(() => {
    // Uso de Let y Const
    const nombre = 'Ricardo Tapia';
    const edad = 23;
    let PERSONAJE = {
        nombre: nombre,
        edad: edad
    };
    var batman = {
        nombre: 'Bruno Díaz',
        artesMarciales: ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']
    };
    // Convertir esta funcion a una funcion de flecha
    let resultadoDoble = (a, b) => (a + b) * 2;
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger(nombre, arma = 'arco', poder) {
        var mensaje;
        if (poder) {
            mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
        }
        else {
            mensaje = nombre + ' tiene un ' + arma;
        }
    }
    ;
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class rectangulo {
        constructor(base, altura) {
            this.area = () => this.base * this.altura;
            this.base = base;
            this.altura = altura;
        }
    }
})();
