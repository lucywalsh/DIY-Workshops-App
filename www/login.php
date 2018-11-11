<?php
require_once('load.php');

//handle login forms
if($_SERVER["REQUEST_METHOD"] == "POST"){
  $login_status = $login->$verify_login($_POST);
}
 ?>
