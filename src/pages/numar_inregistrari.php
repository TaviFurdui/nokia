<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $sql="SELECT * FROM [TEST].[TICKETE] ";
    $num_rows = mysql_num_rows($sql);

    echo "$num_rows Rows\n";
?>
