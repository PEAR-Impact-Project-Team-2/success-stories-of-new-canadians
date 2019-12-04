import React, { Component } from 'react'
import { thisTypeAnnotation } from '@babel/types'
import ReactDOM from 'react-dom'

export class Welcome extends Component {
    state = {
        variations: [
            "Welcome",
            "Bienvenidas",
            "Bienvenue",
            "Benvenuto",
            "어서 오십시오",
            "Wëllkomm",
            "Tervetuloa",
            "Verið velkomin",
            "ようこそ",
            "வரவேற்பு",
            "Welkom",
            "i mirëpritur",
            "ยินดีต้อนรับ",
            "willkommen",
            "歡迎",
            "स्वागत",
            "Сардэчна запрашаем",
            "καλως ΗΡΘΑΤΕ",
            "желанный",
            "Nnọọ",
            "Velkommen",
            "ಸ್ವಾಗತ",
            "Byenveni",
            "მოგესალმებით",
            "Fáilte",
            "స్వాగతం",
            "Witamy",
            "স্বাগত",    
            "ברוך הבא",
            "Bem-vindo",
            "gratissimum",
        ],
    }

    render() {
        return (
            <div>
                <h1> {this.state.variations[this.props.count] } </h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Welcome />,
    document.getElementById('root')
  );

export default Welcome
