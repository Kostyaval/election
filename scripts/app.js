function fix()
{
    var el = this;
    var par = el.parentNode;
    var next = el.nextSibling;
    par.removeChild(el);
    setTimeout(function() {par.insertBefore(el, next);}, 0)
}
var contractAddress = '0x7a9b023f2bBEe952183D1B296894cafABa8b7623',
    apiKey = 'IFRIBDYBZW8S8SGIEBY3ACPJPNKDBB3QFI',
    numA = '0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    numB = '0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    numC = '0xcccccccccccccccccccccccccccccccccccccccc',
    numD = '0xdddddddddddddddddddddddddddddddddddddddd',
    summ = 0;

$('.js_contract-address').text(contractAddress).prop('href', 'https://rinkeby.etherscan.io/address/'+ contractAddress + '#readContract');

$.getJSON( "https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" + contractAddress + "&address=" + numA + "&tag=latest&apikey=" + apiKey, function( json ) {
    console.log( "JSON Data: " + json.result );
    numA = Number(json.result);
    $('.num_a .js-count').text(numA + ' votes');

        $.getJSON( "https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" + contractAddress + "&address=" + numB + "&tag=latest&apikey=" + apiKey, function( json ) {
            console.log( "JSON Data: " + json.result );
            numB = Number(json.result);
            $('.num_b .js-count').text(numB + ' votes');

                $.getJSON( "https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" + contractAddress + "&address=" + numC + "&tag=latest&apikey=" + apiKey, function( json ) {
                    console.log( "JSON Data: " + json.result );
                    numC = Number(json.result);
                    $('.num_c .js-count').text(numC + ' votes');

                        $.getJSON( "https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" + contractAddress + "&address=" + numD + "&tag=latest&apikey=" + apiKey, function( json ) {
                            console.log( "JSON Data: " + json.result );
                            numD = Number(json.result);
                            $('.num_d .js-count').text(numD + ' votes');

                            summ = numA + numB + numC + numD;
                            console.log(summ);
                            numA = Math.round(numA * 100 / summ);
                            $('.num_a .b_progress_circle').attr("data-percentage", numA + '%');

                            console.log(numA);
                            numB = Math.round(numB * 100 / summ);
                            $('.num_b .b_progress_circle').attr("data-percentage", numB + '%');

                            console.log(numB);
                            numC = Math.round(numC * 100 / summ);
                            $('.num_c .b_progress_circle').attr("data-percentage", numC + '%');

                            console.log(numC);
                            numD = Math.round(numD * 100 / summ);
                            $('.num_d .b_progress_circle').attr("data-percentage", numD + '%');

                            console.log(numD);

                        });

                });

        });


});


$( '#submit' ).on( "click", function() {
    var ethAddress = $('#address').val()
    $.getJSON( "https://rinkeby.etherscan.io/api?module=account&action=tokenbalance&contractaddress=" + contractAddress + "&address=" + ethAddress + "&tag=latest&apikey=" + apiKey, function( json ) {
        if(json.result != 'Invalid address format') {
            $('#countdown-days').text(json.result + ' POS')
            console.log(json.result)
            console.log(ethAddress)
        } else{
            $('#countdown-days').text(json.result)
            console.log(json.result)
            console.log(ethAddress)
        }


    });
});