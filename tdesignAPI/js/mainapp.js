var $type = "smartven_analog",
  $color = "black",
  $y_pos = "front",
  $nos_icons = 0,
  $nos_text = 0,
  $custom_img = 0,
  $number_front = 0,
  $number_back = 0;
$(document).ready(function () {
  //ONLOAD
  $("#preview_front").css(
    "background-image",
    "url(tdesignAPI/images/product/" + $type + "/" + $type + "_front.png) "
  );
  $("#preview_side").css(
    "background-image",
    // "url(tdesignAPI/images/product/" + $type + "/" + $type + "_side.png) "
    "url(tdesignAPI/images/product/smartven_analog/smartven_analog_side.png) "
  );
  //$("#preview_front, #preview_side , #preview_left, #preview_right").css('background-color', 'blue') ;
  $("#preview_front,.T_type").removeClass("dis_none");
  $(
    "#preview_side,.color_pick,.default_samples,.custom_icon,.custom_font"
  ).addClass("dis_none");
  //$('.modal').css('dispaly','none');

  //ONLOAD OVER

  /*==========================SWITCH MENU===========================*/
  $(".sel_type").click(function () {
    $(".T_type").removeClass("dis_none");
    $(".color_pick,.default_samples,.custom_icon,.custom_font").addClass(
      "dis_none"
    );
  });
  $(".sel_color").click(function () {
    $(".color_pick").removeClass("dis_none");
    $(".T_type,.default_samples,.custom_icon,.custom_font").addClass(
      "dis_none"
    );
  });
  $(".sel_art").click(function () {
    $(".default_samples").removeClass("dis_none");
    $(".T_type,.color_pick,.custom_icon,.custom_font").addClass("dis_none");
  });
  $(".sel_custom_icon").click(function () {
    $(".custom_icon").removeClass("dis_none");
    $(".T_type,.color_pick,.default_samples,.custom_font").addClass("dis_none");
  });
  $(".sel_text").click(function () {
    $(".custom_font").removeClass("dis_none");
    $(".T_type,.color_pick,.default_samples,.custom_icon").addClass("dis_none");
  });

  /*=========================SWITCH MENU OVER=====================*/
  /*==========================select type=====================*/
  $("#radio1").click(function () {
    //tee
    $type = "smartven_analog";
    change_it();
  });
  $("#radio2").click(function () {
    //vending_machine
    $type = "smartven_22";
    change_it();
  });
  $("#radio3").click(function () {
    //hoodie
    $type = "smartven_49";
    change_it();
  });
  // New Select
  $("#vending-select").on("change", function () {
    // alert(this.value);
    if (this.value == "smartven_analog") {
      $type = "smartven_analog";
    } else if (this.value == "smartven_22") {
      $type = "smartven_22";
    } else if (this.value == "smartven_49") {
      $type = "smartven_49";
    }
    $(".front_print").empty();
    $(".side_print").empty();
    $number_front = 0;
    $number_back = 0;
    $nos_icons = 0;
    change_it();
  });
  /*==========================select type over=====================*/
  /*==========================select back or front=====================*/
  $("#o_front").click(function () {
    $y_pos = "front";
    $("#preview_front").css(
      "background-image",
      "url(tdesignAPI/images/product/" +
        $type +
        "/" +
        $type +
        "_" +
        $y_pos +
        ".png) "
    );
    $("#o_front").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_front.png"
    );
    $("#o_back").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_side.png"
    );
    $("#preview_front").removeClass("dis_none");
    $("#preview_side").addClass("dis_none");
  });
  $("#o_back").click(function () {
    $y_pos = "side";
    $("#preview_side").css(
      "background-image",
      "url(tdesignAPI/images/product/" +
        $type +
        "/" +
        $type +
        "_" +
        $y_pos +
        ".png) "
    );
    $("#o_front").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_front.png"
    );
    $("#o_back").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_side.png"
    );
    $("#preview_side").removeClass("dis_none");
    $("#preview_front").addClass("dis_none");
  });
  /*==========================select back or front OVER=====================*/
  /*==========================select COLOR=====================*/
  $("#red").click(function () {
    $color = "red";
    change_it();
  });
  $("#black").click(function () {
    $color = "black";
    change_it();
  });
  $("#white").click(function () {
    $color = "white";
    change_it();
  });
  $("#green").click(function () {
    $color = "green";
    change_it();
  });
  $("#navy").click(function () {
    $color = "navy";
    change_it();
  });
  function change_it() {
    $("#preview_side").css(
      "background-image",
      "url(tdesignAPI/images/product/" + $type + "/" + $type + "_side.png) "
    );
    $("#preview_front").css(
      "background-image",
      "url(tdesignAPI/images/product/" + $type + "/" + $type + "_front.png) "
    );
    $("#o_front").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_front.png"
    );
    $("#o_back").attr(
      "src",
      "tdesignAPI/images/product/" + $type + "/" + $type + "_side.png"
    );
  }
  /*==========================select COLOR OVER=====================*/
  /*=====================SAMPLE ICONS========================*/
  $(".sample_icons").click(function () {
    var $srcimg = $(this).children("img").attr("src");
    image_icon($srcimg);
  });

  $(".folder_toggle").click(function () {
    $i = $(this).attr("value");
    $folder = $(this).attr("data-folder");
    $.ajax({
      url: "tdesignAPI/control/newcontent.php?folder=" + $folder,
      success: function () {
        $("#toggle_show" + $i)
          .empty()
          .load("tdesignAPI/control/newcontent.php?folder=" + $folder);
      },
    });
  });
  /*=====================SAMPLE ICONS over========================*/

  /*
 * Font resiZable
 * 
 * 
 * 
 *
var initDiagonal;
var initFontSize;

$(function() {
    $("#resizable").resizable({
        alsoResize: '#content',
        create: function(event, ui) {
            initDiagonal = getContentDiagonal();
            initFontSize = parseInt($("#content").css("font-size"));
        },
        resize: function(e, ui) {
            var newDiagonal = getContentDiagonal();
            var ratio = newDiagonal / initDiagonal;
            
            $("#content").css("font-size", initFontSize + ratio * 3);
        }
    });
});

function getContentDiagonal() {
    var contentWidth = $("#content").width();
    var contentHeight = $("#content").height();
    return contentWidth * contentWidth + contentHeight * contentHeight;
}
/*
 * 
 * 
 * 
 */

  $("#apply_text").click(function () {
    var text_val = jQuery("textarea#custom_text").val();
    if (!text_val) return false;

    $("." + $y_pos + "_print").append(
      "<div id=text" +
        $nos_text +
        " class='new_text'  onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);'><span class='drag_text property_icon'  ></span><textarea id='text_style' >" +
        text_val +
        "</textarea><span class='delete_text property_icon' onClick='delete_text(this);' ></span></div>"
    );
    $("#text" + $nos_text + "").draggable({ containment: "parent" });
    $("#text" + $nos_text + "").resizable({
      maxHeight: 480,
      maxWidth: 450,
      minHeight: 60,
      minWidth: 60,
    });

    var $font_ = $("#custom_text").css("font-family");
    var $font_size = $("#custom_text").css("font-size");
    var $font_weight = $("#custom_text").css("font-weight");
    var $font_style = $("#custom_text").css("font-style");
    var $font_color = $("#custom_text").css("color");
    //alert($font_u);

    $("#text" + $nos_text + " textarea").css("font-family", $font_);
    $("#text" + $nos_text + " textarea").css("font-size", $font_size);
    $("#text" + $nos_text + " textarea").css("font-weight", $font_weight);
    $("#text" + $nos_text + " textarea").css("font-style", $font_style);
    $("#text" + $nos_text + " textarea").css("color", $font_color);
    $("#text" + $nos_text).css({ top: "100px", left: "150px" });
    //document.getElementById("text"+($nos_text)+" textarea").style.textDecoration=(""+$font_u+"");
    ++$nos_text;
  });
  $(".preview_images").click(function () {
    capture();
    //$('.modal').addClass('in');
    $(".layer").css("visibility", "visible");
    //$('.layer').css('visibility','visible');
    //$('body').css('position','fixed');
    //$('.modal').css({'display':'block','height':'auto'});
    //$('.design_api').css('position', 'fixed');
    //$('.modal').css('overflow', 'scroll');
  });

  $(".close_img").click(function () {
    $(".layer").css("visibility", "hidden");
    //$('.layer').css('visibility','hidden');
    //$('body').css('position','relative');
  });

  function capture() {
    $("#preview_side").removeClass("dis_none");
    $("#preview_front").removeClass("dis_none");
    $("#image_reply").empty();
    $y_pos = "front";
    html2canvas($("#preview_front"), {
      onrendered: function (canvas) {
        document.getElementById("image_reply").appendChild(canvas);
        //Set hidden field's value to image data (base-64 string)
        $("#img_front").val(canvas.toDataURL("image/png"));
      },
    });
    //$('#preview_front').hide();
    //$('#preview_side').show();
    html2canvas($("#preview_side"), {
      onrendered: function (canvas) {
        //$('#img_back').val(canvas.toDataURL("image/png"));
        document.getElementById("image_reply").appendChild(canvas);
        $("#img_back").val(canvas.toDataURL("image/png"));
        $("#preview_side").addClass("dis_none");
      },
    });
  }
});

