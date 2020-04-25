async function getDeckData() {
    var element = document.getElementById("deckCode");
    res = await SVPortalAPI.fetchDeck(element.value);
    deck.$set(deck, 'deck', res.data.deck)
    deck.init();
}

// await SVPortalAPI.fetchDeck('nzbs')

function onEnterKeyDown() {
    if (event.keyCode === 13) {
        getDeckData();
        document.activeElement.blur();
    }
}

// デッキコード欄にフォーカス
$('input').first().focus();
document.addEventListener('DOMContentLoaded', function() {
    var $tab__link = $(".tab2__link");
    var $tab_body_item = $(".tab2-body__item");
    $tab__link.on("click", function(e) {
        var target = $(e.currentTarget);
        //タブの表示非表示
        $tab__link.removeClass("on");
        target.addClass("on");
        //タブの中身の表示非表示
        var num = target.data("tab-body");
        $tab_body_item.removeClass("on");
        $(".tab2-body__item--" + num).addClass("on");
    });
});