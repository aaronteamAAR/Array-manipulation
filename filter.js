const c = console.log
const techs = ['react', 'vue', 'next', 'svelte']

const myFav = techs.filter(word => word.charAt(0) === "r" || word.charAt(0) === "n")
c(myFav)
