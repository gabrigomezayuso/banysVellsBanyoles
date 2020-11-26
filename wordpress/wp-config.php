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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'aqHN!@O^qxRC8_MGl#iLl*-qrT&#$ng6x}Z^3wW2OE>,r_g6kgRySUod*ciqj{3P' );
define( 'SECURE_AUTH_KEY',  'N$p)fon]VeF**,|;p_XcS<2Xd5cn%<<ME;gt~J_U8f^t>2f|8Pl#oAF:;&H*P&e?' );
define( 'LOGGED_IN_KEY',    'Ns*9^:m3S1{s[%~:d>Qs@[Fpivb$F-*gb:6! H> ,Q[8%mK[k}fB7:]=b8i+ZqA?' );
define( 'NONCE_KEY',        '+tem@o0rp%IW|2t$<6zR9&ostO^hi(5whxj8;hlh50mM^gL^srv}]/aonrIIB>8J' );
define( 'AUTH_SALT',        ':eRfwLu7NQziAyB-hfQh25B~q,N)1,)Qaa2xp$)H!`0k|ej}:lV8.aErgFrm/85X' );
define( 'SECURE_AUTH_SALT', 'D>)Q7>Tk7){9G0NhORW ZE.2Np{VQQ9y>h/P)?kFT{vj?L}I<N+:_RdINr6! 9QZ' );
define( 'LOGGED_IN_SALT',   '&^]W!J}]_zcBC%fty}@zn<X1cBI)j>TSOnKaK+7qGW)K$IjbUBZU%+)jL9i@;?A?' );
define( 'NONCE_SALT',       ']+I1}~-iu{-:.FIisk5C,$[#-B%ZcHBUN/EJB*^#kVYyb[AN~AYJ~honUGafR2j?' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
