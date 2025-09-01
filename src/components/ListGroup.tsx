import { useState } from 'react';

interface Props{
    items: string[];
    heading: string;
    OnSelectItem: (item: string) => void;
}
function ListGroup({items, heading, OnSelectItem}: Props){
    const [SelectedIndex, setSelectedIndex] = useState(-1);

    return (
        // Fragment used to wrap multiple elements <> and only uses html unless you add {}
        <> 
            <h1>List</h1>
            {items.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                {items.map((item,index)=>
                <li className={SelectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                key={item} 
                onClick={() => {
                    setSelectedIndex(index);
                    OnSelectItem(item);
                }}
                >
                    {item}
                </li>
                )}
            </ul>
        </>
    );
}
    // <ul className="list-group">

export default ListGroup;
/* Rendring: use an array with #nt strings, then use . map cause for is not used
in jsx. ex: const items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    items.map(item=><li>{item}</li>)
    function ListGroup(){
    let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    items = [];

    const getMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null;
    };
    return (
        // Fragment used to wrap multiple elements <> and only uses html unless you add {}
        <> 
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map(item=>
                <li key={item}>{item}</li>
                )}
            </ul>
        </>
    );
}
    type annotation in ts
    managing state
    active for highlighting a list

    Event handler (click event)
    import type { MouseEvent } from "react"; 
    const handleClick = (event: MouseEvent) => console.log(event);
    onClick={handleClick}
    useState is a hook for managing state in functional components.
*/