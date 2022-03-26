$document.ready(function(){
    $("#email-form").validate({
        rules:{
           ename:{
               required:true,
               email:true
           }
        }

    })
        
    
})