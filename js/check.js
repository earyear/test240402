function checkall(el) {
  const checkBoxes = document.querySelectorAll('.chk');
  checkBoxes.forEach((row) => {
    row.checked = el.checked;
  })
};

function checkagree() {
  const is_check = document.querySelectorAll('.chk');
  if (is_check[0].checked) {
    if (is_check[1].checked) {
      location.href = 'signup.html';
    }
    else {
      window.alert('개인정보 수집 방침에 동의하셔야 가입 가능합니다. ');
    }
  }
  else {
    if (is_check[1].checked) window.alert('이용약관 동의하셔야 가입 가능합니다. ');
    else window.alert('이용약관 및 개인정보 수집 방침에 동의하셔야 가입 가능합니다. ');
  }
};

function checkpwd() {
  var p1 = document.getElementById('password');
  var p2 = document.getElementById('pwCheck');

  if (p1.value != p2.value) {
    window.alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
    p2.style.borderColor = "red";
    p2.focus();
  }
  else p2.style.borderColor = "gray";
};

function signup() {
  var box1 = document.getElementsByName('userid').value;
  var box2 = document.getElementsByName('password').value;
  var box3 = document.getElementsByName('pwCheck').value;
  var box4 = document.getElementsByName('username').value;

  var pwCheckField = document.getElementsByName('pwCheck');

  if (box1 !== "" && box2 !== "" && box3 !== "" && box4 !== "") {
    if (box2 !== box3) {
      window.alert('비밀번호가 일치하지 않습니다. 다시 입력해주세요');
      pwCheckField.style.borderColor = 'red';
      pwCheckField.focus();
    } else {
      // 테두리 색상 초기화
      pwCheckField.style.borderColor = 'gray';
      
      window.alert('가입완료되었습니다!');
      location.href = 'login.html';
    }
  } 
  else {
    window.alert('입력되지 않은 값이 있습니다.');
  }
};



