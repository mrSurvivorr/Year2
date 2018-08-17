<?php
	$method = $_SERVER["REQUEST_METHOD"];

	$string = "This string is not reversed. hguoht si eno sihT";
	$words = [];
	$sentences = [];
	$symbol_count_gen = 0;
	$symbol_count = 0.0;
	$word_count = 0;
	
	$words = preg_split("/[\s,.;:!?]+/",$string);
	$sentences = preg_split("/[.!?]+/",$string);
	
	$string_rev = strrev($string);
	
	for($i = 0; $i<sizeof($words); $i++){
		
		$symbol_count_gen += strlen($words[i]);
	}
	
	$symbol_count = $symbol_count_gen/sizeof($words);
	
	echo $string;
	echo "<br>";
	echo $string_rev;
	echo "<br>";
	echo "Average ammount of characters per word: ";
	echo $symbol_count;

?>