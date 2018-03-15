export function Poem (phrase){
    this.phrase = phrase;
}

Poem.prototype.CheckSyllable = function(phrase) {
  var newPhrase = phrase.toLowerCase().split(" ");
  let x = 0;
  for(var i = 0; i < newPhrase.length; i++)
  {
    if(newPhrase[i].match(/ded$/))
    {
      x = x + 1;
      alert("Test 5");
    }
    if(newPhrase[i].match(/ious$/))
    {
      x = x + 1;
      alert("Test 3");
    }
    if(newPhrase[i].match(/iers$/))
    {
      x = x + 1;
      alert("Test 4");
    }
    if(newPhrase[i].match((/[bcdfghjklmnpqstvwxyz]/gi) + /iers$/))
    {
      x = x + 1;
      alert("Test 5");
    }
    var newWord = newPhrase[i].split("");
    for(var j = 0; j < newWord.length; j++)
    {
    //   if (newWord[j+1] != null && (newWord[j].match(/[aeiou]/gi) && newWord[j+1].match(/[bcdfghjklmnpqrstvwxyz]/gi)) )
    //   {
    //     x = x + 1;
    //     alert("Test 0");
    //   }
    //   else if (newWord[j+1] != null && (newWord[j] == 'i' && newWord[j+1] == 'a'))
    //   {
    //     x = x + 1;
    //     alert("Test 1");
    //   }
    //   else if (newWord[j+1] != null && (newWord[j] == 'e' && newWord[j+1] == 'o'))
    //   {
    //     x = x + 1;
    //     alert("Test 2");
    //   }
    //   if(newWord[j+1] != null && (newWord[j].match(/[aeiou]/gi && newWord[j+1].match(/[aeiou]/gi))
    //   {
    //     if(newWord[j] != 'e' && newWord[j+1] != 'a'))
    //     {
    //       x = x + 1;
    //     alert("Test 10")
    //     }
    //   }
    // }
    // if(newWord.length < 3)
    // {
      // if ((newWord[newWord.length-3] == 't' || newWord[newWord.length-3] == 'd')  && newWord[newWord.length-2] == 'e' && newWord[newWord.length-1] == 'd')
      // {
      if (newWord[newWord.length-4].match(/[bcdfghjklmnpqrstvwxyz]/gi) && newWord[newWord.length-3] == 'l' && newWord[newWord.length-2] == 'e' && newWord[newWord.length-1] == 'd')
      {
        x = x + 1;
        alert("Test 7");
      }
      else if ((newWord[newWord.length-3] == 'c' || newWord[newWord.length-3] == 'g' || newWord[newWord.length-3] == 'x') && newWord[newWord.length-2] == 'e' && newWord[newWord.length-1] == 's')
      {
        x = x + 1;
        alert("Test 8");
      }
      else if ((newWord[newWord.length-3] == 's' || newWord[newWord.length-3] == 'z' || (newWord[newWord.length-4].match(/[bcdfghjklmnpqstvwxyz]/gi && newWord[newWord.length-3] == 'l'))) && newWord[newWord.length-2] == 'e' && newWord[newWord.length-1] == 's')
      {
        x = x + 1;
        alert("Test 9");
      }
    //   if(newWord < 4)
    //   {
    //       x = x + 1;
    //   }
    // }
  }
  return x;
}
}
