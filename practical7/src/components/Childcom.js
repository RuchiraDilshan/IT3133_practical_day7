export default function Childcom(props){
    return(
        <>
        <h3>Hello react im child</h3>
        {
            props.setfun("My name is bob")
        }
        </>
    );
}