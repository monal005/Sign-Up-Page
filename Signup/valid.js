$(document).ready(function(){
    $('.btn-next').click(function(){
        var error_email='';
        var error_pass='';
        var filter=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if($.trim($('#mail').val()).length==0)
        {
            error_email='Email is required';
            $('#error3').text(error_email);
            $('#mail').addClass('has-error');
        }
        else
        {
            if(!filter.test($('#mail').val()))
            {
                error_email='invalid email';
                $('#error3').text(error_email);
                $('#mail').addClass('has-error');
            }
            else
            {
                error_email='';
                $('#error3').text(error_email);
                $('#mail').removeClass('has-error');
                
            }
        }

        if($.trim($('#pass').val()).length==0)
        {
            error_pass='Password Required';
            $('#error4').text(error_pass);
            $('#pass').addClass('has-error');
        }
        else{
            error_pass='';
            $('#error4').text(error_pass);
            $('#pass').removeClass('has-error');
        }
        // if(error_email !='' || error_pass !='')
        // {
        //     return false;
        // }
    })
})