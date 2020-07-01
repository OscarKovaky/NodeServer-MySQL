<?php

class RepositorioUsuario{

    public static function obtener_todos($conexion){
         $usuarios = array();



         if(isset($conexion)){
            try{
                include_once "Usuario.inc.php";
              $sql = "SELECT * FROM usuarios";
              $sentencia= $conexion -> prepare($sql);
              $resultado=$sentencia ->fetchALL();

              if(count($resultado)){
                foreach($resultado as $fila){
                    $usuario[] = new Usuario(
                      $fila['id'], $fila['nombre'], $fila['email'], $fila['password'], $fila['fecha_registro'],$fila['activo']
                    );
                }
              }


            }catch(PDOException $ex){
               print("ERROR". $ex -> getMessage());
            }
         }
         return $usuarios;
    }

    public static function obtener_numero_usuario($conexion){
      $total_usuario = null;

      if(isset($conexion)){
        try{

        $sql = "SELECT COUNT(*) as total FROM usuario";

        $sentencia = $conexion -> prepare($sql);
        $sentencia -> execute();
        $resultado = $sentencia -> fatch();
        }catch (PDOException $ex){
          print "ERROR" . $ex -> getMessage();
        }
      }

      return $total_usuario;
      
    }
}


