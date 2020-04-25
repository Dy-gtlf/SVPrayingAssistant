// vue modelの定義
var deck = new Vue({
    el: '#deckModel',
    data: {
        deck: {
            cards: {},
            cardList: {},
            costGraph: {},
            cardCountsByCharType: {},
            cardCountsByTribeType: {},
            sumOfRedEthers: 0,
            isSet: false
        },
        info: {
            clan: ['ニュートラル', 'エルフ', 'ロイヤル', 'ウィッチ', 'ドラゴン', 'ネクロマンサー', 'ヴァンパイア', 'ビショップ', 'ネメシス'],
            charTypes: ['フォロワー', 'アミュレット', 'スペル'],
            tribeTypes: ['-', '兵士', '指揮官', '土の印', 'マナリア', 'アーティファクト', '財宝', '機械', 'レヴィオン', '自然', '機械・自然']
        }
    },
    methods: {
        // 情報の初期化
        init() {
            this.$set(this.deck, 'isSet', true);
            this.makeCardList();
            this.makeCostGraph();
            this.getCardCountsByCharTypes();
            this.getCardCountsTribeTypes();
            this.getSumOfRedEthers();
            console.log(this.deck);
            generateCharTypeChart();
            generateTribeTypeChart();
        },
        // 重複カードの除去
        makeCardList() {
            let cardList = this.deck.cards.filter((v1, index, arr) => {
                return (arr.findIndex((v2) => {
                    if (v1.card_id === v2.card_id) {
                        v2.card_ct > 0 ? v2.card_ct += 1 : v2.card_ct = 1;
                    }
                    return (v1.card_id === v2.card_id)
                }) === index);
            });
            this.$set(this.deck, 'cardList', cardList);
        },
        // コストグラフの作成
        makeCostGraph() {
            let costGraph = new Array(8).fill(0);
            this.deck.cardList.forEach(element => {
                if (element.cost < 1) {
                    costGraph[0] += element.card_ct;
                } else if (element.cost > 8) {
                    costGraph[7] += element.card_ct;
                } else {
                    costGraph[element.cost - 1] += element.card_ct;
                }
            });
            this.$set(this.deck, 'costGraph', costGraph);
        },
        // カードの種類ごとの編成数
        getCardCountsByCharTypes() {
            let cardCountsByCharType = [];
            this.deck.cardList.forEach(element => {
                let pos = 1;
                if (element.char_type >= 3) {
                    pos = 2;
                }
                if (cardCountsByCharType[this.info.charTypes[element.char_type - pos]] > 0) {
                    cardCountsByCharType[this.info.charTypes[element.char_type - pos]] += element.card_ct;
                } else {
                    cardCountsByCharType[this.info.charTypes[element.char_type - pos]] = element.card_ct;
                }
            });
            this.$set(this.deck, 'cardCountsByCharType', cardCountsByCharType);
        },
        // カードのタイプごとの編成数
        getCardCountsTribeTypes() {
            let cardCountsByTribeType = [];
            this.deck.cardList.forEach(element => {
                if (element.tribe_name in cardCountsByTribeType) {
                    cardCountsByTribeType[element.tribe_name] += element.card_ct;
                } else {
                    cardCountsByTribeType[element.tribe_name] = element.card_ct;
                }
            });
            this.$set(this.deck, 'cardCountsByTribeType', cardCountsByTribeType);
        },
        // 生成レッドエーテル
        getSumOfRedEthers() {
            let sumOfRedEthers = 0;
            this.deck.cardList.forEach(element => {
                sumOfRedEthers += element.use_red_ether * element.card_ct;
            });
            this.$set(this.deck, 'sumOfRedEthers', sumOfRedEthers);
        },
    }
});