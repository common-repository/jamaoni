<?php
/**
 * @package Common
 * @author Faaiq Ahmed
 * @version 1.5.1
 */
/*
Plugin Name: Jamaoni Game
Description: Jamaoni Game for wordpress.
Author: Faaiq Ahmed, Sr Web Developer at Arcgate,faaiqsj@gmail.com
Version: 1.5.1
Author URI: http://arcgate.com/#
*/



add_action('wp_head', 'add_jamaonijs');
function add_jamaonijs() {
	$url = get_bloginfo("url").'/wp-content/plugins/jamaoni';
	print '<script language="javascript" src="'.$url.'/jquery-1.4.2.min.js"></script>';
	print '<script language="javascript" src="'.$url.'/work.js"></script>';
	print '<link rel="stylesheet" href="'.$url.'/drag.css" type="text/css" media="screen" />';

}


add_filter('the_content', 'content_jamaoni');

function content_jamaoni($content) {
	return str_replace('[JAMAONI]','<div id="trag"></div><div id="trash"></div><div id="color">	<input type="text" id="colortext" size="8" value="#c8e544">		</div>		<br style="clear:both;"><br style="clear:both;"><div id="help"><ul><li>Click on Star icon to create new object.</li><li>Drag & Drop new object anywhere on screen</li><li>Drag & Drop object in Black ballon to delete</li><li>Move object over the color box to change color of object same as color box.</li></ul></div>',$content);
}



