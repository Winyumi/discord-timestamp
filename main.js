$(function () {
  // set default date/time to now
  let now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  $('#timestamp').val(now.toISOString().slice(0,-8));

  // generate timestamp
  $('form').on('submit change', (e) => {
    e.preventDefault();
    let timestamp = new Date($('#timestamp').val()).getTime() / 1000;
    let style = $('input[name="style"]:checked').val();
    if (Number.isNaN(timestamp)) return;
    $('#output').val('<t:' + timestamp + (style ? ':' + style : '') + '>');
  }).trigger('change');

  // auto select output text
  $('#output').on('click', (e) => {
    e.target.select();
  });
});
