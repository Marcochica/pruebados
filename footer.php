<?php
/** 
 * Contiene footer
*/
?>
    <footer>
      <div class="footer-top">
        <div class="footer-logo">
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png" alt="Logo" width="100px" height="100px">
          </a>
        </div>
        <div class="footer-address">
          <span>Contacto</span>
          <p>contacto@empresa.com</p>
          <p>672 843221</p>
        </div>
      </div>
      <div class="section-orange">
        <span>Copyright &copy; <?php echo date("Y"); ?></span>
      <div>
    </footer>
    <?php wp_footer(); ?>
  </body>
</html>