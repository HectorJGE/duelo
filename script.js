class Carta {
    constructor(nombre, costo){
        this.nombre=nombre
        this.costo=costo
    }
}
class Unidad extends Carta{
    constructor(nombre,costo,resistencia,poder){
        super(nombre,costo)
        this.resistencia = resistencia
        this.poder = poder
    }
    atacar(objetivo){
        if(objetivo instanceof Unidad){
            console.log(`${this.nombre} ha atacado a ${objetivo.nombre}`)
            objetivo.resistencia -= this.poder;
            console.log(`Su resistencia disminuye -${this.poder}: ${objetivo.resistencia}`)
        }else{
            throw new Error("El objetivo debe ser una instancia de unidad")
        }
    }
    imprimir_carta(){
        console.log(`---\nnombre: ${this.nombre}`)
        console.log(`costo: ${this.costo}`)
        console.log(`resistencia: ${this.resistencia}`)
        console.log(`poder: ${this.poder}\n---`)
    }
}
class Efecto extends Carta{
    constructor(nombre,costo,magnitud,estadistica){
        super(nombre,costo)
        this.estadistica = estadistica
        this.magnitud=magnitud
        this.text = `${this.magnitud>0?"Aumenta":"Disminuye"} ${this.estadistica=="poder"?"el":"la"} ${this.estadistica} en ${this.magnitud}`
    }
    jugar(objetivo){
        if(objetivo instanceof Unidad){
            if(this.estadistica == "poder"){
                console.log(this.text)
                objetivo.poder = objetivo.poder + this.magnitud
            }else{
                console.log(this.text)
                objetivo.resistencia = objetivo.resistencia + this.magnitud
                
            }
        }else{
            throw new Error("El objetivo debe ser una instancia de unidad")
        }
    }
}
const Algoritmo_Dificil = new Efecto("Algoritmo Dificil",2,3,"resistencia")
const Rechazo_promesa = new Efecto("Rechazo de promesa no manejado",1,-2,"resistencia")
const Programacion_pareja = new Efecto("Programacion en pareja",3,2,"poder")

//Turno 1
const T1_J1 = new Unidad("Ninja Cinturon Rojo",3,3,4)
T1_J1.imprimir_carta()
Algoritmo_Dificil.jugar(T1_J1)
T1_J1.imprimir_carta()
//Turno 2
const T2_J2 = new Unidad("Ninja Cinturon Negro",4,5,4)
Rechazo_promesa.jugar(T1_J1)
T1_J1.imprimir_carta()

//Turno 3
Programacion_pareja.jugar(T1_J1)
T1_J1.imprimir_carta()
T2_J2.imprimir_carta()
T1_J1.atacar(T2_J2)
T2_J2.imprimir_carta()

