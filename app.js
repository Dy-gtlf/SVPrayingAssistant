async function getDeckData() {
    var element = document.getElementById("deckCode");
    try {
        alert('デッキのインポート開始。');
        res = await SVPortalAPI.fetchDeck(element.value);
        deck.$set(deck, 'deck', res.data.deck)
        deck.init();
        alert('デッキのインポート成功。');
    } catch (error) {
        alert('デッキのインポート失敗。');
        deck.$set(deck.deck, 'isSet', false);
    }
}

// await SVPortalAPI.fetchDeck('abcd');

function onEnterKeyDown() {
    let activeElement = document.activeElement;
    if (event.keyCode === 13 && activeElement.id == 'deckCode') {
        getDeckData();
        activeElement.blur();
    }
}

// デッキコード欄にフォーカス
$('input').first().focus();

// タブ
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