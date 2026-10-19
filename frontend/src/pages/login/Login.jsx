import Header from "../../components/header/Header"

function Login(){
    return(
        <>
        <Header/>
        <main>
            <form>
                <div>
                    <label htmlFor="nome">Nome completo:</label>
                    <input type="text" placeholder="Nome completo" name="nome"></input>
                </div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Email" name="email"></input>
            </form>
        </main>
        </>
    )
}

export default Login