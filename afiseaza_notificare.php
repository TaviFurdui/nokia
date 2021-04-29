<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $sql = "
        SELECT [MESAJ] FROM [TEST].[NOTIFICARI]
    ";
    try{
        $stmt = $conn->prepare($sql);
        $stmt -> execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($data);
    }catch(Exception $e){
        echo 'Failure';
    }
?>