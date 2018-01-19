$(() => {
    $('#getQuote').click(() => {
        
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
            success: (data) => {
              $('#box-center-quote').html(data.quoteText);
              $('#box-center-author').html(data.quoteAuthor);
            }
        });
    })

    $('#box-center-quote').css('font-size', '20px');
    // $('#box-center-author').css('font-size', '20px');







});