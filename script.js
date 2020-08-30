

const options={
  bottom: '64px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#333333',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true //
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function updateText(){
  // CODE GOES HERE
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
  
}


function makeBold(elem){
  //CODE GOES HERE
  elem.classList.toggle('active');
  document.getElementById("text-output").classList.toggle('bold');
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}


function makeUnderline(elem){
    //CODE GOES HERE
    elem.classList.toggle('active');
    document.getElementById('text-output').classList.toggle('underline');
}


function alignText(elem, alignType){
  // CODE GOES HERE
  document.getElementById("text-output").style.textAlign=alignType;
  let bu=document.getElementsByName("align");
  for(let i=0 ; i<bu.length;i++){
    bu[i].classList.remove('active');
    elem.classList.toggle('active');
  }
  

}
