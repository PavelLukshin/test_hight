
(($) => {
  // When DOM is ready
  $(() => {

    $("#footerForm").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      }
    });

    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true 
    });

    
    $('.burger').click(function(){
      $('.nav-menu').toggleClass('active');
    });

    

    $.getJSON('assets/data/portfolio.json', function(data) {
      const portfolio = $('.portfolio');
      const button = portfolio.find('button');
      const newItem = $('<div class="item new-item"></div>');

      portfolio.append(newItem); 

      button.click(function() {
        $(this).hide();

        for (let i = 0; i < data.items.length; i++) {
          const item = $(`<div class="item-${i+1}">
            <img src="assets/images/icon-${i+1}.png" alt="icon-${i+1}">
            <div class="change">
              <div class="change-img">
                  <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                  <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
              </div>
              <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
            </div>
          </div>`);

          newItem.append(item);
        }
      });
    });
  });

})(jQuery);





