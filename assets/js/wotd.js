const url = `https://www.merriam-webster.com/word-of-the-day`;
console.log(url);

$.ajax({
    url: 'https://cors-anywhere.herokuapp.com/' + url,
    method: 'GET',
    crossDomain: true
}).then(
    responseData => {
      html = $.parseHTML(responseData);
      $.each(html, (i, el) => {

          if (el.className && el.className.includes('outer-container')) {
            const word = el.getElementsByClassName('word-and-pronunciation')[0].childNodes[1].innerHTML;
            const pos = el.getElementsByClassName('main-attr')[0].innerHTML;
            var posShort = pos;
            if (pos == "noun") {
              posShort = "n.";
            } else if (pos == "verb") {
              posShort = "v.";
            } else if (pos == "adjective" ) {
              posShort = "adj.";
            } else if (pos == "adverb") {
              posShort = "adv.";
            }
            const pron = el.getElementsByClassName('word-syllables')[0].innerHTML;
            document.getElementById('word').innerHTML = "<strong> <a href=" + url + ">" + word + "</a></strong>" + " (" + posShort + ") | <em>" + pron + "</em>";

            const def = el.getElementsByClassName('wod-definition-container')[0].childNodes[3].innerHTML;
            document.getElementById('def').innerHTML = def;
          }

      });
    },
    err => {
        console.log(err);
    }
);
