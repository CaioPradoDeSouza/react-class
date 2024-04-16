import Item from "./Item"



function List() {
    return(
        <>
            <h1>Minha lista!</h1>
            <ul>
                <li>1111</li>
                <li>2222</li>
                <Item marca="suzuky"/>
                <Item marca="honda" />
            </ul>
        </>
    )
}

export default List