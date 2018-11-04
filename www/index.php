<?php
require_once('config.php');

// Turn on PHP error reporting
error_reporting(E_ALL);
ini_set('display_errors', '1');

//connect to database
$connection = pg_connect("host=$db_host dbname=$db_name user=$db_user password=$db_pass");

//test connection
if($connection) {
       echo 'connected';
       //GO TO INDEX.HTML
    } else {
        echo 'there has been an error connecting';
        //GO TO ANOTHER PAGE
    }

/* alternate PDO connection
$dsn = "pgsql:host=$db_host dbname=$db_name";
try{
$db = new PDO($dsn, $db_user, $db_pass);
echo "Connected to db"
}
catch (PDOException $ex){
  echo "Connection failed ".$ex->getMessage();
}
*/
?>
