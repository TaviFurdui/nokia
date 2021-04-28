<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers "origin, x-requested-with, content-type"');
    header('Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"');
    include 'conn.php';

    $json = file_get_contents('php://input');
	$obj = json_decode($json,true);

	$name = $_POST['Name'];
	$password = $_POST['Password'];
    echo $password;
    echo $name;
    $sql = "
        INSERT INTO TEAM4
        ([NUME],[PAROLA],[SALT])
        VALUES
        (
            :NUME,
            :PAROLA,
            :SALT
        )
    ";
    function getRandomWord($len = 10)
    {
        $word = array_merge(range('a', 'z'), range('A', 'Z'));
        shuffle($word);
        return substr(implode($word), 0, $len);
    }

    $salt = getRandomWord($len = 10);
    $parola = hash('sha256',$password.$salt);
    $params = array(
        'NUME' => $name,
        'PAROLA' => $parola,
        'SALT' => $salt
    );

    try{
        $stmt = $conn->prepare($sql);
        $stmt -> execute($params);
        if ($stmt)
        {
            $Message = "E ok";
        }
        else 
        {
            $Message = "Nu e ok";
        }
        $Response[] = array("Message"=>$Message);
        echo json_encode($Response);
    }catch(Exception $e){
        echo 'Failure';
    }
?>