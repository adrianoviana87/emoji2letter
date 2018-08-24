(function(outside) {
  String.prototype.replaceAll = function(search, replacement) {
      var target = this;
      return target.split(search).join(replacement);
  };

  var emojichars = [
      'a',  ' 111 ',
            '1   1',
            '11111',
            '1   1',
            '1   1',

      'b',  '1111 ',
            '1   1',
            '1111 ',
            '1   1',
            '1111 ',

      'c',  ' 1111',
            '1    ',
            '1    ',
            '1    ',
            ' 1111',

      'd',  '1111 ',
            '1   1',
            '1   1',
            '1   1',
            '1111 ',

      'e',  '11111',
            '1    ',
            '1111 ',
            '1    ',
            '11111',

      'f',  '11111',
            '1    ',
            '1111 ',
            '1    ',
            '1    ',

      'g',  ' 1111',
            '1    ',
            '1 111',
            '1   1',
            ' 1111',

      'h',  '1   1',
            '1   1',
            '11111',
            '1   1',
            '1   1',

      'i',  ' 111 ',
            '  1  ',
            '  1  ',
            '  1  ',
            ' 111 ',

      'j',  '11111',
            '   1 ',
            '   1 ',
            '1  1 ',
            ' 11  ',

      'k',  '1  11',
            '1 1  ',
            '11   ',
            '1 1  ',
            '1  11',

      'l',  '1    ',
            '1    ',
            '1    ',
            '1    ',
            '11111',

      'm',  '11 11',
            '1 1 1',
            '1 1 1',
            '1   1',
            '1   1',

      'n',  '1   1',
            '11  1',
            '1 1 1',
            '1  11',
            '1   1',

      'o',  ' 111 ',
            '1   1',
            '1   1',
            '1   1',
            ' 111 ',

      'p',  '1111 ',
            '1   1',
            '1111 ',
            '1    ',
            '1    ',

      'q',  ' 1111',
            '1   1',
            ' 1111',
            '    1',
            '    1',

      'r',  '1111 ',
            '1   1',
            '1111 ',
            '1   1',
            '1   1',

      's',  ' 1111',
            '1    ',
            ' 111 ',
            '    1',
            '1111 ',

      't',  '11111',
            '  1  ',
            '  1  ',
            '  1  ',
            '  1  ',

      'u',  '1   1',
            '1   1',
            '1   1',
            '1   1',
            ' 111 ',

      'v',  '1   1',
            '1   1',
            '1   1',
            ' 1 1 ',
            '  1  ',

      'x',  '1   1',
            ' 1 1 ',
            '  1  ',
            ' 1 1 ',
            '1   1',

      'w',  '1   1',
            '1   1',
            '1 1 1',
            '1 1 1',
            ' 1 1 ',

      'y',  '1   1',
            ' 1 1 ',
            '  1  ',
            '  1  ',
            '  1  ',

      'z',  '11111',
            '   1 ',
            '  1  ',
            ' 1   ',
            '11111',

      ' ',  '     ',
            '     ',
            '     ',
            '     ',
            '     '
  ];

  function char2Emoji(ch) {
    var converted = [[],[],[],[],[]];
    if (!!ch) {
      var index = emojichars.indexOf(ch.toLowerCase());
      if (index >= 0) {
        index++;
        converted = emojichars.slice(index, index + 5);
      }
    }

    return converted;
  }

  function text2Emoji(text, emoji, emptyEmoji) {
    var converted = [[],[],[],[],[]];
    if (!!text) {
      for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        var chars = char2Emoji(ch);
        converted[0].push(chars[0]);
        converted[1].push(chars[1]);
        converted[2].push(chars[2]);
        converted[3].push(chars[3]);
        converted[4].push(chars[4]);
      }
    }

    var txt = '';
    for (var i = 0; i < converted.length; i++) {
      txt += (converted[i].join(emptyEmoji)).replaceAll('1', emoji).replaceAll(' ', emptyEmoji) + '\n';
    }

    return txt;
  }

  outside.text2Emoji = text2Emoji;
})(window);
