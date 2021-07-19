<?php


/**
*
*
*@package CennikPlugin
*/

class CennikiPluginActivate {

  public static function activate() {
      flush_rewrite_rules();
  } 

}
