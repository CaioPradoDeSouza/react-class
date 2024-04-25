import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(e) {
        setUserEmail('')
    }

    return (

        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form action="">
                <input type="email" placeholder="Digite o seu email ..." onChange={(e) => setEmail(e.target.value)} />

                <button type="submit" onClick={enviarEmail}>Enviar-email</button>

                {userEmail && (
                    <div>
                        <p>O email é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}

            </form>

        </div>

    )

}

export default Condicional