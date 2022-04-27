// Scorebutton +1 +2 +2 (Home & Away)
    function Score(team, number){
        if(team == "home"){
            document.querySelector('#homescore').textContent = parseInt(document.querySelector('#homescore').textContent) + number;
        }else{
            document.querySelector('#awayscore').textContent = parseInt(document.querySelector('#awayscore').textContent) + number;
        }
    }

// Resetbutton (Away & Home)
    function Reset(){
        awayscore.textContent = 0;
        homescore.textContent = 0;
    };

// Resetbutton (Away & Home)
    function Team(){
        let home = prompt('Geben Sie ein Mannschaftsname für die Homemannschaft ein: (min 1, max 10 Buchstaben)', '');
        if(home.length < 11 && home != ''){
            document.querySelector('#p1').innerHTML = '&nbsp;' + home + '&nbsp;';
        };
        let away = prompt('Geben Sie ein Mannschaftsname für die Auswärtsmannschaft ein: (min 1, max 10 Buchstaben)', '');
        if(away.length < 11 && away != ''){
            document.querySelector('#p2').innerHTML = '&nbsp;' + away + '&nbsp;';
        };
    };