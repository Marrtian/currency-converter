
document.getElementById('mybtn').onclick = function(){
   let num = document.getElementById('mynum').value;
   let usd = document.getElementById('usd');
   let pound = document.getElementById('pound');

   if(usd.checked){
      let randsToUsd = num * 0.055;
      document.getElementById('mylbl2').innerHTML = `$${randsToUsd}`;
   }

   else if(pound.checked){
      let randsToPound = num * 0.048;
      randsToPound = randsToPound.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
      document.getElementById('mylbl2').innerHTML = `${randsToPound}`;
   }

}