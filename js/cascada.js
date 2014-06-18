$(function(){

    $('#txtNombre').focus();

    $('#btnAgregar').on('click',function(){

        var $txtNombre=$('#txtNombre');
        var iLimite= 0;


        if($.trim($txtNombre.val())!=''){

            var $ulLista;

            //if(!$('#divLista').find('ul').length) $('#divLista').append('<ul/>');


            $ulLista=$('#divLista');

            
            if($ulLista.find('li').length<iLimite || iLimite==0){

                var $liNuevoNombre=$('<li/>').html('<a class="clsEliminarElemento">&nbsp;</a>'+$.trim($txtNombre.val()));

                $ulLista.prepend($liNuevoNombre);

            }else{
                alert('No es posible agregar el elemento. Se permiten solamente '+iLimite+'.');
            }

        }else{
            alert('Por favor, digite el nombre que desea agregar a la lista.')
        }

        $txtNombre.val('').focus();
    });

/*
    $('.clsEliminarElemento').live('click',function(){

        var $ulLista=$('#divLista').find('ul');

        var $liPadre=$($(this).parents().get(0));

			$liPadre.clone().appendTo('#divLista');
			$liPadre.remove();


        if($ulLista.find('li').length==0) $ulLista.remove();
    });
 ;*/

    $('#txtNombre').on('keypress',function(eEvento){
        if(eEvento.which==13) $('#btnAgregar').trigger('click');
    })
});
