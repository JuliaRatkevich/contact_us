
$(function()
{
	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        
        subject = $('#subject')[0].value;
        
        message = $('#message')[0].value;
        
        window.location.href = "mailto:dogactivity.pp@gmail.com?subject=" + subject + "&body=" + encodeURIComponent(message);
        
      });	
});
