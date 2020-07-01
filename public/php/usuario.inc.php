<?php 

class Usuario {
    private  $id;
    private  $nombre;
    private  $email;
    private  $password;
    private  $fecha_registro;
    private  $activo;

    
    public  function __construct($id,$nombre,$email,$password,$fecha_registro,$activo){
      
       $this-> id  = $id;
       $this-> nombre  = $nombre;
       $this-> email  = $email;
       $this-> password  = $password;
       $this-> fecha_registro  = $fecha_registro;
       $this-> activo  = $activo;

     
    }
        
     public  function obtenerId(){
         return $this ->id ;
     }
     
     public  function obtenerNombre(){
        return $this ->nombre ;
    }
    
    public  function obtenerEmail(){
        return $this ->email ;
    }
    
    public  function obtenerFechaRegistro(){
        return $this ->fecha_registro ;
    }
    
    public  function esta_activo(){
        return $this ->activo ;
    }
    
    public  function cambiar_nombre($nombre){
        return $this ->nombre ;
    }


    public  function cambiar_email($email){
        return $this ->email ;
    }

    public  function cambiar_password($password){
        return $this ->password ;
    }


    public  function cambiar_fecha_registro($fecha_registro){
        return $this ->fecha_registro ;
    }

    public  function cambiar_activo($activo){
        return $this ->activo ;
    }
}