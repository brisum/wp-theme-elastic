<?php /* Template Name: На всю ширину */ ?>
<?php get_header(); ?>

<?php

use Brisum\Lib\ObjectManager;

the_post();

global $post;
$objectManager = ObjectManager::getInstance();
$pageName = $post->post_name;

?>
<div class="container">
    <div class="row">
        <div class="col-xs-12 col-md-12">
            <?php get_template_part('template-parts/page/page', $post->post_name); ?>
        </div>
    </div>
</div>

<?php get_footer(); ?>
