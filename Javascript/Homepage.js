const text = 'Hi! My name is Justin and I';

const varyingText = ['am a game designer.', 'make games that explore complex emotions.', 'am a pixel artist.', 'love anthropology.', 'am constantly learning new things.', 'play a lot of competitive games.', 'like messing around with shaders.'];

const totalText = text + ' ' + varyingText[0];

$(document).ready(() => {
  for (let x=0; x<=text.length; x++) {
    setTimeout(() => {
      $('.old-text').text(text.substring(0, x));
    }, 100*x);
  }
  setTimeout(() => {
    typeNext(0);
  }, 100 * text.length);

  const video = $('video');
  const height = video.height();
  const width = video.width();
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  const heightRatio = windowHeight / height;
  const widthRatio = windowWidth / width;

  console.log(heightRatio, widthRatio);

  if (heightRatio > widthRatio) {
    $('video').css('height', `${height * heightRatio}px`);
  } else {
    $('video').css('width', `${width * widthRatio}px`);
  }
});

const typeNext = (i) => {
  const randomHue = Math.random() * 360;
  $('.new-text').css('color', `hsl(${randomHue}, 50%, 50%)`);
  for (let z=0; z<=varyingText[i].length; z++) {
    setTimeout(() => {
      const html = ' ' + varyingText[i];
      $('.new-text').text(html.substring(0, z+1));
    }, 100 * z);
  }
  for (let x=0; x<=varyingText[i].length; x++) {
    setTimeout(() => {
      const html = $('.new-text').text();
      $('.new-text').text(html.substring(0, varyingText[i].length - x));
    }, 100 * x + varyingText[i].length * 100 + 2500);
  }
  setTimeout(() => {
    typeNext((i + 1) % varyingText.length)
  }, 200 * varyingText[i].length + 2500)
}

$('.games').on("mouseover", function() {
  $('video').css('opacity', '1');
  $('.about').css('opacity', '0');
  $('.resume').css('opacity', "0");
})

$('.games').on("mouseout", function() {
  $('video').css('opacity', '0');
  $('.about').css('opacity', '1');
  $('.resume').css('opacity', '1');
})

$('.about').on("mouseover", function() {
  $('.games').css('opacity', '0');
  $('.resume').css('opacity', '0');
})

$('.about').on("mouseout", function() {
  $('.games').css('opacity', '1');
  $('.resume').css('opacity', '1');
})

$('.resume').on("mouseover", function() {
  $('.games').css('opacity', '0');
  $('.about').css('opacity', '0');
})

$('.resume').on("mouseout", function() {
  $('.games').css('opacity', '1');
  $('.about').css('opacity', '1');
})