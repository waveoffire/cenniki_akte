<?php

//$sqlStatus="";

$kolor1= "";
$kolor2= "";
$kolor3= "";
$dbhost = '';
$dbuser = '';
$dbpass = '';
$dbb = '';
$dbport = '';
$currDir = plugin_dir_path( __FILE__ );

if($_SERVER['REQUEST_METHOD'] == "POST"){ 

        //uruchamiane po wcićnięciu pierwszego przycisku


                //$fileContents2 = file_put_contents($currDir.'sqlstatus.txt',"");

		$input1 = $_POST['color_main']; //get input text
		$input2 = $_POST['color_back']; //get input text
		$input8 = $_POST['color_head']; //get input text

		$input3 = $_POST['dbhost'];
		$input4 = $_POST['dbname'];
		$input5 = $_POST['dbpass'];
		$input6 = $_POST['dbb'];
		$input7 = $_POST['dbport'];

		$kolor1 = $input1;
		$kolor2 = $input2;
		$kolor3= $input8;
		$dbhost = $input3;
		$dbuser = $input4;
		$dbpass = $input5;
		$dbb = $input6;
		$dbport = $input7;

                //tworzenie tablic
		require_once('klasy/cennik_plotery.php');

		if( class_exists('CennikPluginplotery')){
			$cenAkustyczne = new CennikPluginplotery();
			$cenAkustyczne->connectplotery();
		}



  //uruchamiane po wcićnięciu drugiego przycisku

               
}



?>


    <h1>Cennik Plotery Plugin</h1>
    <?php settings_errors(); ?>
   



<br>
<h4>By umieścić elementy pluginu na stronie zastosuj te CodeSnippetty:<br>
<br>[cennik_plotery]
<br>[cennik_farmerskie]
<br>[cennik_akustyczne]
<br>[cennik_everwood]
<br>[cennik_ecowood]
<br>[cennik_korner]
<br>[cennik_exclusive]

</h4>

</body>
</html>