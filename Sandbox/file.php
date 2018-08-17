<?php

$fh = fopen("file.php","r");
if (!$fh) die("Cannot open file");

while (!feof ($fh))
{
    $line = fgets($fh);
    echo $line,"<br>";
}
fclose($fh);

?>
