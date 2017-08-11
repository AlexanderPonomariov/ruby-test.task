$(document).on( 'click' , '.edit-task', function(){
    $(this).closest('li').find('.task-content').prop('contenteditable',true).focus();
});

$(document).on( 'focusout' , '.task-content' , function(){
    $(this).prop('contenteditable',false);
});



