
  // 该函数将生成一个随机的日文字符
  function generateRandomJapaneseCharacter() {
    const unicodeSet = [
      [0x3041, 0x3096], // 平假名Hiragana
      [0x30A0, 0x30FF], // 片假名Katakana
      // 您可以添加更多范围来包括更多的字符，如一些常用的汉字范围
    ];

    const range = unicodeSet[Math.floor(Math.random() * unicodeSet.length)];
    return String.fromCharCode(Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0]);
  }

  // 该函数将接收一个字符串，并返回一个具有相同长度的新字符串，该字符串包含随机的日文字符
  function replaceWithRandomJapaneseCharacters(str) {
    return Array.from(str, (char) => {
      // 保留空格和换行符不变
      if (char === ' ' || char === '\n') {
        return char;
      }
      return generateRandomJapaneseCharacter();
    }).join('');
  }

  // 该函数遍历页面上的所有文本节点，并用随机的日文字符替换其内容
  function replaceAllTextNodesWithJapanese(element) {
    if (element.nodeType === Node.TEXT_NODE) {
      // 如果是文本节点，则替换内容
      element.textContent = replaceWithRandomJapaneseCharacters(element.textContent);
    } else {
      // 否则，递归处理子节点
      for (let i = 0; i < element.childNodes.length; i++) {
        replaceAllTextNodesWithJapanese(element.childNodes[i]);
      }
    }
  }

  // 当页面加载完毕时执行替换操作
  window.onload = function () {
    replaceAllTextNodesWithJapanese(document.body);
  };
