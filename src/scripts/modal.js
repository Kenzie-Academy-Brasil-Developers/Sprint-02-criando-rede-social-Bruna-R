function openModal(){
    const main =document.getElementById("main")
    const btnOpen = document.querySelectorAll(".open")

    btnOpen.forEach(element => {
        element.addEventListener('click', ()=>{
            const modal = createModal(element)

            main.appendChild(modal)

            closeModal()
        });
    })

}

function createModal(element){

let name 
let stack
let image
let codigoUsurario
let title
let text

    posts.forEach(elementoPost => {
    if(elementoPost.id_post == element.dataset["id"]){
        codigoUsurario = elementoPost.user
        title = elementoPost.title
        text = elementoPost.text
    }
})
    
    users.forEach(ele => {
        if(ele.id === codigoUsurario){
            name = ele.user
            stack = ele.stack
            image = ele.img
        }
})

    const sectionModal = document.createElement("section")
    const containerModal = document.createElement("div")
    const btnClose = document.createElement("button")
    const divProfile = document.createElement("div")
    const imgProfile = document.createElement("img")
    const infoProfile = document.createElement("div")
    const nameProfile = document.createElement("h2")
    const stackProfile = document.createElement("span")
    const divPost = document.createElement("div")
    const titlePost = document.createElement("h2")
    const textPost = document.createElement("p")


    sectionModal.classList = "section__modal"

    containerModal.classList = "section__container section__container--modal"

    btnClose.classList = "modal__btn"
    btnClose.innerText = "X"

    divProfile.classList ="profile__container"

    imgProfile.classList ="profile__img"
    imgProfile.src = image

    infoProfile.classList ="profile__info"

    nameProfile.innerText = name

    stackProfile.innerText = stack


    divPost.classList = "post__content post__content--modal"

    titlePost.classList ="post__title post__title--card"
    titlePost.innerText = title

    textPost.classList ="post__text"
    textPost.innerText = text


    infoProfile.append(nameProfile, stackProfile)
    divProfile.append(imgProfile, infoProfile)
    divPost.append(titlePost, textPost)
    containerModal.append(btnClose, divProfile, divPost)
    sectionModal.append(containerModal)

    return sectionModal
    
}

function closeModal() {
    const btnCloseModal = document.querySelector('.modal__btn')
    const sectionModal = document.querySelector('.section__modal')

    btnCloseModal.addEventListener('click', () =>{
        sectionModal.remove()
    })
}

openModal()
