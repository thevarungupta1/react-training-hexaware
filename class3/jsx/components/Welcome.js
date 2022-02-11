import React from 'react';

// JSX code
// const Welcome = () => {
//     return (
//         <div>
//             <h1>Welcome User</h1>
//         </div>
//     )
// }


// without JSX code
// const Welcome = () => {
//    return React.createElement(
//        'div',
//        null,
//        'h1',
//        'Welcome User'
//    )
// }

const Welcome = () => {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            { class: 'myclass', id: 'mytext' },
            'Welcome User'
        )
    )
 }
export default Welcome;