import {ScreenBackground,
        ModalFrame,
        Button,
        Titulo,
        Frame,
        UserName,
        TituloPubli,
        Comentario,
        SelecionarArquivo,
        SubTitulo,
        ButtonSelect,
        Img,
        User,
        Divider,
        Editaveis} from "./styled";
import {RxCross2} from 'react-icons/rx';
import {BsImages} from 'react-icons/bs';
import {BiSolidVideos} from 'react-icons/bi';
import {AiOutlineFileGif} from 'react-icons/ai';
import UserPerfil from "../../../assets/UserPerfil.jpg";
const ModalCriarPubli = ({isOpen, setModalOpen}) => {

    if(isOpen){
        return (
            <ScreenBackground>
                <ModalFrame>
                    
                    <Titulo>CRIAR PUBLICAÇÃO</Titulo>
                    <Divider className="LinhaDivisoria"></Divider>
                    
                    <User>
                        <Img src={UserPerfil} alt="ImagemPerfil" />
                        <UserName>UserName</UserName>
                    </User>

                    <Editaveis>
                        <TituloPubli type="text" name="Titulo da Publicação" id="Titulo da Publicação" />
                        <Comentario type="text" name="Comentário" id="Comentário" />
                    </Editaveis>

                    <SelecionarArquivo>
                        <SubTitulo>Adicionar a Publicação:</SubTitulo>
                        <ButtonSelect><BsImages/></ButtonSelect>
                        <ButtonSelect><BiSolidVideos/></ButtonSelect>
                        <ButtonSelect><AiOutlineFileGif/></ButtonSelect>
                    </SelecionarArquivo>

                    <Button onClick={setModalOpen}><RxCross2/></Button>
                </ModalFrame>

            </ScreenBackground>
        );
    }
    return null;
    
  }
  
  export default  ModalCriarPubli;