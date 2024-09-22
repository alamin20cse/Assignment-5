


// ===================


function DonateHandelN() {
    const donationAmountNoakhali = getInputFieldValueById('input-noakhali');
    const textTakaNoakhali = getTextFieldValueById('taka-noakhali');
    const totalAmount = getTextFieldValueById('taka-total');

    
    if (isNaN(donationAmountNoakhali)) {
        alert('Please enter a valid number.');
    } else if (donationAmountNoakhali < 0) {
        alert("Donation amount cannot be negative.");
    } else {
        // Main work
        let remaining = totalAmount - donationAmountNoakhali;
        const afterTextTaka = textTakaNoakhali + donationAmountNoakhali;

        // Update the displayed values
        document.getElementById('taka-noakhali').innerText = afterTextTaka; // Use innerText to update the text content
        document.getElementById('taka-total').innerText = remaining; // Use innerText to update the total amount

        // Get the current date and time
        const now = new Date();
        const formattedDate = now.toString(); // Example: "Tue Sep 17 2024 08:39:11 GMT+0600 (Bangladesh Standard Time)"

        // Display the formatted date in the console
        console.log("Date:", formattedDate);
    }
}










function DonateHandelF() {


    const donationAmountFeni= getInputFieldValueById('input-feni');
    const textTakaNoakhali = getTextFieldValueById('taka-noakhali');
    const totalAmount = getTextFieldValueById('taka-total');
   


   
    console.log(donationAmountFeni);
    



    

// Get the current date and time
const now = new Date();

// Format the date as a string
const formattedDate = now.toString(); // Example: "Tue Sep 17 2024 08:39:11 GMT+0600 (Bangladesh Standard Time)"

// Display the formatted date in the console
console.log("Date:", formattedDate);

  
}

function DonateHandelQ() {
   


    

    const donationAmountQuota= getInputFieldValueById('input-quota');
    console.log(donationAmountQuota);


    

// Get the current date and time
const now = new Date();

// Format the date as a string
const formattedDate = now.toString(); // Example: "Tue Sep 17 2024 08:39:11 GMT+0600 (Bangladesh Standard Time)"

// Display the formatted date in the console
console.log("Date:", formattedDate);
}