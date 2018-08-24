var lastConvertedText = '';
function copyToClipboard() {
  var $input = $('<textarea>');
  $input.val(lastConvertedText);
  $input.appendTo($('body'));
  $input.select();
  document.execCommand('copy');
  $input.remove();
}

$('#emojiForm').on('submit', function(ev) {
  ev.preventDefault();
  var emojiChar = $('#emojiChar').val() || ':smile:';
  var emojiBlank = $('#emojiBlank').val() || ':blank:';
  var text = $('#text').val();
  var converted = text2Emoji(text, emojiChar, emojiBlank);
  lastConvertedText = converted;
  $('#convertedTextOriginal').text(text);
  $('#convertedText').text(converted);
  $('#convertedTextCard')[0].scrollIntoView();
  copyToClipboard();
  $('#backToText').focus();
});

$('#copyToClipboardButton').on('click', function(ev) {
  ev.preventDefault();
  copyToClipboard();
});
