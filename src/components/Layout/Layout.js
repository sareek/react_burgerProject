import React from 'react';

import Auxxx from '../../hoc/Auxxx';

const layout = (props) => (
    <Auxxx>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxxx>

);

export default layout;