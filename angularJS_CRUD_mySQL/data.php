<?php

    $HOST = "localhost";
    $USER = "root";
    $PASS = "";
    $DB="snippets";
    $TABLE="snips";
    $con=mysqli_connect($HOST,$USER,$PASS,$DB);

  if(isset($_GET['search'])){
        $search = $_GET['search'];
        // Check connection
        if (mysqli_connect_errno())
          {
          echo "Failed to connect to MySQL: " . mysqli_connect_error();
          }
        $sql="SELECT * FROM ".$TABLE." WHERE Concat(name,descrip,code,language) LIKE '%".$search."%' ";

        $result=mysqli_query($con,$sql);
        while($row=mysqli_fetch_assoc($result)){
           $data[] = $row;
        }
        $json = json_encode($data);
        echo($json);
        // Free result set
        mysqli_free_result($result);
        mysqli_close($con);

   }else{

      $postdata = file_get_contents("php://input");
      $request = json_decode($postdata);
      if($request->method ==="add"){
          $sql = "INSERT INTO `snips` (`id`, `name`, `descrip`, `code`, `language`) VALUES (NULL, '".$request->name."', '".$request->descrip."', '".$request->code."', '".$request->language."');";
      }
      if($request->method ==="update"){
        $sql = "UPDATE `snippets`.`snips` set `name` = '$request->name', `descrip` = '$request->descrip', `code` = '$request->code', `language` = '$request->language' WHERE `id` = $request->id ;";
      }
      if($request->method ==="delete"){
        $sql = "DELETE FROM `snippets`.`snips`  WHERE `id` = $request->id ;";
        //echo($sql);
      }
      exe_sql($con, $sql);

   }
  function exe_sql($con, $sql) {
   		$res = mysqli_query($con, $sql);
   		if (mysqli_connect_errno())  {
   		  echo "Failed to connect to MySQL: " . mysqli_connect_error();
   		}
   		if (gettype($res) == "boolean") {
   			//INSERT creates a boolean for $res
   			//return last id
   			return mysqli_insert_id($con);
   		}
    	$data = "";
   		while ($row = mysqli_fetch_assoc($res)) {
   			$data[] = $row;
   		}
   		mysqli_free_result($res);
   		mysqli_close($con);
   		return json_encode($data);
   	}
 ?>
