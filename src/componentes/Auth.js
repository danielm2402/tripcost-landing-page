class Auth{
   constructor(){
       this.autentificacion = false;
   }
   login(cb){
       this.autentificacion= true;
       cb()
   }
   logout(cb){
       this.autentificacion=false;
       cb()
   }

   estaAutentificado(){
       return this.autentificacion
   }
}


export default new Auth();