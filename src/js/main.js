function openModal(isOpen){
    const modal = document.querySelector('.modal-container')
    if(isOpen){
        modal.style.display = 'block'
        modal.style.height = '100vh'
    }
    else{
        modal.style.display = 'none'
    }
}

document.addEventListener('DOMContentLoaded', function(){
    const backButton = document.querySelector('.modal-header .back')
    if(backButton){
        backButton.addEventListener('click', function(){
            openModal(false)
        })
    }

    const modalContainer = document.querySelector('.modal-container')
    if(modalContainer){
        modalContainer.addEventListener('click', function(e){
            if(e.target === this){
                openModal(false)
            }
        })
    }
})