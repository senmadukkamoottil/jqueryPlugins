/*  jQuery plugin to wrap image tags in the html page with a tag and caption the
 *  images with text from image title
/*
    ---Configuration---
    "wrapperTag"    : The tag that wrappes the image tags
    "wrapperClass"  : Class name of wrapper tag
    "captionTag"    : The tag that shows caption
    "captionClass"  : The class name of the caption tag
    */

(function ( $ ) {
    var defaultOptions = {
        "wrapperTag"    : "span",
        "wrapperClass"  : "captioned-image",
        "captionTag"    : "span",
        "captionClass"  : "caption"
    };
    
    $.fn.updateImageTags = function (userOptions) {
        'use strict';

       var options = $.extend(defaultOptions, userOptions);
        
        var imageTags = $(this).find("img");
        var imgTitle = "";
        imageTags.each(function (i, item) {
            if (!$(item).parent().hasClass(options.wrapperClass)) {
                imgTitle = $(item).attr("title");
                $(item).wrap("<"+options.wrapperTag+" class='"+options.wrapperClass+"'>").after("<"+options.wrapperTag+" class='"+options.captionClass+"'>" + imgTitle + "</"+options.wrapperTag+">");
            }
        });
        return this;
    }
}( jQuery ));