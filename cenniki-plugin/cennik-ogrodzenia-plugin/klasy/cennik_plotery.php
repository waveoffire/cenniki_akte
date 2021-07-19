<?php


/**
*
*
*@package CennikPlugin
*/


class CennikPluginplotery extends CennikPlugin {
 //$nazwaHTML = 'cennik_akustyczne.html';

	function enqueue()
	{
            add_shortcode('cennik_plotery',array($this,'wypiszPlotery'));
            add_shortcode('cennik_farmerskie',array($this,'wypiszFarmerskie'));
            add_shortcode('cennik_akustyczne',array($this,'wypiszAkustyczne'));
            add_shortcode('cennik_everwood',array($this,'wypiszEverwood'));
            add_shortcode('cennik_ecowood',array($this,'wypiszEcowood'));
            add_shortcode('cennik_korner',array($this,'wypiszKorner'));
            add_shortcode('cennik_exclusive',array($this,'wypiszExclusive'));
        }

        function wypiszPlotery($atts) {
	 
          $currDir = plugin_dir_path( __FILE__ );
          $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'ploteryCennik.html');
      
          return $fileContents;
      }
      function wypiszFarmerskie($atts) {
	 
        $currDir = plugin_dir_path( __FILE__ );
        $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'farmerskieCennik.html');
    
        return $fileContents;
    }
    function wypiszAkustyczne($atts) {
	 
      $currDir = plugin_dir_path( __FILE__ );
      $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'akustyczneCennik.html');
  
      return $fileContents;
  }
  function wypiszEverwood($atts) {
	 
    $currDir = plugin_dir_path( __FILE__ );
    $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'everwoodCennik.html');

    return $fileContents;
}
function wypiszEcowood($atts) {
	 
  $currDir = plugin_dir_path( __FILE__ );
  $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'ecowoodCennik.html');

  return $fileContents;
}
function wypiszKorner($atts) {
	 
  $currDir = plugin_dir_path( __FILE__ );
  $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'kornerCennik.html');

  return $fileContents;
}
function wypiszExclusive($atts) {
	 
  $currDir = plugin_dir_path( __FILE__ );
  $fileContents = file_get_contents($currDir.'DokumentyHTML/'.'exclusiveCennik.html');

  return $fileContents;
}
}