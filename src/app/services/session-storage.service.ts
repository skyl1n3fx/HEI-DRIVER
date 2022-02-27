import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  /**
   * Función que setea una key con un valor cualquiera dentro del session storage
   * @param {string} key clave identificadora para guardar
   * @param {any} data dato a guardar
   */
   set(key : string, data : any){
    try {
      sessionStorage.setItem(key,JSON.stringify(data));
    }catch(e){
      console.error(e);
    }
  }

  /**
   * Función que entrega el valor un valor guardado en el session storage
   * @param {string} key Clave identificadora para buscar el valor guardado 
   * @returns {any} Valor guardado en session storage
   */
  get(key : string){
    try {
      return JSON.parse(sessionStorage.getItem(key)!);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  /**
   * Función para eliminar un clave : valor del session storage
   * @param {string} key Clave identificadora para buscar el valor guardado 
   */
  remove(key : string) : void{
    try {
      sessionStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing key ', e);
    }
  }

  /**
   * Función que limpia todos los datos del session storage
   */
  clear() : void{
    try {
      sessionStorage.clear();
    } catch (e) {
      console.error('Error cleaning session storage ',e);
    }
  }
}
