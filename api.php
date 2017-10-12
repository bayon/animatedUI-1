<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

    $HOST = "mysql";
    $USER = "bayonforte";
    $PASS = "ph0rt3w0rk$";
    $DB="forte";
    $TABLE="contacts";
    $con=mysqli_connect($HOST,$USER,$PASS,$DB);

  if(isset($_GET['search'])){

    //  echo(json_encode($_GET));

      $search = $_GET['search'];


        // Check connection
        if (mysqli_connect_errno())
          {
          echo ('{ "Failed to connect to MySQL" : "'.mysqli_connect_error().'" }');
          }
        $sql="SELECT * FROM ".$TABLE."   ";


        $result=mysqli_query($con,$sql);
        while($row=mysqli_fetch_assoc($result)){
           $data[] = $row;
        }
        $json = json_encode($data);
        echo($json);
        // Free result set
        mysqli_free_result($result);
        mysqli_close($con);

   } else{
     echo('
       {"result":"error"}
     ');
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
