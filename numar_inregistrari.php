<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    /*$sql = "SELECT count(*) FROM [TEST].[TICKETE]"; 
    $result = $conn->prepare($sql); 
    $result->execute(); 
    $number_of_rows = $result->fetchColumn(); 

    echo $number_of_rows;*/
    $sql = "SELECT TOP 1 SUBMIT_DATE FROM [TEST].[TICKETE] ORDER BY SUBMIT_DATE DESC"; 
    $result = $conn->prepare($sql); 
    $result->execute(); 
    $number_of_rows = $result->fetchColumn(); 

    echo 1000 * strtotime($number_of_rows);
?>
