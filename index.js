





function DonateHandelN() {


    const ckEmpty = getInputFieldBeforNumberValueById('input-noakhali');
    
    if (ckEmpty === '') {
        alert("Input field is Empty");
        return; 
    }
    


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

        

        

        const now = new Date();
        const formattedDate = now.toString(); 

        // Update the history section
        const historyDiv = document.getElementById('history'); 
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2">
             <p class="text-[20px] font-[700]">${donationAmountNoakhali} Donate for Flood at Noakhali, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;


          my_modal_1.showModal();
    }
}










function DonateHandelF() {


    const ckEmpty = getInputFieldBeforNumberValueById('input-feni');
    
    if (ckEmpty === '') {
        alert("Input field is Empty");
        return; 
    }


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
        ck=1;

       
        document.getElementById('taka-feni').innerText = afterTextTaka; 
        document.getElementById('taka-total').innerText = remaining; 

      





        const now = new Date();
        const formattedDate = now.toString(); 

        // Update the history section
        const historyDiv = document.getElementById('history'); 
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2">
            <p class="text-[20px] font-[700]">${donationAmountFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;

          my_modal_1.showModal();
    }
    

  
}
// Quata
function DonateHandelQ() {
    
    const ckEmpty = getInputFieldBeforNumberValueById('input-quota');
    
    if (ckEmpty === '') {
        alert("Input field is Empty");
        return; 
    }

   
    const donationAmountQuota = Number(ckEmpty);
    const textTakaQuata = getTextFieldValueById('taka-quta');
    const totalAmount = getTextFieldValueById('taka-total');

    
    if (isNaN(donationAmountQuota)) {
        alert('Please enter a valid number.');
    } else if (donationAmountQuota < 0) {
        alert("Donation amount cannot be negative.");
    } else {
        // Main logic
        let remaining = totalAmount - donationAmountQuota;
        const afterTextTaka = textTakaQuata + donationAmountQuota;

        
        document.getElementById('taka-quta').innerText = afterTextTaka; 
        document.getElementById('taka-total').innerText = remaining; 

       
        const now = new Date();
        const formattedDate = now.toString();

        // Update the history section
        const historyDiv = document.getElementById('history');
        historyDiv.innerHTML += `
          <div class="border border-solid rounded-3xl p-4 my-2">
            <p class="text-[20px] font-[700]">${donationAmountQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>
            <p>Date: ${formattedDate}</p>
          </div>`;

        my_modal_1.showModal(); 
    }
}

document.getElementById('button-donation').addEventListener('click', function() {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
    
    
    document.getElementById('button-donation').classList.add('bg-[#B4F461]');
    document.getElementById('button-history').classList.remove('bg-[#B4F461]');
});

document.getElementById('button-history').addEventListener('click', function() {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
    
   
    document.getElementById('button-history').classList.add('bg-[#B4F461]');
    document.getElementById('button-donation').classList.remove('bg-[#B4F461]');
});
