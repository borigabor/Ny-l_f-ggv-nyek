const evek = [1978, 1975, 1954, 2010, 1981];

// ES5

var korokES5 = evek.map(function(elem){
    return 2021 - elem;
});

//console.log(korokES5);

// ES6

let korokES6 = evek.map(elem => 2021 - elem);

//console.log(korokES6);

korokES6 = evek.map((elem, index) => `Kor ${index}; ${2021 - elem}.`);  // elérhetjük elem, index, tömb

//console.log(korokES6);

korokES6 = evek.map((elem, index) => {
    const aktEv = new Date().getFullYear();
    const kor = aktEv - elem;
    return `Kor ${index}: ${kor}.`;
});

//console.log(korokES6);


/*---------------------Nyíil függvények 2------------------------*/

//ES5

var dobozES5 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {
        var objektum = this;
        document.querySelector('.zold').addEventListener('click', function(){
            var szoveg = 'Én vagyok az ' + objektum.pozicio + '. doboz, és a színem ' + objektum.szin + '.';
            console.log(this);
            alert(szoveg);
        })
    }
};

//dobozES5.kattintsRam();

// ES6

const dobozES6 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: function() {
        document.querySelector('.zold').addEventListener('click', () => {
            var szoveg = 'Én vagyok az ' + this.pozicio + '. doboz, és a színem ' + this.szin + '.';
            alert(szoveg);
        })
    }
};

//dobozES6.kattintsRam();

/*
const dobozES62 = {
    szin: 'zöld',
    pozicio: 1,
    kattintsRam: () => {
        document.querySelector('.zold').addEventListener('click', () => {
            var szoveg = 'Én vagyok az ' + this.pozicio + '. doboz, és a színem ' + this.szin + '.';
            alert(szoveg);
        })
    }
};

dobozES62.kattintsRam(); */

function Szemely(nev) {
    this.nev = nev;
}

Szemely.prototype.barataimEs5 = function(haverok) {
    var obj = this;
    var tomb = haverok.map(function(elem) {
        return obj.nev + ' barátja ' + elem + '.';
    });

    console.log(tomb);
}

var haverok = ['Jóska', 'Pista', 'Ödön'];

new Szemely('Géza').barataimEs5(haverok);

// ES6


Szemely.prototype.barataimEs6 = function(haverok) {
    const tomb = haverok.map(elem => 
        `${this.nev} barátja ${elem}.`
    );

    console.log(tomb);
}

var haverok = ['Jóska', 'Pista', 'Ödön'];

new Szemely('Géza').barataimEs6(haverok);


