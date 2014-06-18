/**
 * Created by cesar on 6/18/2014.
 */
(function($){
    $.fn.extend({
        cascada: function(){

            return this.each(function(){
                console.log(this);
                var $lista = $(this);
                $lista.on('click', 'li', function() {
                    console.log(this);
                    var $liPadre=$(this);

                    $liPadre.clone().appendTo('ul');
                    $liPadre.remove();
                });



            });

        }
    });

})(jQuery);