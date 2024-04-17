function checkall(el){
    const checkBoxes  = document.querySelectorAll('.chk');
    checkBoxes.forEach((row)=>{
      row.checked = el.checked;
    })
  };

function checkagree(){
    const is_check = document.querySelectorAll('.chk');
    if(is_check[0].checked){
      if(is_check[1].checked){
        location.href='signup.html';
      }
      else{
        window.alert('개인정보 수집 방침에 동의하셔야 가입 가능합니다. ');
      }
    }
    else{
      if(is_check[1].checked) window.alert('이용약관 동의하셔야 가입 가능합니다. ');
      else window.alert('이용약관 및 개인정보 수집 방침에 동의하셔야 가입 가능합니다. ');
    }
};

function checkpwd(){
  var p1= document.getElementById('password').value;
  var p2= document.getElementById('pwCheck').value;
 
  if(p1!=p2){
    window.alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
    document.getElementById('pwCheck').style.borderColor ="red";
  }
  else document.getElementById('pwCheck').style.borderColor ="gray";
  
};