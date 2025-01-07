<?php
/**
 * La plantilla para el contenido que no existe 404 (no funciona)
 */

get_header();
?>
<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <section class="error-404 not-found">
            <header class="page-header">
                <h1 class="page-title"><?php esc_html_e( 'Oops! Esta pagina no funciona.', 'TotalRenting' ); ?></h1>
            </header><!-- .page-header -->

            <div class="page-content">
                <p><?php esc_html_e( 'Parece que no se encontro nada en esta ubicacion. Quizas puedas probar uno de los enlaces a continuación o una busqueda?', 'ninestars' ); ?></p>

                <?php get_search_form(); ?>
            </div><!-- .page-content -->
        </section><!-- .error-404 -->

    </main><!-- #main -->
</div><!-- #primary -->
<?php
get_footer();