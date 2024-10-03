import "./Label.css"
 

 export  interface Props {
    /* 
      * The text to display in the label
     */
    label :  string
    /* 
      * The size of the label
     */
    size ?: "normal" | "h1" | "h2" | "h3" 
    /* 
      * The color of the label
     */
    fontColor ?: string
    /* 
      * The background color of the label
     */
    color ?: "text-primary" | "text-secondary" | "text-tertiary" 
    /* 
      * to capitalize the label
      */
    allCaps ?: boolean
  }

 export const Label = ({label, size = "h1", allCaps = false, color = "text-primary", fontColor} : Props) => {
   return (
     <span className={`${size} ${fontColor || color}`} >{allCaps? label.toLocaleUpperCase() : label} </span>
   )
 }
 