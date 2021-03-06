<?php get_header(); ?>

<?php

use Brisum\Lib\ObjectManager;
use Elastic\Product\ProductCategoryService;

$objectManager = ObjectManager::getInstance();
$hasCategory = get_query_var(ProductCategoryService::TAXONOMY_PRODUCT_CATEGORY);

?>

<div class="container">
    <div class="row row-product-grid">
        <div class="col-xs-12 col-md-3">
            <?php $objectManager->create('Elastic\Product\VisualComponent\ProductCategorySidebarMenu')->render(); ?>
        </div>
        <div class="col-xs-12 col-md-9">
            <?php get_template_part('template-parts/product/product'); ?>
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <?php do_action('viewed_products'); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
