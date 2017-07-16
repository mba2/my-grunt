<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- injector:css -->
  <!-- endinjector -->


  <title>Mario Brusarosco</title>
</head>
<body>

  <div class="l-wrapper-main">
    <?php include_once("../resources/templates/header.php"); ?>

    <main class="l-mainContent l-mainContent--home">
      <picture>
        <source srcset="img/home-bg-03.jpg" media="(min-width:1200px)">
        <source srcset="img/home-bg-02.jpg" media="(min-width:768px)">
        <source srcset="img/home-bg-01.jpg" media="(min-width:0px)">
        <img src="img/home-bg-01.jpg" alt="Mario Brusarosco" title="Mario Brusarosco" />
      </picture>
      <div class="home">
          <h1 style="display:none;">mario brusarosco</h1>
          <p class="home-title home-title--front">front end</p>
          <p class="home-title home-title--dev">developer</p>
      </div>
    </main>

    <button id="js_back-to-top" class="btn btn-back-to-top">
      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
      viewBox="0 0 40 40" xmlns:xlink="http://www.w3.org/1999/xlink">
       <defs>
        <style type="text/css">
         <![CDATA[
          .str0 {stroke:#E45F56;stroke-width:1.99991}
          .fil1 {fill:none}
          .fil0 {fill:white}
         ]]>
        </style>
       </defs>
       <g id="Camada_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <circle class="fil0 str0" cx="20" cy="20" r="18"/>
        <polyline class="fil1 str0" points="12,26 20,14 28,26 "/>
       </g>
      </svg>
    </button>

    <?php include_once("../resources/templates/footer.php"); ?>

  </div>

  <!-- injector:js -->
  <!-- endinjector -->
</body>
</html>
