<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    $config = "sqlsrv:Server=tcp:synopsis-playground.database.windows.net,1433;Database=PLAYGROUND";
    $conn = new PDO($config, 'playground', 'synopsis123@');
?>