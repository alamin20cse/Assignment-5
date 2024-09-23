


function getInputFieldValueById(id)
{


    const InputValue=Number(document.getElementById(id).value).toFixed(2);
    document.getElementById(id).value='';
    return InputValue;
    
    
}




function getTextFieldValueById(id)
{
    const textValue=document.getElementById(id).innerText;
    const textNumber=Number(textValue).toFixed(2);
    return textNumber;

}