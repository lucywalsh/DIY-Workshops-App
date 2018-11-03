<?php
require_once('config.php');

//connect to database
$connection = pg_connect("host=$db_host dbname=$db_name user=$db_user password=$db_pass");

?>
