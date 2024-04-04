database = {};

database.inicio = function (callback) {
    $.getJSON('data/database.json', function (data) {
        database.data = data;
        if (callback) {
            callback();
        }
    });
}

function inicioSelect() {
    for (var i = 0; i < database.data.length; i++) {
        var item = database.data[i];
        var selectText = "<option value='" + item.id + "'>" + item.titulo + "</option>";
        $('#slc-defs').append(selectText);
    }
};

function selectChange() {
    var id = $('#slc-defs').val();
    var item = database.data[id];
    $('#txt-desc').text(item.descricao);
};

database.inicio(inicioSelect); database