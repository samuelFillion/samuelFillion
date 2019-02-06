$(document).ready(function() {
 /*
  $(".menu-icon").on("click", function(){
    	$(this).toggleClass("open");
    	$(".container").toggleClass("nav-open");
    	$("nav ul li").toggleClass("animate");
  });
  */
  $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['accueil', 'apropos', 'projets', 'contact'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Accueil', 'À propos', 'Projets', 'Contact'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      scrollOverflow: false,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      resize : false,
      sectionsColor: ['#000', '#000', '#000', '#000'],
      //sectionsColor: ['#0A0A0A', '#141414', '#0A0A0A', '#141414'],
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
})