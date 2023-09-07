import { ref, onValue } from "firebase/database";

import { db } from '.';


export function getData(params = {})  {
    const { onSuccess, onError } = params;

    return new Promise((resolve, reject) => {

        // Read from the database through the esp
        try {
            const testRef = ref(db, 'UsersData/pndmuh3UmwR1BPw3itgsN4gKhp72/readings/');
            onValue(testRef, (snapshot => {
                const snapshotValue = snapshot.val();
                const keys = Object.keys(snapshotValue);
                const values = Object.values(snapshotValue);

                const readings = keys.map((key, index) => {
                    const value = values[index];
                    return {
                        id: key,
                        ...value
                    }
                })
                if (onSuccess) onSuccess(readings)
                resolve(readings)
            }))
        } catch (err) {
            if (onError) onError(err)
            reject(err)
        }
    })
}



// Dummy static code from the database
//         try {
//             const speedRef = ref(db, 'speeds/');
//             onValue(speedRef, (snapshot => {
//                 const snapshotValue = snapshot.val();
//                 const keys = Object.keys(snapshotValue);
//                 const values = Object.values(snapshotValue);
//                 console.log(values);

//                 const speeds = keys.map((key, index) => {
//                     const value = values[index];
//                     console.log(key)
//                     return {
//                         id: key,
//                         ...value
//                     }  
//                 })
//                 if (onSuccess) onSuccess(speeds)
//                 resolve(speeds)
//             }))
//         } catch (err) {
//             if (onError) onError(err)
//             reject(err)
//         }
//     })
// }