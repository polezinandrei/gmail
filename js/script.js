$(document).ready(function(){
    $('.email-line__text').click(showDetailEmail);
    $('.header-left__settings-icon').click(switchLeftSidebar);
    $('.email-line__star').click(swithStar);
});

function showDetailEmail() {
    $('#emailList').hide();
    $('#emailDetail').show();

    $('#mainBottomList').hide();
    $('#mainBottomDetail').show();

    window.scrollTo(0, 0);
}

function switchLeftSidebar(e){
    e.preventDefault();
    const $sidebar = $('.left-sidebar');
    if ($sidebar.hasClass('left-sidebar_opened')) {
        $sidebar.removeClass('left-sidebar_opened');
    } else {
        $sidebar.addClass('left-sidebar_opened');
    }
}

function swithStar(e){
    e.preventDefault();
    if ($(this).hasClass('email-line__star_starred')) {
        $(this).removeClass('email-line__star_starred');
    } else {
        $(this).addClass('email-line__star_starred');
    }
}