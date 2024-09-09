const fotos = document.querySelector(".fotos")
const reels = document.querySelector(".reels")
const publicacoes =  document.querySelector(".publicacao")
const fora = document.querySelector(".fora")
const login = document.querySelector(".login")
var arr_public = ["img_1","img_2","img_3","img_4","img_5","img_6","img_7","img_8","img_9"]
var arr_public2 = ["reel_1", "reel_2", "reel_3", "reel_4", "reel_5", "reel_6"];
for(let i = 0; i < 9; i++){
	const foto_feed = document.createElement("div")
	fotos.prepend(foto_feed)
	foto_feed.setAttribute("class", "img")
	foto_feed.style.backgroundImage = "url(/img/"+arr_public[i]+".jpg)"
	foto_feed.addEventListener("click", entrar)
}
reels.addEventListener("click", mostrar_reels)
function mostrar_reels(){
	fotos.style.display = "none"
}

publicacoes.addEventListener("click", mostrar_publicacoes)
function mostrar_publicacoes(){
	fotos.style.display = "flex"
} 
function entrar(){
	fora.style.display = "inherit"
	login.style.display = "inherit"
}
fora.addEventListener("click", fechar)
function fechar(){
	fora.style.display = "none"
	login.style.display = "none"
}