export function handleStartGame() {
  $('#start-btn').click(() => {
    $('#welcome-message').hide();
    $('#start-btn').hide();
  });
}