import React from "react";

interface IFirstFuncComponentProps {
    title: string;
    onComplete: (msg: string) => void;
}

const FirstFuncComponent: React.FC<IFirstFuncComponentProps> 
    = (props: IFirstFuncComponentProps) => {
        return(<div>
            <h1>{props.title} from First Function Component</h1>
            <button onClick={(evt: React.MouseEvent) => 
                props.onComplete("Questo è il dato da restituire a paparino.")}>Click me!</button>
        </div>
        );
    };

export default FirstFuncComponent;