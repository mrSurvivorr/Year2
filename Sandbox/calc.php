<?php
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "GET") $query = "_GET";
elseif ($method == "POST") $query = "_POST";
else die("$method is not supported!");

$q = $$query;

$a = $q["A"];
$b = $q["B"];
$op = $q["op"];

switch ($op)
{
    case '+': $result = (int)$a + (int)$b; break;
    case '-': $result = (int)$a - (int)$b; break;
    case '*': $result = (int)$a * (int)$b; break;
    case '/':
        {
            if ($b == '0') die("divide by zero!");
        }
    default: die("operator $op is not defined");
}
print "<p>Result: $a $op $b = $result </p>";
print "<p><a href=".$_SERVER['HTTP_REFERER'].">Back</a></p>";
?>
