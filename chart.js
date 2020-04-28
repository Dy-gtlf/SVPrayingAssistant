function getCharTypeChartData() {
    let data = [];
    for (let key in deck.deck.cardCountsByCharType) {
        data.push([key, deck.deck.cardCountsByCharType[key]]);
    }
    return data;
}

function generateCharTypeChart() {
    var charTypeChart = c3.generate({
        bindto: '#charTypeChart',
        data: {
            columns: getCharTypeChartData(),
            type: 'donut',
        },
        size: {
            width: 250,
            height: 300
        },
        donut: {
            title: "カード種別編成率"
        }
    });
    return charTypeChart;
}

function getTribeTypeChartData() {
    let data = [];
    for (let key in deck.deck.cardCountsByTribeType) {
        data.push([key, deck.deck.cardCountsByTribeType[key]]);
    }
    return data;
}

function generateTribeTypeChart() {
    let tribeChart = c3.generate({
        bindto: '#tribeTypeChart',
        data: {
            columns: getTribeTypeChartData(),
            type: 'donut',
        },
        size: {
            width: 250,
            height: 300,
        },
        donut: {
            title: "タイプ別編成率"
        }
    });
    return tribeChart;
}

function getRarityChartData() {
    let data = [];
    for (let key in deck.deck.cardCountsByRarity) {
        data.push([key, deck.deck.cardCountsByRarity[key]]);
    }
    return data;
}

function generateRarityChart() {
    let rarityChart = c3.generate({
        bindto: '#rarityChart',
        data: {
            columns: getRarityChartData(),
            type: 'donut',
        },
        size: {
            width: 250,
            height: 300,
        },
        donut: {
            title: "レアリティ別編成率"
        }
    });
    return rarityChart;
}