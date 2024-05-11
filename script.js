
const options = {
    bottom: '200px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.53s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '💡', // default: ''
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
      






  const sr = ScrollReveal({
    origin: 'top',
    distance: '10px',
    duration: 3000,
    reset: true
  });
  
  sr.reveal('.box-containe , .doctor,.box ,.footer ,.content', {
    interval: 10
  })









 