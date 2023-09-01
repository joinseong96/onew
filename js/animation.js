$(function(){
  var typingBool = false; 
        var typingIdx=0; 
        var liIndex = 0;
        var liLength = $(".typing_txt>p").length;
        var typingTxt = $(".typing_txt>p").eq(liIndex).text(); 
        typingTxt=typingTxt.split(""); 
        if(typingBool==false){ 
            typingBool=true; 
            var tyInt = setInterval(typing,300); 
        } 
        function typing(){ 
          $(".typing p").removeClass("on");
          $(".typing p").eq(liIndex).addClass("on");
          if(typingIdx<typingTxt.length){ 
            $(".typing p").eq(liIndex).append(typingTxt[typingIdx]); 
            typingIdx++; 
          } else{ if(liIndex<liLength-1){
                liIndex++; 
                typingIdx=0;
                typingBool = false; 
                typingTxt = $(".typing_txt>p").eq(liIndex).text(); 
                clearInterval(tyInt);
                setTimeout(function(){
                  tyInt = setInterval(typing,200);
                },200);
                } else if(liIndex==liLength-1){
                  clearInterval(tyInt);
                }
            }
        }

        gsap.registerPlugin(ScrollTrigger);

        $(".mockup_right_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".onew_mockup",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".mockup_left_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".onew_mockup",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".mockup_bottom_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".onew_mockup",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".curation_title").each(function() {
          ScrollTrigger.create({
          trigger: ".curation_title",
          toggleActions: "restart none reverse none",
          start: "top 90%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".onew_curation_slide").each(function() {
          ScrollTrigger.create({
          trigger: ".onew_curation_slide",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });


        $(".curation_bubble01 .bubble_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".curation_bubble01",
          toggleActions: "restart none reverse none",
          start: "top center",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".curation_bubble02 .bubble_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".curation_bubble02",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".curation_bubble03 .bubble_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".curation_bubble03",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".curation_bubble04 .bubble_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".curation_bubble04",
          toggleActions: "restart none reverse none",
          start: "top 90%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".life_style_circle").each(function() {
          ScrollTrigger.create({
          trigger: ".life_style_box",
          toggleActions: "restart none reverse none",
          start: "top 90%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".life_style_title").each(function() {
          ScrollTrigger.create({
          trigger: ".life_style_title",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
      
        $(".develop_title").each(function() {
          ScrollTrigger.create({
          trigger: ".develop_wrap",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".develop_list").each(function() {
          ScrollTrigger.create({
          trigger: ".develop_wrap",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".system_title h2").each(function() {
          ScrollTrigger.create({
          trigger: ".system_title",
          toggleActions: "restart none reverse none",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

          $(".system_mockup01").each(function() {
           ScrollTrigger.create({
           trigger: ".system_top",
           start: "top 80%",
           onEnter: () => $(this).addClass('active'),
           onLeave: () => $(this).removeClass('active'),
           onEnterBack: () => $(this).addClass('active'),
           onLeaveBack: () => $(this).removeClass('active'),
         });
       });

        $(".system_mockup02").each(function() {
          ScrollTrigger.create({
          trigger: ".system_top",
          start: "top 80%",
          // end: 'bottom 10%',
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".system_mockup03").each(function() {
          ScrollTrigger.create({
          trigger: ".system_bottom",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".system_mockup04").each(function() {
          ScrollTrigger.create({
          trigger: ".system_bottom",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

      $(".system_top_title").each(function() {
        ScrollTrigger.create({
        trigger: ".system_top",
        start: "top 80%",
        onEnter: () => $(this).addClass('active'),
        onLeave: () => $(this).removeClass('active'),
        onEnterBack: () => $(this).addClass('active'),
        onLeaveBack: () => $(this).removeClass('active'),
      });
    });
        $(".system_bottom_title").each(function() {
          ScrollTrigger.create({
          trigger: ".system_bottom",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".review_blue_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".review_wrap",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".review_yellow_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".review_wrap",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".review_green_inner").each(function() {
          ScrollTrigger.create({
          trigger: ".review_wrap",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".heart_color").each(function() {
          ScrollTrigger.create({
          trigger: ".review_fin_banner",
          start: "top 80%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
        $(".bell_color").each(function() {
          ScrollTrigger.create({
          trigger: ".review_fin_banner",
          start: "top 60%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });

        $(".review_phone").each(function() {
          ScrollTrigger.create({
          trigger: ".review_fin_banner",
          start: "top 70%",
          onEnter: () => $(this).addClass('active'),
          onLeave: () => $(this).removeClass('active'),
          onEnterBack: () => $(this).addClass('active'),
          onLeaveBack: () => $(this).removeClass('active'),
        });
      });
      


})
        