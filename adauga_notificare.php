<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $mesaj = $_POST['Mesaj'];

    $sql = "
    INSERT INTO [TEST].[NOTIFICARI] 
    ([MESAJ],[DATA_CREAT]) 
    VALUES (
        :MESAJ,
        GETDATE()
    ) 
    ";
    $params = array(
        ':MESAJ' => $mesaj
    );
    try{
        $stmt = $conn->prepare($sql);
        $stmt -> execute($params);
        //$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //echo '<pre>';
        //print_r($data);
    }catch(Exception $e){
        echo 'Failure';
    }
?>