<?php 
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>'

echo '<response>'

$repo = $_GET['repo'];
$arrayRepo = array('NoteApp', 'NewsReader','Calculator' );
if(in_array(repo, arrayRepo))
	echo $repo . 'is a valid array';
elseif ($repo=='') {
	echo "Please Enter A Valid repo";
}
else 
	echo "Sorry but, ". $repo . ' Is not a valid Repository;

echo '</response>'

?>