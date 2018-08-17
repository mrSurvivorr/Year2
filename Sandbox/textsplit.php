<?php
$method = $_SERVER["REQUEST_METHOD"];

$words = [];

$words = preg_split("/[\s,]+/",$_GET["text"]);

foreach ($words as $name => $value)
{
    print "<i>$value</i> <br>";
}

print count($words);

?>