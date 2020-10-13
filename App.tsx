import React from 'react';
import {View} from 'react-native';
import BarChart from './src/Graph';

const data = [
    { label: 'Jan', value: 500 },
    { label: 'Feb', value: 312 },
    { label: 'Mar', value: 424 },
    { label: 'Apr', value: 745 },
    { label: 'May', value: 89 },
    { label: 'Jun', value: 434 },
    { label: 'Jul', value: 650 },
    { label: 'Aug', value: 980 },
    { label: 'Sep', value: 123 },
    { label: 'Oct', value: 186 },
    { label: 'Nov', value: 689 },
    { label: 'Dec', value: 643 }
]

export default function App() {
    return (
        <View>
            <BarChart data={ data }/>
        </View>
    );
}

// <Surface width={500} height={500}>
//     <Group>
//         <Shape
//             d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
//             stroke="#000"
//             strokeWidth={1}
//         />
//     </Group>
// </Surface>
