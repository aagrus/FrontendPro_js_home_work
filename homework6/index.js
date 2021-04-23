


function story() {

    

    let aftor = {
        name: 'aftor',
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let kolobok = {
        name: 'kolobok',
        live: true,
        die: function() {
            this.live = false;
        },
        characterNames: [], 
        goAwayFrom: function(characterName) { 
    	    this.characterNames.push(characterName);
        }, 
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        },
        rolled: function(act) {
            console.log(`${this.name} * ${act}` );
        },
        sings: function() {
            let songText = `Я ${kolobok.name}, ${kolobok.name},
            Я по коробу скребен,
            По сусеку метен,
            Да в масле пряжон,
            На окошке стужон.
            Я от ${grandFa.name} ушел, 
            Я от ${grandMa.name} ушел`;
            this.characterNames.forEach((element) => { 
                songText += `, Я от ${element} ушел`;
            });
            let endsong = "";
            this.characterNames.forEach((element) => { 
                endsong += ` и от тебя ${element} тоже уйду,`;
            });
            console.log(`${this.name} *sings ${songText} ${endsong}`);
        }
    };

    let grandFa = {
        name: 'Grandfather',
        mood: 'normal',
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let grandMa = {
        name: 'Grandmother',
        mood: 'normal',
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let bunny = {
        name: 'Bunny',
        full: false,
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let wolf = {
        name: 'Wolf',
        full: false,
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let bear = {
        name: 'Bear',
        full: false,
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        }
    };

    let fox = {
        name: 'Fox',
        full: false,
        say: function(phrase) {
            console.log(`${this.name} : ${phrase}`);
        },
        eat: function(act) {
            console.log(`${this.name} * ${act}`);
        },
    };

    chapter1 (aftor, kolobok, grandFa, grandMa);
    chapter2 (aftor, kolobok, grandFa, grandMa, bunny);
    chapter3 (aftor, kolobok, grandFa, grandMa, bunny, wolf);
    chapter4 (aftor, kolobok, grandFa, grandMa, bunny, wolf, bear);
    chapter5 (aftor, kolobok, grandFa, grandMa, bunny, wolf, bear, fox);


    console.log (aftor);
    console.log (kolobok);
    console.log (grandFa);
    console.log (grandMa);
    console.log (bunny);
    console.log (wolf);
    console.log (bear);
    console.log (fox);
    
}


story();


function chapter1 (aftor, kolobok, grandFa, grandMa) {
    aftor.say(`Жили-были старик со старухой. Вот и говорит ${grandFa.name} ${grandMa.name}:`);
    grandFa.say(`Поди-ка, ${grandMa.name},по коробу поскреби, по сусеку помети, не наскребешь ли муки на колобок.`);
    aftor.say(`Взяла ${grandMa.name} крылышко, по коробу поскребла, по сусеку помела и наскребла муки горсти две. Замесила муку на сметане, состряпала колобок. Изжарила в масле. И на окошко студить положила.`);
    kolobok.rolled(`${kolobok.name} полежал, полежал,Взял да и покатился — с окна на лавку, с лавки на пол. Пó полу к двери, прыг через порог — да в сени. Из сеней на крыльцо, с крыльца на двор, Со двора за ворота, дальше и дальше.`);
    
}

function chapter2 (aftor, kolobok, grandFa, grandMa, bunny) {
    grandFa.mood = 'sad';
    grandMa.mood = 'sad'; 
    aftor.say(`Катится ${kolobok.name} по дороге, навстречу ему ${bunny.name}.`);
    bunny.say(`${kolobok.name}, ${kolobok.name} я тебя съем!`);
    kolobok.say(`Не ешь меня, ${bunny.name}, я тебе песенку спою:`);
    kolobok.sings()
    aftor.say(`И покатился по дороге — только ${bunny.name} его и видел!`);
    kolobok.goAwayFrom(bunny.name);
}

function chapter3 (aftor, kolobok, grandFa, grandMa, bunny, wolf) {
    aftor.say(`Катится ${kolobok.name} по дороге, навстречу ему ${wolf.name}.`);
    wolf.say(`${kolobok.name}, ${kolobok.name} я тебя съем!`);
    kolobok.say(`Не ешь меня, ${wolf.name}, я тебе песенку спою:`);
    kolobok.sings()
    aftor.say(`И покатился по дороге — только ${wolf.name} его и видел!`);
    kolobok.goAwayFrom(wolf.name);

}

function chapter4 (aftor, kolobok, grandFa, grandMa, bunny, wolf, bear) {
    aftor.say(`Катится ${kolobok.name} по дороге, навстречу ему ${bear.name}.`);
    bear.say(`${kolobok.name}, ${kolobok.name} я тебя съем!`);
    kolobok.say(`Не ешь меня, ${bear.name}, я тебе песенку спою:`);
    kolobok.sings()
    aftor.say(`И покатился по дороге — только ${bear.name} его и видел!`);
    kolobok.goAwayFrom(bear.name);

}

function chapter5 (aftor, kolobok, grandFa, grandMa, bunny, wolf, bear, fox) {
    aftor.say(`Катится ${kolobok.name} по дороге, навстречу ему ${fox.name}.`);
    fox.say(`${kolobok.name}, ${kolobok.name}, куда катишься?`);
    kolobok.say(`Качусь по дорожке.`);
    fox.say(`${kolobok.name}, ${kolobok.name}, спой мне песенку!`);
    aftor.say('Колобок и запел'); 
    kolobok.sings();
    aftor.say(`А ${fox.name} говорит:`);
    fox.say (`Ах, песенка хороша, да слышу я плохо. ${kolobok.name}, ${kolobok.name}, сядь ко мне на носок Да спой еще разок, погромче.`);
    aftor.say(`${kolobok.name} вскочил ${fox.name} на нос. И запел погромче ту же песенку. А ${fox.name} опять ему: `); 
    fox.say (`${kolobok.name}, ${kolobok.name}, сядь ко мне на язычок. Да пропой в последний разок.`);
    aftor.say(`${kolobok.name} прыг ${fox.name} на язык `);
    fox.eat (`А ${fox.name} его — гам! — и съела.`)
    fox.full = true;
    kolobok.die();

}