function image_icon($srcimg) {
  // if ($nos_icons > 0) {
  //   $("." + $y_pos + "_print").pop();
  // }

  $("." + $y_pos + "_print").append(
    "<div id=icon" +
      $nos_icons +
      " class='new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);' style='top:0px; left: 10px; object-fit: cover; width: 450px; height: 480px; overflow: hidden; object-position: center;'><span class='delete_icon property_icon' onClick='delete_icons(this);'></span><img src='" +
      $srcimg +
      "' width='auto' height='480px' z-index='" +
      $nos_icons +
      "' /></div>"
  );
  $("#icon" + $nos_icons + "").draggable({ containment: "parent" });
  // $("#icon" + $nos_icons + "").resizable({
  //   maxHeight: 480,
  //   maxWidth: 450,
  //   minHeight: 60,
  //   minWidth: 60,
  // });
  // $("#icon" + $nos_icons + "").css({ top: "100px", left: "150px" });
  ++$nos_icons;
}

function keepOnTop() {
  // var number_front = $nos_icons + 1;
  // var number_back = $nos_icons + 1;
  if ($y_pos == "front") {
    ++$number_front;
    if ($number_front > 1) {
      delete_front_old_icons();
    }
    $("." + $y_pos + "_print").append(
      "<div id=icon" +
        $number_front +
        " class='new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);' style='top: 0px; left: 0px; pointer-events: none;'><span class='delete_icon property_icon' onClick='delete_icons(this);'></span><img src='tdesignAPI/images/product/" +
        $type +
        "/" +
        $type +
        "_front.png' width='480px' height='490px' /></div>"
    );
  } else if ($y_pos == "side") {
    ++$number_back;
    if ($number_back > 1) {
      delete_back_old_icons();
    }
    $("." + $y_pos + "_print").append(
      "<div id=icon" +
        $number_back +
        " class='new_icon' onmouseover='show_delete_btn(this);' onmouseout='hide_delete_btn(this);' style='top: 0px; left: 0px; pointer-events: none;'><span class='delete_icon property_icon' onClick='delete_icons(this);'></span><img src='tdesignAPI/images/product/" +
        $type +
        "/" +
        $type +
        "_side.png' width='480px' height='490px' /></div>"
    );
  }

  $("#icon" + $nos_icons + "").draggable({ containment: "parent" });
  // $("#icon" + $nos_icons + "").resizable({
  //   maxHeight: 480,
  //   maxWidth: 450,
  //   minHeight: 60,
  //   minWidth: 60,
  // });
  // $("#icon" + $nos_icons + "").css({ top: "100px", left: "150px" });
}

