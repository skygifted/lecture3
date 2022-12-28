

function ChangeBg(){
 
    const ChangeTextBg = document.getElementById('text')

       ChangeTextBg.style.backgroundColor = 'green'

     
}

function ReturnBg(){

  const ChangeTextBg = document.getElementById('text')

       ChangeTextBg.style.backgroundColor = 'red'

}


// String Methods

{

    const List = 'Car, Phone, House, Bike'

    const NewList = List.length
 
 
 
 
}

{
    
    const List = 'Car, Phone, House, Bike'
    
    const NewList = List.substr(5,4)

}
{

    const List = 'Car, Phone, House, Bike'

    const NewList = List.slice(5,4)
 
 
 
 
}

{

    const List = 'Car, Phone, House, Bike'

    const NewList = List.substring(5,4)
 
 
 
 
}

{

    const List = 'Car, Phone, House, Bike'

    const NewList = List.replace('House','BMW')
 
 
 
 
}



{

    
   const List = 'Car, Phone, House, Bike'

   const NewList = List.replace(/HOUSE/i,'BMW')



}

{


   const List = 'Car, Phone, House, House,House, Bike'

   const NewList = List.replace(/House/g,'BMW')

}


{


   const List = 'Car, Phone, House, House,House, Bike'

   const NewList = List.replaceAll('House','BMW')

}


{

    const List = 'Car, Phone, House, House,House, Bike'

    const NewList = List.toLocaleUpperCase()
 
 
 
}

{


   const List = 'Car, Phone, House, House,House, Bike'

   const NewList = List.toLowerCase()


}


{

    const List = 'Car, Phone, House,Bike'
    const List2 = "Apple, Mango, Banana"
 
    const NewList = List.concat(" ", List2)
 
 
 
}


{

    const List = ' Car       '
    
    console.log(List.length)
  
    const NewList = List.trim()
 
}

{

    const List = ' Car       '
    
    console.log(List.length)
  
    const NewList = List.trimStart()
 
 
 
 
}


{

     
   const List = ' Car       '
    
   console.log(List.length)
 
   const NewList = List.trimEnd()
}

{

 
   const List = '2'
    
 
   const NewList = List.padStart(2,'0')





}

{

    const List = '2'
    
 
    const NewList = List.padEnd(2,'0')
 
 
 
 
}

{

    const List = 'Mango'
    
 
    const NewList = List.charAt(3)
 
 
 
 
}

{


 
   const List = 'Mango'
    
 
   const NewList = List.charCodeAt(1)



}

{

       const List = 'Mango'
    
 
   const NewList = List.split('')


}

{

     
   const List = 'Mango, Apple, Banana, Banana'
    
 
   const NewList = List.indexOf('Apple')



}

{

    const List = 'Mango, Apple, Banana, Banana'
    
 
    const NewList = List.lastIndexOf('Banana')
 
 
  
}

{


 
   const List = 'Mango, Apple, Banana, Banana'
    
 
   const NewList = List.search('Banana')




}

{

     
   const List = 'Mango, Apple, Banana, Banana'
    
 
   const NewList = List.match('Banana')


 console.log(Array.from(NewList))
}

{

     
   const List = 'Mango, Apple, Banana, Banana'
    
 
   const NewList = List.matchAll('Banana')


 console.log(Array.from(NewList))
}

{

    
   const List = 'Mango, Apple, Banana, Banana'
    
 
   const NewList = List.includes('Banana')

}

{
    const List = 'Mango, Apple, Banana, Banana'
    
 
    const NewList = List.startsWith('m')
 
}

{

    const Textlength = text.length

 
    const List = 'Mango, Apple, Banana, Banana'
     
  
    const NewList = List.endsWith('a')
 
 
 
 
}

{

      // const List = `The sum of 2 + 2 is ${2 + 2}`
   const List = 2 + 2
    
 
   const NewList =  `The sum of 2 + 2 is ${List}`


 console.log(NewList)
}

{

     
  // const List = `The sum of 2 + 2 is ${2 + 2}`
   const List = (0.2 * 10 + 0.1 * 10) / 10
    
 

}

{

    // const List = `The sum of 2 + 2 is ${2 + 2}`
   const List = 45.98898
   let d = List.toFixed(3)

}

{

     
  // const List = `The sum of 2 + 2 is ${2 + 2}`
   const List = 45.98898

   
   let d = List.toPrecision(4)


}