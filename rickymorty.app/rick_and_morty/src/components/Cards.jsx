import Card from './Card';


export default function Cards({characters,onClose}) {
  
   return( 
   <div>
      { 
          characters.map(({id,name,spacies,gender,image}) => {
            return <Card 
               key={id}
               name={name}
               spacies={spacies}
               gender={gender}
               image={image} 
               onClose={()=>{onClose(id)}}
               id={id} 
            />
         })
      }
   </div>)
}

