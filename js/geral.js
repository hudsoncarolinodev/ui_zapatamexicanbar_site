$(function(){


	/*****************************************
		SCRIPTS PÁGINA INICIAL
	*******************************************/
	
	//CARROSSEL DE DESTAQUE
	$("#carrosselDestaque").owlCarousel({
		items : 1,
        dots: true,
        loop: false,
        lazyLoad: true,
        mouseDrag:true,
        touchDrag  : true,	       
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    smartSpeed: 450,		    
	    
	});
	//CARROSSEL DE PROMOÇÕES
	$("#carrosselPromocao").owlCarousel({
		items : 1,
        dots: true,
        loop: false,
        lazyLoad: true,
        mouseDrag:true,
        touchDrag  : true,	       
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    smartSpeed: 450,		    
	    
	});
	// ÁREA DE PROMÇÕES
	$.fn.isOnScreen = function(){
		var viewport = {};
		viewport.top = $(window).scrollTop();
		viewport.bottom = viewport.top + $(window).height();
		var bounds = {};
		bounds.top = this.offset().top;
		bounds.bottom = bounds.top + this.outerHeight();
		return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
	};

	var testeMostrarVisita = false;
	$( window ).scroll(function() {
		if ($('.areaReservas').isOnScreen() == true && testeMostrarVisita == false) {
			setTimeout(function(){
				$(".imgIlustrativa").fadeIn(100);
			}, 200);
			testeMostrarVisita = true;
		};
	});
	
	/*****************************************
		SCRIPTS PÁGINA DE PROMOÇÕES
	*******************************************/
	//CARROSSEL DE PROMOÇÕES
	$("#carrosselPromocaoCardapio").owlCarousel({
		items : 1,
        dots: true,
        loop: false,
        lazyLoad: true,
        mouseDrag:true,
        touchDrag  : true,	       
	    autoplayTimeout:5000,
	    autoplayHoverPause:true,
	    smartSpeed: 450,		    
	    
	});
	/*****************************************
		SCRIPTS PÁGINA DE CARDÁPIO
	*******************************************/
	 <!--//--><![CDATA[//><!--
		jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"bk_theme","theme_token":"hNV1B2naH0bl7xg-zmeeQ6wPRxqx22BTar9hdH71ALY","js":{"sites\/all\/modules\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"sites\/all\/modules\/jquery_update\/replace\/ui\/external\/jquery.cookie.js":1,"sites\/all\/modules\/contentanalysis\/contentanalysis.js":1,"sites\/all\/modules\/contentoptimizer\/contentoptimizer.js":1,"sites\/all\/modules\/webform_steps\/webform_steps.js":1,"public:\/\/languages\/pt-br_gWKxgjjdGl4Tq4AH51DVNdK0dtPrLcmDVA-xOfTdXc8.js":1,"sites\/all\/modules\/authcache\/authcache.js":1,"sites\/all\/modules\/google_analytics\/googleanalytics.js":1,"0":1,"sites\/all\/themes\/custom\/bk_theme\/bower_components\/matchHeight\/jquery.matchHeight-min.js":1,"sites\/all\/themes\/custom\/bk_theme\/js\/vendor\/modernizr-min.js":1,"sites\/all\/themes\/custom\/bk_theme\/js\/plugins\/plugins.js":1,"sites\/all\/themes\/custom\/bk_theme\/js\/plugins\/homePlugins.js":1,"sites\/all\/themes\/custom\/bk_theme\/js\/main.js":1,"sites\/all\/modules\/bk_locations\/js\/bk_locations.js":1,"sites\/all\/modules\/bk_theme_override\/BR\/js\/BR.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"sites\/all\/modules\/bk_country_flag\/css\/bk_country_flag.css":1,"sites\/all\/modules\/bk_country_flag\/libraries\/flag-icon-css\/css\/flag-icon.min.css":1,"modules\/comment\/comment.css":1,"sites\/all\/modules\/date\/date_api\/date.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/views\/css\/views.css":1,"sites\/all\/modules\/ckeditor\/css\/ckeditor.css":1,"sites\/all\/modules\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/panels\/css\/panels.css":1,"sites\/all\/modules\/panels\/plugins\/layouts\/onecol\/onecol.css":1,"sites\/all\/themes\/custom\/bk_theme\/styles\/system.menus.css":1,"sites\/all\/themes\/custom\/bk_theme\/css\/styles.css":1,"sites\/all\/themes\/custom\/bk_theme\/css\/jquery.smartbanner.css":1,"sites\/all\/themes\/custom\/bk_theme\/bower_components\/fontawesome\/css\/font-awesome.min.css":1,"sites\/all\/themes\/custom\/bk_theme\/css\/override.css":1,"sites\/all\/modules\/bk_theme_override\/BR\/css\/BR.css":1}},"authcache":{"q":"taxonomy\/term\/4","cp":{"path":"\/","domain":".burgerking.com.br","secure":false},"cl":0.041666666666667},"better_exposed_filters":{"views":{"menu_page_categories_top_nav":{"displays":{"block":{"filters":[]}}},"menu_page_header":{"displays":{"block_1":{"filters":[]}}},"menu_page_image_top":{"displays":{"block":{"filters":[]}}},"bk_menu_page_grid":{"displays":{"block":{"filters":[]}}},"menu_page_gutter_images":{"displays":{"block":{"filters":[]}}},"menu_page_image":{"displays":{"block_1":{"filters":[]}}},"menu_page_json_string":{"displays":{"block":{"filters":[]}}},"menu_categories_page_gutter_images":{"displays":{"block":{"filters":[]}}}}},"googleanalytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"},"language":{"language":"pt-br","provider":null},"locations":{"map_city":"Bras\u00edlia, BR","map_lat":"-15.791530","map_long":"-47.881625","map_country":"BR"},"banner":{"smartBannerMobile":false,"smartBannerAndroidURI":"https:\/\/play.google.com\/store\/apps\/details?id=com.emn8.mobilem8.nativeapp.bk\u0026hl=en_GB","smartBannerAppleURI":"https:\/\/itunes.apple.com\/gb\/app\/burger-king-app\/id638323895?mt=8\u0026ign-mpt=uo%3D4"}});
	//--><!]]>

	/*****************************************
		SCRIPTS GERAIS
	*******************************************/
	// SCRIPTS HEIGHT 100% MODAL
	$('.modalGeral').css({'height':($(document).height()-122)+'px'});
	$(window).resize(function(){
		$('.modalGeral').css({'height':($(document).height()-122)+'px'});
	});

	//FUNÇÃO DE CLIQUE BTNS RESERVA
	$(".btnReserva").click(function(e) {
	 	 $(".fazerReserva").fadeIn("slow");
	 	 setTimeout(function(){
			$(".formReserva").slideDown("slow");
		}, 200);
	});
	$(".closeModal").click(function(e) {
	 	$(".formReserva").fadeOut("slow");
	 	setTimeout(function(){
 			$(".fazerReserva").slideUp("slow");
 		}, 200);
	});

	//FUNÇÃO DE CLIQUE BTNS RESERVA
	$(".btnReservaRestorando").click(function(e) {
	 	 $(".fazerReserva").fadeIn("slow");
	 	 setTimeout(function(){
			$(".formReserva").slideDown("slow");
		}, 200);
	});
	$(".closeModal").click(function(e) {
	 	$(".formReserva").fadeOut("slow");
	 	setTimeout(function(){
 			$(".fazerReserva").slideUp("slow");
 		}, 200);
	});

	/*****************************************
		CARROSSEL DE PRODUTOS PÁGINA INCIAL
	*******************************************/
	// $("#carrosselProdutosSingle").owlCarousel({
	// 	items : 4,
 //        dots: true,
 //        loop: false,
 //        lazyLoad: true,
 //        mouseDrag:true,
 //        touchDrag  : true,	       
	//     autoplayTimeout:5000,
	//     autoplayHoverPause:true,
	//     animateOut: 'fadeOut',
	//     smartSpeed: 450,		    
	//     responsiveClass:true,			    
 //        responsive:{
 //            320:{
 //                items:1
 //            },
 //            600:{
 //                items:2
 //            },
           
 //            991:{
 //                items:2
 //            },
 //            1024:{
 //                items:3
 //            },
 //            1440:{
 //                items:4
 //            },
            			            
 //        }		    		   
	    
	// });
		
});