var openPhotoSwipe = function(attachmentId) {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  /*
  var items = [
    {
      src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
      w: 964,
      h: 1024
    },
    {
      src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
      w: 1024,
      h: 683
    }
  ];
  */

  // define options (if needed)
  var options = {
    // history & focus options are disabled on CodePen
    history: false,
    focus: false,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  $.getJSON("http://localhost/odonto/attachments/"+ attachmentId +"/json", function(response) {
    console.log(response);
    var items = [response];
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
  });

};

$(".photoswipe").on("click", function(e) {
  console.log(e.target);
  var attachmentId = $(e.target).data("id");
  openPhotoSwipe(attachmentId);
});
