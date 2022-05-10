import React, { useEffect } from "react";

const LifecycleFuncComponent: React.FC = (props) => {
    useEffect(() => {
        console.log("[LifecycleFunc] Update");
        return () => console.log("[LifecycleFunc] Unmount");
    });

    return(<div>
        <h1>Lifecycle Component</h1>
    </div>);
}

export default LifecycleFuncComponent;