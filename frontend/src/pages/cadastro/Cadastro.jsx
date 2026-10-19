import Header from "../../components/header/Header"

function Cadastro(){
    return(
        <>
        <Header/>
        <main>
            <form>
                <div>
                    <label htmlFor="nome">Nome completo:</label><br></br>
                    <input type="text" placeholder="Nome completo" name="nome"></input>
                </div>
                    <label htmlFor="email">Email:</label><br></br>
                    <input type="text" placeholder="Email" name="email"></input>
            </form>
        </main>
        </>
    )
}

export default Cadastro