$(document).on( 'click' , '.edit-task', function(){
    $(this).closest('li').find('.task-content').prop('contenteditable',true).focus();
});

$(document).on( 'focusout' , '.task-content' , function(){
    $(this).prop('contenteditable',false);
});

$( function() {
    $( "#sortable-list" ).sortable({
        placeholder: "ui-state-highlight",
        containment: "#sortable-list",
        axis: "y",
        delay: 150,
        handle: '.move-task'
    });
    $( "#sortable-list" ).disableSelection();
} );

