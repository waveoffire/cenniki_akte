<?php
/**
 *@package CennikPlugin
 *
 */
/*
 Plugin Name: Cennik Plotery Plugin
 Plugin URI: https://plotery.org/plugin
 Description: Plugin do tworzenia cenników 
 Version: 1.0.0
 Author: Anakondowy Adrian
 Author URI: https://plotery.org
 License: GPLv2 or later
 Text Domain: cennik-plotery-plugin
 */

//MUSI BYĆ
defined('ABSPATH') or die('No access to this file (wat?)');

 require_once('klasy/cennik_plotery.php');


class CennikPlugin
{
        
 	public $plugin='';

        function __construct(){
	
		$this -> plugin = plugin_basename(__FILE__);
	}
	 
	public function register() {
		 add_action('wp_enqueue_scripts',array($this, 'enqueue'));//wp or wdmin
                 

	}

        public function menu(){
                add_action('admin_menu', array($this, 'add_admin_pages'));//to tworzy menu
                
        }

	public function add_action_links( $links ){
		
	}

	public function add_admin_pages(){
		add_menu_page('Cennik Plugin','Cennik Plotery','manage_options','cennik_i_kalk_plugin',array($this,'admin_index'),'dashicons-store',109);
               
	}
	
	public function admin_index() {
		//wymaganie templatki
		require_once plugin_dir_path(__FILE__).'admin.php';
	}

	public function subpage_index() {
		//wymaganie templatki
		require_once plugin_dir_path(__FILE__).'obsluga_bazy.php';
	}

        function activate(){
		//$this->custom_post_type();
		flush_rewrite_rules();
               
        }
	
	function deactivate(){
		flush_rewrite_rules();
        }
	
	public function enqueue()
	{
		//enqueue all scripts

		
	}


	
	

}

if(class_exists('CennikPlugin')){
   $cenPlugin = new CennikPlugin();
   $cenPlugin->register();
   $cenPlugin->menu();
   //CennikPlugin::register();
}

  if( class_exists('CennikPluginplotery')){
     $cenplotery = new CennikPluginplotery();
     $cenplotery->register();
  }



  

  //aktywacja
  register_activation_hook(__FILE__, array( $cenPlugin , 'activate') );//~~add_action

  //deaktywacja
  register_deactivation_hook(__FILE__, array( $cenPlugin,'deactivate') );




