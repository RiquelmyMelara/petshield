<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'petshieldinsurance');

/** MySQL database username */
define('DB_USER', 'petshield');

/** MySQL database password */
define('DB_PASSWORD', 'petshieldinsurance2017!');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
//define('AUTH_KEY',         'put your unique phrase here');
//define('SECURE_AUTH_KEY',  'put your unique phrase here');
//define('LOGGED_IN_KEY',    'put your unique phrase here');
//define('NONCE_KEY',        'put your unique phrase here');
//define('AUTH_SALT',        'put your unique phrase here');
//define('SECURE_AUTH_SALT', 'put your unique phrase here');
//define('LOGGED_IN_SALT',   'put your unique phrase here');
//define('NONCE_SALT',       'put your unique phrase here');
define('AUTH_KEY',         'r2*WbSsE)6U5X*ZLWn}rMgMNUjk;WQa+FV%$97+qv{C|t2C{0+cmb,ZMN&rin:cM');
define('SECURE_AUTH_KEY',  'THw/Ry?;50X`uOF0:i(p9~X!|CJI)f<isNCh3gmcPd&E_<4b8kQo(q+}OVvOGU%Y');
define('LOGGED_IN_KEY',    'b7+qqgsl[j*n$((EA}sS.lZa{DPUu*;)OQ/:K|9XL,1]nNat3h-z%/<6?:PMY#md');
define('NONCE_KEY',        'I}_)rH#2_+cDG,+R:y+mgZ7&/r>zJ}48+N}OYQ.A=>@(,6>}zfr};2}GehWks#GR');
define('AUTH_SALT',        'r>iR}+*ab!dO]03QF`B@x4-eZx{g]]X} bsj/)<Dv(DT~+ *;]$B`RW.5ueCnJzt');
define('SECURE_AUTH_SALT', '$E>`tZ,vG_R_==@:5+DgM$_4b5T V2/zL&Jpg%:dUCxGa%7PTvb.3;5Sb`A$|$PB');
define('LOGGED_IN_SALT',   'nh1C4wbE2MlYn`PoyPzX#^a*/1 ~|K#Ou&Yz!WRj@|fkuD-u?160$j_;Wj!)55J@');
define('NONCE_SALT',       '^4P+:%;TpU}y/20C[!b>U2v1<Fskh1!-gCt5X$+EO|HL*N{.a&o+(;_V?=k1lz`l');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
define('FS_METHOD', 'direct');
ini_set( 'upload_max_size' , '100M' );
