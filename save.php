<?php
	$json = $_POST['json'];

	$file = fopen("data/raw.json", "w+");
	fwrite($file, json_encode($json));
	fclose($file);
?>