function delete_front_old_icons() {
  $(".front_print div:nth-child(2)").remove();
  $(".front_print div:first-child").remove();
}

function delete_back_old_icons() {
  $(".side_print div:nth-child(2)").remove();
  $(".side_print div:first-child").remove();
}

function delete_icons(e) {
  $(e).parent(".new_icon").remove();

  --$nos_icons;
}
function show_delete_btn(e) {
  $(e).children(".property_icon").show();
}
function hide_delete_btn(e) {
  $(e).children(".property_icon").hide();
}

/*=============================================*/
function delete_text(f) {
  $(f).parent(".new_text").remove();
  --$nos_icons;
}

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $("." + $y_pos + "_print").append(
        "<div id='c_icon" +
          $custom_img +
          "' class='new_icon'><span class='delete_icon' onClick='delete_icons(this);' ></span><img src='#' id='c_img" +
          $custom_img +
          "' width='100%' height='100%' /></div>"
      );
      $("#c_icon" + $custom_img + "").draggable({ containment: "parent" });
      $("#c_icon" + $custom_img + "").resizable({
        maxHeight: 480,
        maxWidth: 450,
        minHeight: 60,
        minWidth: 60,
      });

      $("#c_img" + $custom_img + "").attr("src", e.target.result);
      ++$custom_img;
    };
    reader.readAsDataURL(input.files[0]);
  }
}
