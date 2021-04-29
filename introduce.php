<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $number = $_POST['Number'];
    $status = $_POST['Status'];
    $priority = $_POST['Priority'];

    $sql = "
    INSERT INTO [TEST].[TICKETE] 
    ([INCIDENT_NUMBER],[STATUS],[SUBMIT_DATE],[PRIORITY]) 
    VALUES (
        :NUMBER,
        :STATUS,
        GETDATE(),
        :PRIORITY
    ) 
    ";
    $params = array(
        ':NUMBER' => $number,
        ':STATUS' => $status,
        ':PRIORITY' => $priority
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