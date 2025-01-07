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
    <div class="banner-center">
        <div class="content-text-banner-center">
            <p class="text-banner-center">
                <span class="background-text">GASOLINERAS <br><span class="digit">+350</span><br>Gasolineras activas en España</span>
            </p>
            <p class="text-banner-center">
                <span class="background-text">GASOLINERAS <br><span class="digit">+350</span><br>Gasolineras activas en España</span>
            </p>
            <p class="text-banner-center">
                <span class="background-text">GASOLINERAS <br><span class="digit">+350</span><br>Gasolineras activas en España</span>
            </p>
        </div>
        <img src="<?php echo get_template_directory_uri(); ?>/images/banner-center.jpg" class="img-banner-center" alt="Banner Center">
    </div>
    <div class="section-info">
        <div class="section-right rectangles">
            <img src="<?php echo get_template_directory_uri(); ?>/images/gas-station.jpg" class="" alt="Estación de combustible">
        </div>
        <div class="section-text-rectangles rectangles">
            <span class="title-rectangles">Lorem Ipsum is printing</span>
            <p class="text-images text-right">
                Lorem Ipsum is printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div class="section-bottom rectangles img-right">
            <img src="<?php echo get_template_directory_uri(); ?>/images/fuel.jpg" class="" alt="Combustible">
        </div>
        <div class="section-bottom section-text-rectangles rectangles">
            <span class="title-rectangles">Lorem Ipsum is printing</span>
            <p class="text-images text-right">
                Lorem Ipsum is printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        
    </div>
</div>