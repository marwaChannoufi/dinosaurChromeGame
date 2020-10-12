// console.log('hello wolrd')


var character=document.querySelector('#character')
varcactus=document.querySelector('#cactus')



function jump(){
    if(character.classList !='animate'){
        character.classList.add('animate')
    }
    setTimeout(()=>{
        character.classList.remove("animate")
    },1000)
}