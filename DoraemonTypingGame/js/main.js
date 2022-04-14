'use strict';

{
  let dohguImg;
  let dohguName;
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const answerImg = document.getElementById('answerImg');
  const answerText =  document.getElementById('answerText');

  const dohguImgs = [
    'img/takekoputa.jpeg',
    'img/dokodemodoa.jpeg',
    'img/honnyakukonnnyaku.jpeg',
    'img/annkipann.jpeg',
    'img/ishikoroboushi.jpeg',
    'img/taimumashinn.jpeg',
    'img/moshimobokkusu.jpeg',
    'img/kuukihou.jpeg',
    'img/toumeimanto.jpeg'
  ];

  const dohguNames = [
    'タケコプター',
    'どこでもドア',
    '翻訳こんにゃく',
    '暗記パン',
    '石ころ帽子',
    'タイムマシン',
    'もしもボックス',
    '空気砲',
    '透明マント'
  ];

  const words = [
    'takekoputa-',
    'dokodemodoa',
    'honnyakukonnnyaku',
    'annkipann',
    'ishikoroboushi',
    'taimumashinn',
    'moshimobokkusu',
    'kuukihou',
    'toumeimanto'
  ];

  function setDohguImg() {
      dohguImg = dohguImgs.splice(0, 1)[0];
      answerImg.src = dohguImg;
      console.log(dohguImg);
    }

  
  function setDohguName() {
      dohguName = dohguNames.splice(0, 1)[0];
      answerText.textContent = dohguName;
    }

  function setWord() {
      word = words.splice(0, 1)[0];
      target.textContent = word;
      loc = 0;
    }

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return;
    }
    
    isPlaying = true;
    startTime = Date.now(); 

    setDohguImg();
    setDohguName();
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;

    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `${elapsedTime}秒  かかったよ。`;
        console.log(elapsedTime);
        return;
      }

      setDohguImg();
      setDohguName();
      setWord();
    }
  });
}