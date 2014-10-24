function doSecretStuff() {
    showResult(calculateActualPrice());
}

function calculateActualPrice() {
    var price = parseFloat($('#price').val());
    var vat = parseFloat($('#vat').val());
    var tax = parseFloat($('#tax').val());
    var actualPrice = price * (price / (price + (price * (vat / 100)))) * ((100 - tax) / 100);
    return actualPrice;
}

function showResult(actualPrice) {
    $("#actualPrice").text(actualPrice);
    $('#result').show();
}

// Init the page
$('#price').focus();
$('#price').keypress(function (event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        $('#calculateButton').click();
    }
});