export function Poem (phrase){
    this.phrase = phrase;
}

Poem.prototype.CheckSyllable = function(phrase) {
  var newPhrase = phrase.toLowerCase().split(" ");
  let x = 0;
  for(var i = 0; i < newPhrase.length; i++)
  {
    var newWord = newPhrase[i].split("");
    for(var j = 0; j < newWord.length; j++)
    {
      if(newWord[j].match(/[aeiou]/gi))
      {
        x = x + 1;
      }
      else if (newWord[newWord.length-1].match(/[aeiou]/gi))
      {
        x = x - 1;
      }
      else if (newWord[j].match(/[aeiou]/gi) && newWord[j++].match(/[bcdfghjklmnpqrstvwxyz]/gi))
      {
        x = x + 1;
      }
      else if (newWord[j].match(/["ia"]/gi))
      {
        x = x + 1;
        alert("Test 1");
      }
      else if (newWord[j].match(/["eo"]/gi))
      {
        x = x + 1;
        alert("Test 2");
      }
      else if (newWord[j].match(/["ioust"]/gi))
      {
        x = x + 1;
        alert("Test 3");
      }
    }
  }
  return x;
}
