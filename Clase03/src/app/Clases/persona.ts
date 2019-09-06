export class Persona {

    nombre: string;
    sexo: string;
    sueldo: number;
    edad: number;
    licencia: string;
    nacimiento: string;

    constructor(nombre:string = "", sexo:string = "",sueldo:number= 0,edad:number =0,licencia:string="",nacimiento:string="") {

        this.nombre = nombre;
        this.sexo = sexo;
        this.sueldo = sueldo;
        this.edad = edad;
        this.licencia = licencia;
        this.nacimiento = nacimiento;
    }
}
