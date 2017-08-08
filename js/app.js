// INSTAFEED
if(document.getElementById("right-insfeed") != null){
  var userFeed = new Instafeed({
    get: 'user',
    userId: '2213767037',
    accessToken: '2213767037.fde741c.de8a2b390fba4382af338eafbe9bb66a',
    template: "<span><a href='{{link}}' target='blank' title='{{caption}}'><img src='{{image}}' alt='{{caption}}'></a></span>",
    limit: 4,
    target: "right-insfeed"
  });
  userFeed.run();
}
var pageFeed = new Instafeed({
    get: 'user',
    userId: '2213767037',
    accessToken: '2213767037.fde741c.de8a2b390fba4382af338eafbe9bb66a',
template: "<div class='column small-6 medium-3 large-3'><a href='{{link}}' target='blank' title='{{caption}}'><img src='{{image}}' alt='{{caption}}'></a></div>",
    limit: 8,
    target: "bottom-insta"
});
pageFeed.run();
jQuery(document).ready(function($) {
  s_li = $(".search");
  s_btn = s_li.children('a');
  m_b = $(".mobile-back");
  m_m = $(".mobile-btn");
  mn = $("#top-bar .left-nav ul");
  // SEARCH
  s_btn.click(function(event) {
    event.preventDefault();
    s_li.addClass('searching');
    s_li.children('input').trigger('click');
  });
  // OUT FOCUS
  $(document).click(function(event) {
    e_t = $(event.target);
    if(s_li.hasClass('searching')){
      if(!e_t.hasClass('search') && !e_t.parents('li').hasClass('search')){
        s_li.removeClass('searching');
      }
    }
    if(e_t.is(m_m) || e_t.parents('a').is(m_m)){
      event.preventDefault();
      mn.addClass('mobile-open');
    }else if(e_t.is(m_b) || e_t.parents('a').is(m_b)){
      event.preventDefault();
      mn.removeClass('mobile-open');
    }else{
      if(mn.hasClass('mobile-open')){
        if(!e_t.hasClass('mobile-open') && !e_t.parents('ul').hasClass('mobile-open')){
          mn.removeClass('mobile-open');
        }
      }
    }
  });
});
