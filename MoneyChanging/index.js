function onClick(){
   var money=parseInt(document.getElementById('money').value);
   var from= document.getElementById('from').value;
   var toi= document.getElementById('toi').value;
   var tigia=23000;
   var result;

   // chuyển tiền việt nam
   if(toi=='vn2') {
      if(from=='vn'){
       result=money;
       document.getElementById('result').value=result;
       console.log(result);
       document.getElementById('gt').innerText="VNĐ";
       }
           if(from=='my'){
            result=tigia*money;
            document.getElementById('result').value=result;
           console.log(result);
           document.getElementById('gt').innerText="VNĐ";
          }
      } 
      // Chuyển tiền mỹ
      else {
         if(from=='vn'){
            result=money/tigia;
            document.getElementById('result').value=result;
            console.log(result);
            document.getElementById('gt').innerText="USD";
            }
                if(from=='my'){
                 result=money;
                 document.getElementById('result').value=result;
                console.log(result);
                document.getElementById('gt').innerText="USD";
               }
      }
   

      }
      

  
