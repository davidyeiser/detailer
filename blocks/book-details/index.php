<?php

namespace DavidYeiser\Detailer\Blocks\BookDetails;

add_action('plugins_loaded', __NAMESPACE__ . '\register_dynamic_block');

function register_dynamic_block() {
	// Only load if Gutenberg is available.
	if (!function_exists('register_block_type')) {
		return;
	}

	// Hook server side rendering into render callback
	// Make sure name matches registerBlockType in ./index.js
	register_block_type('davidyeiser-detailer/book-details', array(
		'render_callback' => __NAMESPACE__ . '\render_dynamic_block'
	));
}

function render_dynamic_block($attributes) {
  // Parse attributes
  $book_details_title = $attributes['title'];
  $book_details_author = $attributes['author'];
  $book_details_summary = $attributes['summary'];

  ob_start(); // Turn on output buffering
	/* BEGIN HTML OUTPUT */
?>
  <div class="block-book-details">
    <h3 class="block-book-details-title"><?php echo $book_details_title; ?></h3>
    <span class="block-book-details-author"><?php echo $book_details_author; ?></span>

    <div class="block-book-details-summary">
      <?php echo $book_details_summary; ?>
    </div>
  </div>
<?php
	/* END HTML OUTPUT */
  ob_flush(); // Print output

  return ob_end_clean(); // Turn off output buffering
}
