let _btns = document.querySelectorAll('button')
let _userSelect = document.getElementsByClassName('user')[0]
let _h3 = _userSelect.children
let _pcSelect = document.getElementsByClassName('pc')[0]
let _h3pc = _pcSelect.children
let _userScore = document.getElementsByClassName('userSource')[0]
let _pcScore = document.getElementsByClassName('pcSource')[0]
let flag = 0
let _pcScoreCount = 0
let _gameCount = document.getElementsByClassName('gameCount')[0]
let _winSound = document.getElementById('win')
let _failSound = document.getElementById('fail')
let q = 0
console.log(_winSound);


// User Choose
_btns.forEach(btn => {
    btn.addEventListener('click', () => {

        // End of Game and Reset
        q++
        if (q > 5) {
            if (_userScore.innerText == _pcScore.innerText) {
                alert('equal')

            } else if (_userScore.innerText > _pcScore.innerText) {
                console.log('test win');
           
                    alert('You win')
            
                _winSound.play()
                console.log('test win');
            } else {
                console.log('test fail');
                _failSound.play()
               
                    alert('You lose')
             
                console.log('test fail');
            }
            setTimeout(() => {
                window.location.reload()
            }, 2000);
            return
        }
        // end of game


        _h3[1].innerHTML = btn.innerText
        let temp = _random()

        function _pcChoose() {
            _h3pc[1].innerHTML = _btns[temp].innerText

          
            return _h3pc[1].innerHTML = _btns[temp].innerText
        }
        if (temp == 0) {
            console.log('30000', _h3pc[1]);
          
            _h3pc[1].style.transform = 'rotateY(-180deg)translateX(110px)'
        }
        if (temp == 2) {
            console.log('40000', _h3pc[1]);
          
            _h3pc[1].style.transform = 'rotateZ(-90deg)translate(40px, -100px)'
        }
        if(temp == 1){
            _h3pc[1].style.transform = 'rotateZ(0deg)translateX(-70px)'

            console.log('ttttttttttttr');
        }
        _pcChoose()

        function _userWin() {

            if (_h3[1].innerHTML == '🖖' && temp == 0) {
                flag++
                _userScore.innerHTML = `Score: ${flag}`
            }
            else if (_h3[1].innerHTML == '🤜' && temp == 2) {
                flag++
                _userScore.innerHTML = `Score: ${flag}`
            }
            else if (_h3[1].innerHTML == '✌️' && temp == 1) {
                flag++
                _userScore.innerHTML = `Score: ${flag}`
            } else {
                // pc winner
                function _pcWin() {
                    if (_h3[1].innerHTML == '✌️' && temp == 0) {
                        _pcScoreCount++
                        _pcScore.innerHTML = `Score: ${_pcScoreCount}`
                        console.log('pc Winer');
                    }
                    else if (_h3[1].innerHTML == '🤜' && temp == 1) {
                        _pcScoreCount++
                        _pcScore.innerHTML = `Score: ${_pcScoreCount}`
                        console.log('pc Winer');
                    }
                    else if (_h3[1].innerHTML == '🖖' && temp == 2) {
                        _pcScoreCount++
                        _pcScore.innerHTML = `Score: ${_pcScoreCount}`
                        console.log('pc Winer');
                    }
                } _pcWin()
            }
        }
        _userWin()

        // equal
        if (_h3[1].innerHTML == _pcChoose()) {
            console.log('equal');
        }
        _gameCount.innerHTML = `
                       <strong>${q}/5</strong>
                `
        if (q > 5) {
            console.log(q);
        }
    })

})

function _random() {
    let i = 0
    return i = Math.floor(Math.random() * _btns.length)
}


