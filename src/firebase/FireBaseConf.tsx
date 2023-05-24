import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const startFirebaseDB = () => {
    const config = {
        apiKey: "AIzaSyAxc8zhc-s5ASLgh7nzmU7b6_t3yii3BaE",
        authDomain: "dynazenon-hksh.firebaseapp.com",
        projectId: "dynazenon-hksh",
        storageBucket: "dynazenon-hksh.appspot.com",
        messagingSenderId: "542379814829",
        appId: "1:542379814829:web:91dda779a3fb5b8d873b24",
        measurementId: "G-8NB0SE92PL"
    }

    const app = initializeApp(config)

    return getDatabase(app)
}

export default startFirebaseDB