function render(){
    const postsList = document.getElementById("post-list") 

    posts.forEach(element => {
        const post = createPost(element)

        postsList.appendChild(post)
    })
}

function createPost(element){

    const{id_post, user, title, text} = element

    const profileUser = createProfile(user)

    const tagLi = document.createElement("li")
    const divPost = document.createElement("div")
    const titlePost = document.createElement("h2")
    const textPost = document.createElement("p")
    const btnPost = document.createElement("button")
    const imgLike = document.createElement("img")

    tagLi.classList = "post__card"

    divPost.classList = "post__content"

    titlePost.classList ="post__title post__title--card"
    titlePost.innerText = title

    textPost.classList ="post__text"
    textPost.innerText = text

    btnPost.classList = "btn post__btn open"
    btnPost.dataset.id = id_post
    btnPost.id = id_post
    btnPost.innerText = "Abrir post"

    imgLike.classList = "post__like"
    imgLike.src = "./src/assets/img/Vector.svg"

    divPost.append(titlePost, textPost)
    tagLi.append(profileUser, divPost, btnPost, imgLike)

    return tagLi
}

function renderSugest(){
const aside = document.querySelector(".aside__sugest")

    sugestUsers.forEach(element => {
        const sugest = createSugest(element)

        aside.append(sugest)
    })

}

function createSugest(sugest){

    const profile = createProfile(sugest)

    const tagLi = document.createElement("li")
    const btnFollow = document.createElement("button")


    btnFollow.classList = "btn aside__button"
    btnFollow.innerText = "Seguir"


    tagLi.append(profile, btnFollow)

    return tagLi
}


function createProfile(idUser){

    const findUser = users.find((user)=> user.id === idUser)

    const{id, user, stack, img} = findUser

    const divProfile = document.createElement("div")
    const imgProfile = document.createElement("img")
    const infoProfile = document.createElement("div")
    const nameProfile = document.createElement("h2")
    const stackProfile = document.createElement("span")

    divProfile.classList ="profile__container"

    imgProfile.classList ="profile__img"
    imgProfile.src = img

    infoProfile.classList ="profile__info"

    nameProfile.innerText = user

    stackProfile.innerText = stack

    infoProfile.append(nameProfile, stackProfile)
    divProfile.append(imgProfile, infoProfile)

    return divProfile
}

render()
renderSugest()
