export function handleStartGame() {
  $('#start-btn').click(() => {
    $('#welcome-message').fadeOut('slow');
    $('#start-btn').fadeOut('slow');
  });
}