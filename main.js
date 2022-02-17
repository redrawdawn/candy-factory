
//Buy chocolate
const buyChocolate = () => {
    const bought={
     item:'Milk chocolate'
    }
    return bought
}

//Add flavoring
const addFlavoring = (object) => {
    object.flavor = 'mint'

    return object
}

//Creat mixture
const makeBarkMixture = (object) => {
    if(object.flavor==='mint'){
        object.mixed=true
    }
    else{
         object.mixed=false
    }
    return object
}

//Bake the mixture
const bakeCandy = (object) => {
    if(object.mixed===true){
        object.baked=true
    }
    else{
        object.baked=false
    }
    return object
}

//Brek the bark
const breakBark = (object) => {
    if(object.baked===true){
        return ['mint chocolate bark piece','mint chocolate bark piece','mint chocolate bark piece','mint chocolate bark piece','mint chocolate bark piece']
    }
}



const start=buyChocolate()
const flavor=addFlavoring(start)
const mix=makeBarkMixture(flavor)
const candy=bakeCandy(mix)
const bark=breakBark(candy)

console.log(bark)