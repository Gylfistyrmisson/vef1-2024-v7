/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    a = split(str);
    b = '';
    c = 0;
    for (let i = 0; i < a.length;i++) {
      if (c < a[i].length){
        c = a[i].length;
        b = a[i];
      }
    }
    return b;
  }
  else {
    return null;
  }
}

console.assert(longest('123 123 1234 12345 123 12346') ==='12345','longest: skilar 12345 fyrir \'123 123 1234 12345 123 12346\'');
console.assert(longest(1) === null,'longest: skilar null fyrir tölu');

function shortest(str) {
  if (isString(str)) {
    a = split(str);
    b = '';
    c = a[0].length + 1;
    for (let i = 0; i < a.length;i++) {
      if (c > a[i].length){
        c = a[i].length;
        b = a[i];
      }
    }
    return b;
  }
  else {
    return null;
  }
}

console.assert(shortest('1 12 123 2 123') === '1', 'shortest: skilar \'1\' fyrir \'1 12 123 2 123\'');
console.assert(shortest(1)===null, 'shortest: skilar null fyrir tölu');

function reverse(str) {
  if (isString(str)) {
    a = '';
    for (let i = str.length - 1; i >= 0; i--) {
      a += str[i];
    }
    return a;
  }
  else {
    return null;
  }
}

console.assert(reverse('hallo')==='ollah','reverse: skilar \'ollah\' fyrir \'hallo\'');
console.assert(reverse('')==='','reverse: skilar tómum streng fyrir tóman streng');
console.assert(reverse(1)===null,'reverse: skilar null ef ekki strengur');

function palindrome(str) {
  if (isString(str) && str != '') {
    if (str == reverse(str)) {
      return true;
    }
  }
  return false;
}

console.assert(palindrome('hannah')===true,'palindrome: skilar true fyrir strenginn \'hannah\'');
console.assert(palindrome('hanna')===false,'palindrome: skilar false fyrir strenginn \'hanna\'');

function vowels(str) {
  cnt = 0;
  for (let i = 0; i < str.length; i++){
    if(VOWELS.includes(str[i])) {
      cnt++;
    }
  }
  return cnt;
}

console.assert(vowels('palantir elendir anduril')===9,'vowels: skilar 9 fyrir strenginn \'palantir elendir anduril\'');
console.assert(vowels(1)===0,'vowels: skilar 0 ef ekki strengur');
console.assert(vowels('rst')===0,'vowels: skilar 0 ef engir sérhljóðar');

function consonants(str) {
  cnt = 0;
  for (let i = 0; i < str.length; i++){
    if(CONSONANTS.includes(str[i])) {
      cnt++;
    }
  }
  return cnt;
}

console.assert(consonants('palantir elendir anduril')===13,'consonants: skilar 13 fyrir strenginn \'palantir elendir anduril\'');
console.assert(consonants(1)===0,'consonants: skilar 0 ef ekki strengur');
console.assert(consonants('oóö')===0,'consonants: skilar 0 ef enginn samhljóði');

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(`Strengur er gefinn og hann settur í gegnum 6 mismunandi föll. Síðan eru gefnar eftirfarandi upplýsingar um strenginn:\n
    Lengsta og stysta orðið í strengnum.\n
    Hvernig strengurinn er öfugur.\n
    Hversu margir sérhljóðar og samhljóðar eru í strengnum.\n
    Hvort strengurinn sé samhverfur eða ekki.`);
  skilabod = prompt('Vinsamlegast skrifaðu inn streng:');
  if (isString(skilabod)) {
    l = longest(skilabod);
    s = shortest(skilabod);
    r = reverse(skilabod);
    v = vowels(skilabod);
    c = consonants(skilabod);
    p = palindrome(skilabod);
    k = 'ekki '
    if (p) {k = ''};
    
    alert(`
      Lengsta orðið í strengnum er: ${l}\n
      Stysta orðið í strengnum er: ${s}\n
      Strengurinn aftur á bak er: ${r}\n
      Strengurinn hefur ${v} sérhljóða\n
      Strengurinn hefur ${c} samhljóða\n
      Strengurinn er ${k}samhverfur`);
    
    aftur = confirm('Viltu gera aftur?');
    if (aftur) {start()}  
  }
}

start()