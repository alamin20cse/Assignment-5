


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
        const formattedDate = now.toString(); // Format the date

        // Update the history section
        const historyDiv = document.getElementById('history'); // Select the history section
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2">
             <p class="text-[20px] font-[700]">${donationAmountNoakhali} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;
    }
}










function DonateHandelF() {


    const donationAmountFeni = getInputFieldValueById('input-feni');
    const textTakaFeni = getTextFieldValueById('taka-feni');
    const totalAmount = getTextFieldValueById('taka-total');

    
    if (isNaN(donationAmountFeni)) {
        alert('Please enter a valid number.');
    } else if (donationAmountFeni < 0) {
        alert("Donation amount cannot be negative.");
    } else {
        // Main work
        let remaining = totalAmount - donationAmountFeni;
        const afterTextTaka = textTakaFeni + donationAmountFeni;

        // Update the displayed values
        document.getElementById('taka-feni').innerText = afterTextTaka; // Use innerText to update the text content
        document.getElementById('taka-total').innerText = remaining; // Use innerText to update the total amount

      










        // Get the current date and time
        const now = new Date();
        const formattedDate = now.toString(); // Format the date

        // Update the history section
        const historyDiv = document.getElementById('history'); // Select the history section
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2">
            <p class="text-[20px] font-[700]">${donationAmountFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;
    }

  
}
// Quata

function DonateHandelQ() {
   


    const donationAmountQuota = getInputFieldValueById('input-quota');
    const textTakaQuata = getTextFieldValueById('taka-quta');
    const totalAmount = getTextFieldValueById('taka-total');

    
    if (isNaN(donationAmountQuota)) {
        alert('Please enter a valid number.');
    } else if (donationAmountQuota < 0) {
        alert("Donation amount cannot be negative.");
    } else {
        // Main work
        let remaining = totalAmount - donationAmountQuota;
        const afterTextTaka = textTakaQuata + donationAmountQuota;

        // Update the displayed values
        document.getElementById('taka-quta').innerText = afterTextTaka; // Use innerText to update the text content
        document.getElementById('taka-total').innerText = remaining; // Use innerText to update the total amount

        





        // Get the current date and time
        const now = new Date();
        const formattedDate = now.toString(); // Format the date

        // Update the history section
        const historyDiv = document.getElementById('history'); // Select the history section
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2 ">
            <p class="text-[20px] font-[700]">${donationAmountQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;
    }
}

document.getElementById('button-donation').addEventListener('click', function() {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
    
    // Add and remove Tailwind classes correctly
    document.getElementById('button-donation').classList.add('bg-[#B4F461]');
    document.getElementById('button-history').classList.remove('bg-[#B4F461]');
});

document.getElementById('button-history').addEventListener('click', function() {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    
    // Add and remove Tailwind classes correctly
    document.getElementById('button-history').classList.add('bg-[#B4F461]');
    document.getElementById('button-donation').classList.remove('bg-[#B4F461]');
});
