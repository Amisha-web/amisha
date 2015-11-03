<?php

	$left = rand(20, 45);
	$top = rand(20, 50);
	//$top = 25;
	$kat = rand(13, 42);
	$pm = rand(0,1);

	if ($pm == 0){
		$kat = -$kat;
	}
?>

div.calosc{
	width: 310px;
	max-width: 500 px;
	margin: 0 auto;
	text-align : center;
	border: thick dotted 3px;
	position: absolute;
	top: <?php echo ($top) ?>%;
	left: <?php echo ($left) ?>%;
	transform:rotate(<?php echo ($kat) ?>deg);
	-webkit-transform:rotate(<?php echo ($kat) ?>deg); 
	-moz-transform:rotate(<?php echo ($kat) ?>deg); 
	-o-transform:rotate(<?php echo ($kat) ?>deg);
}