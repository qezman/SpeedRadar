import { ref, onValue } from "firebase/database";

import { db } from '.';


export function getData(params = {})  {
    const { onSuccess, onError } = params;

    return new Promise((resolve, reject) => {

//         try {
//             const testRef = ref(db, 'test/');
//             onValue(testRef, (snapshot => {
//                 const snapshotValue = snapshot.val();
//                 const keys = Object.keys(snapshotValue);
//                 const values = Object.values(snapshotValue);

//                 const tests = keys.map((key, index) => {
//                     const value = values[index];
//                     return {
//                         id: key,
//                         ...value
//                     }  
//                 })
//                 if (onSuccess) onSuccess(tests)
//                 resolve(tests)
//             }))
//         } catch (err) {
//             if (onError) onError(err)
//             reject(err)
//         }
//     })
// }



        try {
            const speedRef = ref(db, 'speeds/');
            onValue(speedRef, (snapshot => {
                const snapshotValue = snapshot.val();
                const keys = Object.keys(snapshotValue);
                const values = Object.values(snapshotValue);
                console.log(values);

                const speeds = keys.map((key, index) => {
                    const value = values[index];
                    console.log(key)
                    return {
                        id: key,
                        ...value
                    }  
                })
                if (onSuccess) onSuccess(speeds)
                resolve(speeds)
            }))
        } catch (err) {
            if (onError) onError(err)
            reject(err)
        }
    })
}