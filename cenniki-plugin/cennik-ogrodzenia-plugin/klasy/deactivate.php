<?php


/**
*
*
*@package CennikPlugin
*/

class CennikiPluginDeactivate {

  public static function deactivate() {
      flush_rewrite_rules();
  } 

}
