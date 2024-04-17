import Item from "./Item"



function List() {
    return(
        <>
            <h1>Minha lista!</h1>
            <ul>
                <li>1111</li>
                <li>2222</li>
                <Item marca="suzuky" ano_lancamento={2016}/>
                <Item marca="honda" ano_lancamento={2014}/>
                <Item />
            </ul>
        </>
    )
}

export default List