<?php


/**
*To się odpala podczas odinstalowywania pluginu
*
*@package CennikPlugin
*/

if (!defined('WP_UNINSTALL_PLUGIN')){
	die;
}

//Clear Database Data (przyklad)
/*$books = get_posts(array('post_type' => 'book','numberposts' => '-1'));
foreach( $books as $value )
{
	wp_delete_post($value->ID, true);
}*/

//Access db via sql (alternatywa)
//global $wpdb;
//$wpdb->query("DELETE FROM wp_posts WHERE post_type = 'book'");
//$wpdb->query("DELETE FROM wp_postmeta WHERE post_id NOT IN (SELECT id FROM wp_posts)");
//$wpdb->query("DELETE FROM wp_term_relationships WHERE object_id NOT IN (SELECT id FROM wp_posts)");