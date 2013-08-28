<?php
	$filename = "data/users.json";

	$file = fopen($filename, "r");
	$userlist = json_decode(fread($file, filesize($filename)), true);
	fclose($file);

	$count = 0;
	foreach ($userlist as $key => $val) {
		$script = 'wget --spider -S ' . $val['url'] . ' 2>&1 | grep "HTTP/" | awk \'{print $2}\'';

		exec($script, $output);

		$status[] = array('user' => $val['user'], 'status' => $output[$count]);
		
		$count++;
	}
	unset($val);

	$file = fopen("data/status.json", "w+");
	fwrite($file, json_encode($status));
	fclose($file);
?>