<?php
/**
 * Cart totals
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/cart/cart-totals.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you (the theme developer).
 * will need to copy the new files to your theme to maintain compatibility. We try to do this.
 * as little as possible, but it does happen. When this occurs the version of the template file will.
 * be bumped and the readme will list any important changes.
 *
 * @see           http://docs.woothemes.com/document/template-structure/
 * @author        WooThemes
 * @package       WooCommerce/Templates
 * @version       2.3.6
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

?>
<div class="col-md-6 p-r-10 ">
	<div class="table-responsive <?php if ( WC()->customer->has_calculated_shipping() ) {
		echo 'calculated_shipping';
	} ?>">

		<?php do_action( 'woocommerce_before_cart_totals' ); ?>

		<h4><?php esc_html_e( 'Cart Subtotal', 'polo' ); ?></h4>

		<table cellspacing="0" class="table">

			<tr class="cart-subtotal">
				<td class="cart-product-name"><strong><?php esc_html_e( 'Cart Subtotal', 'polo' ); ?></strong></td>
				<td data-title="<?php esc_html_e( 'Subtotal', 'polo' ); ?>" class="cart-product-name text-right"><?php wc_cart_totals_subtotal_html(); ?></td>
			</tr>

			<?php foreach ( WC()->cart->get_coupons() as $code => $coupon ) : ?>
				<tr class="cart-discount coupon-<?php echo esc_attr( sanitize_title( $code ) ); ?>">
					<td class="cart-product-name"><strong><?php wc_cart_totals_coupon_label( $coupon ); ?></strong></td>
					<td data-title="<?php wc_cart_totals_coupon_label( $coupon ); ?>" class="cart-product-name text-right"><?php wc_cart_totals_coupon_html( $coupon ); ?></td>
				</tr>
			<?php endforeach; ?>



			<?php foreach ( WC()->cart->get_fees() as $fee ) : ?>
				<tr class="fee">
					<td class="cart-product-name"><strong><?php echo esc_html( $fee->name ); ?></strong></td>
					<td data-title="<?php echo esc_html( $fee->name ); ?>" class="cart-product-name text-right"><?php wc_cart_totals_fee_html( $fee ); ?></td>
				</tr>
			<?php endforeach; ?>

			<?php if ( wc_tax_enabled() && 'excl' === WC()->cart->tax_display_cart ) :
				$taxable_address = WC()->customer->get_taxable_address();
				$estimated_text = WC()->customer->is_customer_outside_base() && ! WC()->customer->has_calculated_shipping()
					? sprintf( ' <small>(' . esc_attr__( 'estimated for %s', 'polo' ) . ')</small>', WC()->countries->estimated_for_prefix( $taxable_address[0] ) . WC()->countries->countries[ $taxable_address[0] ] )
					: '';

				if ( 'itemized' === get_option( 'woocommerce_tax_total_display' ) ) : ?>
					<?php foreach ( WC()->cart->get_tax_totals() as $code => $tax ) : ?>
						<tr class="tax-rate tax-rate-<?php echo sanitize_title( $code ); ?>">
							<td class="cart-product-name"><strong><?php echo esc_html( $tax->label ) . $estimated_text; ?></strong></td>
							<td data-title="<?php echo esc_html( $tax->label ); ?>" class="cart-product-name text-right"><?php echo wp_kses_post( $tax->formatted_amount ); ?></td>
						</tr>
					<?php endforeach; ?>
				<?php else : ?>
					<tr class="tax-total">
						<td class="cart-product-name"><strong><?php echo esc_html( WC()->countries->tax_or_vat() ) . $estimated_text; ?></strong></td>
						<td data-title="<?php echo esc_html( WC()->countries->tax_or_vat() ); ?>" class="cart-product-name text-right"><?php wc_cart_totals_taxes_total_html(); ?></td>
					</tr>
				<?php endif; ?>
			<?php endif; ?>

			<?php do_action( 'woocommerce_cart_totals_before_order_total' ); ?>

			<tr class="order-total">
				<td class="cart-product-name"><strong><?php esc_html_e( 'Total', 'polo' ); ?></strong></td>
				<td data-title="<?php esc_html_e( 'Total', 'polo' ); ?>" class="cart-product-name text-right">
					<?php wc_cart_totals_order_total_html(); ?>
				</td>
			</tr>

			<?php do_action( 'woocommerce_cart_totals_after_order_total' ); ?>

		</table>

		<?php do_action( 'woocommerce_proceed_to_checkout' ); ?>

		<?php do_action( 'woocommerce_after_cart_totals' ); ?>

	</div>
</div><!--col-md-6 p-r-10 -->
