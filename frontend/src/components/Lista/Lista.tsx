import { Button } from "@mui/material";
import {  ListaStyled, ItemLista, Foto, Informacoes, Nome, Valor, Descricao } from "./Lista.style";

const Lista = () => {
    return (
            <ListaStyled >
                <ItemLista>
                    <Foto src="https://github.com/daniel-oliv3.png"></Foto>
                    <Informacoes>
                        <Nome>Daniel Oliveira</Nome>
                        <Valor>R$ 100,00 por hora</Valor>
                        <Descricao>Aulas de Skateboarding</Descricao>
                        <Button>Marcar Aula</Button>
                    </Informacoes>
                </ItemLista>
            </ListaStyled>
    )
}

export default Lista;


