<?php
require_once('config.php');

// Turn on PHP error reporting
/*
error_reporting(E_ALL);
ini_set('display_errors', '1');
*/
/*simple connection
$connection = pg_connect("host=$db_host dbname=$db_name user=$db_user password=$db_pass");

//test connection
if($connection) {
       echo 'connected';
       //GO TO INDEX.HTML
    } else {
        echo 'there has been an error connecting';
        //GO TO ANOTHER PAGE
    }
*/

$dsn = "pgsql:host=$db_host dbname=$db_name";
try{
$db = new PDO($dsn, $db_user, $db_pass);
echo "Connected to database";
}catch (PDOException $ex){
  header('Location: database_fail.html');
}
?>
