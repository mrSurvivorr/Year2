<?php

$n = 10;

$fh = fopen("rand.dat","w");
if (!$fh) die("Cannot open file");

srand();
for ($i=0; $i < $n; $i++)
{
    $d = rand(0,100);
    fputs($fh,"$d\n");
}

fclose($fh);
?>
