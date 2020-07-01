
    
    <?php
     include_once "app/Conexion.inc.php";
     include_once "app/RepositorioUsuario.inc.php";
     
    $titulo="Registro";
    
    include_once "plantillas/documento-declaracion.inc.php";
    include_once "plantilla/navbar.inc.php";

    ?>
    
    <div class="container">
      <div class="jumbotron">
        <h1 class="text-center">Formulario de registro</h1>
      </div>
    </div>
    <div class="container">
       <div class="row">
          <div class="col-mp-8">
              <div class="card">
                <div class="card-header">
                   Instrucciones
                </div>
                <ul class="list-group list-group-flush">
                   <li class="list-group-item">Olvidaste tu contraseña?</li>
                   <li class="list-group-item"></li>
                </ul>
              </div>
          </div>
       </div>
    </div>
      

    <?php
    include_once "plantillas/documentos-cierre.inc.php";
    ?>
   