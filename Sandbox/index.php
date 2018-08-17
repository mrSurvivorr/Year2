<?php
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "GET") $query = "_GET";
elseif ($method == "POST") $query = "_POST";
else die("$method is not supported!");

print "<p><b>Method</b>: $method </p>";
print "<p><u>Params:</u></p>";

foreach ($$query as $name => $value)
{
    print "<b>$name</b> = <i>$value</i> <br>";
}
?>