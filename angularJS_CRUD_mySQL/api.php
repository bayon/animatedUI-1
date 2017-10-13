<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("mysql", "bayonforte", "ph0rt3w0rk$", "tickets");

$result = $conn->query("SELECT * FROM tickets.snips");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"Id":"'  . $rs["id"] . '",';
    $outp .= '"Snip":"'   . $rs["snip"]        . '",';
    $outp .= '"Description":"'   . $rs["desc"]        . '",';
    $outp .= '"SnipType":"'. $rs["snip_type"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
