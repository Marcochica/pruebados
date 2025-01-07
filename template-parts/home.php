<?php
/**
 * Plantilla Home
*/
?>

<div>
    <div class="banner-home">
        <p class="text-banner">Lorem Ipsum is printing and typesetting industry.</p>
        <img src="<?php echo get_template_directory_uri(); ?>/images/banner-home.jpg" alt="Banner Home">
    </div>
    <div class="text-search">
        <p>Utiliza el buscador para encontrar la gasolinera más cercana a tu ubicación</p>
        <input
        id="pac-input"
        class="controls"
        type="text"
        placeholder="Buscar Dirección"
        />
    </div>
    <div id="map"></div>
</div>