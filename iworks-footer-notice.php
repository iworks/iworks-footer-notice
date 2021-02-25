<?php
/*
Plugin Name: iWorks Footer Notice
Text Domain: iworks-footer-notice
Plugin URI: http://iworks.pl/iworks-footer-notice/
Description: Super Simple footer notice (policy + GDPR + cookie).
Version: 1.0.0
Author: Marcin Pietrzak
Author URI: http://iworks.pl/
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Copyright 2021 Marcin Pietrzak (marcin@iworks.pl)

this program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

 */

if ( ! defined( 'WPINC' ) ) {
	die;
}
/**
 * i18n
 */
load_plugin_textdomain( 'iworks-footer-notice', false, plugin_basename( dirname( __FILE__ ) ) . '/languages' );
/**
 * load
 */
require_once 'class-iworks-footer-notice.php';
/**
 * run
 */
new iWorks_Footer_Notice;

