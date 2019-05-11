<?php
  $destino="leidyv@unicauca.edu.co";
  $nombre=$_Post["nombre"];
  $email=$_Post["email"];
  $sexo=$_Post["sexo"];
  $pais=$_Post["pais"];
  $ciudad=$_Post["ciudad"];
  $sugerencias=$_Post["sugerencias"];

  $contenido = "Nombre: ". $nombre ."\nEmail: " . $email ."\nSexo: ". $sexo ."\nPais: ". $pais ."\Ciudad: ". $ciudad ."\nSugerencias: ". $sugerencias;
  
  mail($destino,"Sugerencias",$contenido);
  
  header("Location:menuPpal.html");

?>