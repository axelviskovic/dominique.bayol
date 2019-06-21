class Filter{
  constructor()
  {
    this.buttons = document.querySelectorAll('.filter div')
    this.cards = document.querySelectorAll('.card')

    this.init()
  }

  init(){
    for(let i=0; i<this.buttons.length; i++)
    {
      this.buttons[i].addEventListener('click', ()=>{
        let target = this.buttons[i].getAttribute('data-target');

        for(let j=0; j< this.cards.length; j++)
        {
          if(this.cards[j].classList.contains(target))
          {
            this.cards[j].style.display= 'block'
          }
          else{
            this.cards[j].style.display= 'none'
          }
        }
      })
    }
  }

}

let myFilter = new Filter()
