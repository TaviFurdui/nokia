<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $adresa = $_POST['Adresa'];
    $continut = $_POST['Continut'];

    $sql = "
        INSERT INTO [TEST].[MAILS] 
        ([adresa], [continut]) 
        VALUES (
        :ADRESA,
        :CONTINUT
    )";
    $params = array(
        ':ADRESA' => $adresa,
        ':CONTINUT' => $continut
    );
    try{
        $stmt = $conn->prepare($sql);
        $stmt->execute($params);
        die();
        //$data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        //echo '<pre>';
        //print_r($data);
    }catch(Exception $e){
        echo 'Failure';
    }
    
?>