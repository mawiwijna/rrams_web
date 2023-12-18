$(document).ready(function () {
    console.log('oke-ready-rrams-v2-4b');
    /*
    ClassicEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        editor.ui.view.editable.element.style.height = '500px';
    } )
    .catch( error => {
        console.error( error );
    });
    */
    //<a href="#" onclick="$('.file-upload-input').trigger( 'click' )">
    
    function readURL(inInput, inSuffix) {
        //console.log(input[0].files[0])
        console.log('z1'); 
        if (inInput.length > 0){
            console.log('z2'); 
            if (inInput[0].files) {
            console.log('z3'); 
            //if (inInput.files && inInput.files[0]) {

                var reader = new FileReader();

                reader.onload = function(e) {
                $('#xfuimagewrap' + inSuffix).hide();

                $('#xfuimagepreviewimage' + inSuffix).attr('src', e.target.result);
                $('#xfuimagepreviewarea' + inSuffix).show();

                $('#xfuimagetitle' + inSuffix).html(inInput[0].files[0].name);
                };

                reader.readAsDataURL(inInput[0].files[0]);

            } else {
                removeUpload(inSuffix);
            }
        }
    }

    function removeUpload(inSuffix) {
        $('#xidfileupload' + inSuffix).replaceWith($('#xidfileupload' + inSuffix).clone());
        $('#xfuimagepreviewarea' + inSuffix).hide();
        $('#xfuimagewrap' + inSuffix).show();
    }
    
    $('.image-upload-wrap').bind('dragover', function () {
        $('.image-upload-wrap').addClass('image-dropping');
    });
    
    $('.image-upload-wrap').bind('dragleave', function () {
        $('.image-upload-wrap').removeClass('image-dropping');
    });
    
    $('#xidfileuploadww1').click(function(){ console.log('qwwqq'); });
    //$('#xidfileuploadww1').on( 'click', function() { console.log('y1'); readURL($(this), 'ww1'); });
    $('#xidfileremoveww1').on( 'click', function() { removeUpload('ww1'); });
    
    //-----
    
    $('#themenuawal').show();
    $('#jbottomawal').show();
    $('#thesubmenu1').hide();
    $('#thesubmenu5').hide();
    $('#thesubmenu6').hide();
    $('#jbottoma1').hide();
    
    $('#carda1').on( 'click', function() {  
        $('#themenuawal').hide();
        $('#thesubmenu1').show();
        
        $('#jbottomawal').hide();
        $('#jbottoma1').show();
    });
    $('#carda5').on( 'click', function() {  
        $('#themenuawal').hide();
        $('#thesubmenu5').show();
        
        $('#jbottomawal').hide();
        $('#jbottoma1').show();
    });
    $('#carda6').on( 'click', function() {  
        $('#themenuawal').hide();
        $('#thesubmenu6').show();
        
        $('#jbottomawal').hide();
        $('#jbottoma1').show();
    });
    
    function backToAwal(){
        $('#themenuawal').show();
        $('#jbottomawal').show();
        
        $('#thesubmenu1').hide();
        $('#thesubmenu5').hide();
        $('#thesubmenu6').hide();
        $('#jbottoma1').hide();
    }
    
    $('#jtopbacka1').on( 'click', function() { backToAwal(); });
    $('#jtopbacka5').on( 'click', function() { backToAwal(); });
    $('#jtopbacka6').on( 'click', function() { backToAwal(); });
    //$('#jbottombacka1').on( 'click', function() { backToAwal(); });
    
    $('#jbottomsimpana1').on( 'click', function() {  $('#jbottombacka1').click(); });
    
})
