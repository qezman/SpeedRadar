import { ref, onValue } from "firebase/database";

import { db } from '.';


export function getData(params = {  })  {
    const { onSuccess, onError } = params;

    return new Promise((resolve, reject) => {
        try {
            const speedRef = ref(db, 'speeds/');
            onValue(speedRef, (snapshot => {
                const snapshotValue = snapshot.val();
                const keys = Object.keys(snapshotValue);
                const values = Object.values(snapshotValue);

                const speeds = keys.map((key, index) => {
                    const value = values[index];
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