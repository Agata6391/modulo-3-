let user = {
    name: 'fernando'


}
try{console.log (user.profile.correo);

}catch (error){
    console.error("Error al acceder a la propiedad", error.message);
}
//profile no esta a proposito, hacer un try catch y consola que acceda user.profile.correo