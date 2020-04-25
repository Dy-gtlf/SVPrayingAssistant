function getCharTypeChartData() {
    let data = [];
    for (let key in deck.deck.cardCountsByCharType) {
        data.push([key, deck.deck.cardCountsByCharType[key]]);
    }
    console.log(data);
    return data;
}

function getTribeTypeChartData() {
    let data = [];
    for (let key in deck.deck.cardCountsByTribeType) {
        data.push([key, deck.deck.cardCountsByTribeType[key]]);
    }
    console.log(data);
    return data;
}

function generateCharTypeChart() {
    var charTypeChart = c3.generate({
        bindto: '#charTypeChart',
        data: {
            columns: getCharTypeChartData(),
            type: 'pie',
        },
        size: {
            height: 200,
            width: 200
        }
    });
    return charTypeChart;
}

function generateTribeTypeChart() {
    let tribeChart = c3.generate({
        bindto: '#tribeTypeChart',
        data: {
            columns: getTribeTypeChartData(),
            type: 'pie',
        },
        size: {
            height: 200,
            width: 200
        }
    });
    return tribeChart;
}