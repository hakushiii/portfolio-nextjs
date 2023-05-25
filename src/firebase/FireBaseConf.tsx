import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const startFirebaseDB = () => {
    const config = {
        apiKey: "AIzaSyD3Q6n6FW-hQM_NaHVgop5uWAP4aU0_fuI",
        authDomain: "dynazenon-ada3d.firebaseapp.com",
        databaseURL: "https://dynazenon-ada3d-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "dynazenon-ada3d",
        storageBucket: "dynazenon-ada3d.appspot.com",
        messagingSenderId: "796345421239",
        appId: "1:796345421239:web:397840d80ca26743056c32",
        measurementId: "G-GTCKXLR0R7"
    }

    const app = initializeApp(config)

    return getDatabase(app)
}

export default startFirebaseDB