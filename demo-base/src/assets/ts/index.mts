import { sayHi } from "./other.js";
sayHi();

/*type monType = string | number
let maVariable :monType ="valeur"
const uneConstante ="valeur"

maVariable ="25"

type MonTuple = [number,number,string,boolean]

let monTableau =[14, 25, "toto", true]

type TypeDuTableau = typeof monTableau
let autreTableau :TypeDuTableau =[25,14,"tata",25,false]

type RaceDechien = "doberman" |"x" | "y"

let uneRace : RaceDechien ="x"
let maVar :string
let result = true

if (result){
    maVar ="message"
}
console.log(maVar.toUpperCase())
*/
const paragrapheElement = document.querySelector('#mon-para')!
paragrapheElement.textContent= "toto"
const inputElement:HTMLInputElement = document.querySelector('#mon-input') as HTMLInputElement
console.log(inputElement.value)