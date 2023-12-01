

    const choice1 = document.querySelector('.choose1')
    const choice2 = document.querySelector('.choose2')
    const amount = document.querySelector('.amount')
    const amountInput = document.getElementById('amount')

    choice2.addEventListener('change', ()=> {
        amount.style.display = this.checked ? 'inline-block' : 'none';
        amountInput.style.display = this.checked ? 'inline-block' : 'none';
    })

    choice1.addEventListener('change', ()=> {
        amount.style.display = this.checked ? 'none' : 'inline-block';
        amountInput.style.display = this.checked ? 'none' : 'inline-block';
    })


