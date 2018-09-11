const qr = require('qrcode');

qr.toDataURL('I am Batman......!', { errorCorrectionLevel: 'H' })
  .then(url => {
    console.log(url)
  })
  .catch(err => {
    console.error(err)
  })


qr.toFile('./filename.png', 'Noo i am Bhavin....', {
  color: {
    dark: '#000',  // Blue dots
    light: '#FFF' // Transparent background
  },
 margin: 4,
 scale: 15
}, function (err) {
  if (err) throw err
  console.log('done')
})