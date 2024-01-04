export default function Section({title,children,...props}) {
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
// if we want to add more than one attribute to the section
// element we would have to specify those id className eetc.
// instead we are use the concept of forwarded props
// we can use the rest operator in the props destructutring 
// like ...props the "props" name can be whatever we want 