const form = document.getElementById('bookingForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Process the form data (e.g., send to a server, display a confirmation message)
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Number of Guests: ${guests}`);

    // You can add more complex logic here, such as validating input, sending data to a server, or displaying a confirmation message.
});