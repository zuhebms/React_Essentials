import './CoreConcepts.css'

export default function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}



// function CoreConcept(props){
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }

// we can use {image ,description,title} instead of props
// just like {image ,description,title} = props
// it is a function of destructuring and we can use these properties
// as standalone like image ,instead of props.image
