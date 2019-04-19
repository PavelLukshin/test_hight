
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


    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
      $hamburger.toggleClass("is-active");
      // Do something else, like open/close menu
    });

    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true 
    });


    
    $('.burger').click(function(){
      $('.nav-menu').toggleClass('active');
    });

    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      gutter: 30
    });



    $.getJSON('assets/data/portfolio.json', function(data) {
      const portfolio = $('.portfolio');
      const button = portfolio.find('button');
      const newItem = $('<div class="grid newItem"></div>');

      portfolio.append(newItem); 

      button.click(function() {
        $(this).hide();

        for (let i = 0; i < 1; i++) {
          const item = $(`<div class="grid-item grid-item--height2 item-1">
            <img src="assets/images/icon-1.png" alt="icon-1">
            <div class="change">
                <div class="change-img">
                    <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                    <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
                </div>
                <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
              </div>
          </div>
          <div class="grid-item item-2">
          <img src="assets/images/icon-2.png" alt="icon-2">
          <div class="change">
              <div class="change-img">
                  <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                  <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
              </div>
              <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
          </div>
        </div>
        <div class="grid-item item-3">
        <img src="assets/images/icon-3.png" alt="icon-3">
        <div class="change">
            <div class="change-img">
                <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
            </div>
            <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
        </div>
      </div>
      <div class="grid-item item-4">
        <img src="assets/images/icon-4.png" alt="icon-4">
        <div class="change">
            <div class="change-img">
                <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
            </div>
            <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
        </div>
      </div>
      <div class="grid-item grid-item--height2 item-5">
        <img src="assets/images/icon-5.png" alt="icon-5">
        <div class="change">
            <div class="change-img">
                <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
            </div>
            <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
        </div>
      </div>
      <div class="grid-item item-6">
        <img src="assets/images/icon-6.png" alt="icon-6">
        <div class="change">
            <div class="change-img">
                <a href="#"><img src="assets/images/icon-eye.png" alt="eye"></a>
                <a href="#"><img src="assets/images/icon-heart.png" alt="heart"></a>
            </div>
            <p>${data.items[i].title}<br><span>${data.items[i].description}</span></p>
        </div>
      </div>
      <div class="grid-item item-7">
        <img src="assets/images/icon-7.png" alt="icon-7">
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





