<?php
	//$filename = "data/raw.json";

	//$file = fopen("data/raw.json", "r");
	//$userlist = json_decode(fread($file, filesize($filename)), true);
	//fclose($file);

	$userlist = $_POST['json'];

	foreach ($userlist as $key => $val) {
		$script = 'wget --spider -S ' . $val['url'] . ' 2>&1 | grep "HTTP/" | awk \'{print $2}\'';

		exec($script, $output);

		$status[] = array('user' => $val['user'], 'status' => $output[0]);
	}
	unset($val);

	$file = fopen("data/status.json", "w+");
	fwrite($file, json_encode($status));
	fclose($file);
?>
