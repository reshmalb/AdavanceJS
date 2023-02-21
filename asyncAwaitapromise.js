console.log("person1:shows ticket")
console.log("person2:shows ticket")

const premovie= async()=>{
    const wifeBringingPromise= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('ticket') ,3000)     
    }) 
    
    const getPopcorn= new Promise((resolve,reject)=>resolve('popcorn'))
    const getButter= new Promise((resolve,reject)=>resolve('butter'))
    const getColdDrinks= new Promise((resolve,reject)=>resolve('cold drinks'))
    
    let ticket=await wifeBringingPromise;
    console.log(`husband:i have ${ticket}`)
    console.log(`wife:I need popcorn`)
    let popcorn=await getPopcorn;
    console.log(`husband:i got ${popcorn}`)
    console.log(`wife:I need butter`)
    let butter=await getButter;
    console.log(`husband:i got ${butter}`)
    console.log(`wife:I need coke`)
    let colddrinks=await getColdDrinks;
    console.log(`husband:i got ${colddrinks}`)
    console.log(`wife:Thanks, let's go`)
    
 return ticket;
} 
premovie().then((m)=>console.log(`person 3 shows${m}`))

console.log("person4:shows ticket")
console.log("person5:shows ticket")


