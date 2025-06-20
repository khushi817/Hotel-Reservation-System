
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const room = document.getElementById("room").value;
  const guests = document.getElementById("guests").value;

  const output = `
    <h2>Reservation Confirmed</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Room Type:</strong> ${room}</p>
    <p><strong>Guests:</strong> ${guests}</p>
    <p><strong>Check-In:</strong> ${checkin}</p>
    <p><strong>Check-Out:</strong> ${checkout}</p>