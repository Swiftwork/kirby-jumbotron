/**
 * Jumbotron panel field for Kirby 2
 *
 * @author: Erik Hughes - http://swiftdroid.com
 * @version: 0.1
 */

var Jumbotron = function($, $field) {
    'use strict';

    var self = this;
    this.$field = $field;
    this.$draggable = $('.sidebar').find('.draggable');

    this.init = function() {
        /* Drag and Drop */
        self.$field.droppable({
            hoverClass: 'over',
            accept: self.draggable,
            drop: function(e, ui) {
                $('input', e.target).val(ui.draggable.data('helper'));
                $('.thumbnail', e.target).remove();
                $(e.target).append('<img src="'+ui.draggable.data('url') + '" class="thumbnail" />');
            }
        });

        $('.remove', self.$field).click(function() {
            $('input', self.$field).val('');
            $('.thumbnail', self.$field).remove();
            $(self.$field).append('<i class="fa fa-camera-retro fa-3x thumbnail"></i>');
        });
    };

    //------------------------------------------------------------------------------------
    // INITIALIZE
    //------------------------------------------------------------------------------------

    return this.init();
};

// Load method triggered by Kirby
// https://github.com/getkirby/panel/issues/228#issuecomment-58379016
(function($) {
    'use strict';
    $.fn.jumbotronfield = function() {
        return new Jumbotron($, this);
    }
})(jQuery);
