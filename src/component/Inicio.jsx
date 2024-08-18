import React from "react";
import {
  ContainerInicioSesion,
  ImagenLogo,
  BotonIniciar,
  ContainerNav,
  BotonNav,
  Nombre,
  Profesion,
  GlobalStyle,
  Container,
  Footer,
  ContainerBotones,
  BotonRedes,
  Imagen,
  TextDerechos,
  Titulo,
  Dir,
  Direccion,
  Descripcion,
  TextoAnimado,
  Proyecto,
  Foto,
  Info,
  TituloProyecto,
  TecProyecto,
  ContainerTextTec,
  TextTec,
  ContainerCono,
  TextCono,
} from "./DiseñosInicio";

export default function Inicio() {
  document.title = "Sergio Soliz";
  const textoCompleto = `$ Bienvenido: 
Soy un desarrollador de software y diseñador de sistemas desde temprana edad, me enfoco en crear soluciones tecnológicas innovadoras. Especializado en diseñar sistemas escalables con funcionalidades orientadas al futuro. Desarrollo sistemas robustos, colaboro de manera efectiva en la toma de decisiones y aplico pruebas funcionales rigurosas para prevenir errores futuros.
Me gusta tener metas y objetivos claros y colaborar en todo sentido a cualquier proyecto dedicandole mucho esfuerzo y responsabilidad.`;

  return (
    <GlobalStyle>
      <Container>
        <ContainerNav>
          <BotonNav href="#sobreMi">SOBRE MI</BotonNav>
          <BotonNav href="#proyectos">PROYECTOS</BotonNav>
          <BotonNav href="#conocimientos">CONOCIMIENTOS</BotonNav>
          <BotonNav href="#contacto">CONTACTO</BotonNav>
        </ContainerNav>
        <ContainerInicioSesion>
          <Nombre>
            <ImagenLogo src={require("../Imagenes/Developer.png")} />
          </Nombre>
          <Nombre>Sergio Brayan Soliz Nogales</Nombre>
          <Profesion>Desarrollador de software</Profesion>
          <Nombre>
            <BotonIniciar
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1losYgBIdWxUh1E6t9ZS2mcQZ_dWGW-l6/view?usp=drive_link"
                );
              }}
            >
              VER CV
            </BotonIniciar>
          </Nombre>
        </ContainerInicioSesion>
        <Titulo id="sobreMi">SOBRE MI</Titulo>
        <ContainerInicioSesion sobreMi>
          <Direccion>
            <Dir>C: portafolio/sergio-soliz</Dir>
          </Direccion>
          <Descripcion>
            <TextoAnimado text={textoCompleto} velocidad={70} />
          </Descripcion>
        </ContainerInicioSesion>
        <Titulo id="proyectos">PROYECTOS</Titulo>
        <ContainerInicioSesion proyectos>
          <Proyecto
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1N0YLSFwdbWIKQkan5cSl055wyJ0Q0EWo/view?usp=drive_link"
              );
            }}
          >
            <Foto>
              <Imagen src={require("../Imagenes/UnReal.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Paisaje Playa Montañosa</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>Unreal Engine</TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
          <Proyecto
            onClick={() => {
              window.open(
                "https://www.facebook.com/p/MODO-GYM-100089211438897/"
              );
            }}
          >
            <Foto>
              <Imagen src={require("../Imagenes/ModoGYM.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Sistema Gimnasio ModoGYM</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>C# - Digital Person 4500</TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
          <Proyecto
            onClick={() => {
              window.open("https://www.facebook.com/clasesdeajedrezbolivia/");
            }}
          >
            <Foto>
              <Imagen src={require("../Imagenes/Infinity.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Sistema Infinity Chess</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>
                  React Js - Laravel - ElectronJs C# - Digital Person 4500
                </TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
          <Proyecto
            onClick={() => {
              window.open("https://github.com/SergioSoliz2017/ReservaAula");
            }}
          >
            <Foto>
              <Imagen src={require("../Imagenes/Reserva.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Sistema Reserva de Aulas</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>React Js - Laravel</TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
          <Proyecto
            onClick={() => {
              window.open("https://github.com/JeveSoft/BasquetFrontend");
            }}
          >
            <Foto>
              <Imagen src={require("../Imagenes/Basquet.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Sistema Liga Basquet</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>React Js - Laravel</TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
          <Proyecto>
            <Foto>
              <Imagen src={require("../Imagenes/Celular.png")} />
            </Foto>
            <Info>
              <TituloProyecto>Sistema BKService</TituloProyecto>
              <TecProyecto>Tecnologías utilizadas:</TecProyecto>
              <ContainerTextTec>
                <TextTec>Kotlin - Java</TextTec>
              </ContainerTextTec>
            </Info>
          </Proyecto>
        </ContainerInicioSesion>
        <Titulo id="conocimientos">CONOCIMIENTOS</Titulo>
        <ContainerInicioSesion conocimientos>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/unreal.png")}
            />
            <TextCono>Unreal Engine</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen conocimientos src={require("../Imagenes/Logos/c.png")} />
            <TextCono>C#</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen conocimientos src={require("../Imagenes/Logos/c++.png")} />
            <TextCono>C++</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/reactjs.png")}
            />
            <TextCono>React JS</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen conocimientos src={require("../Imagenes/Logos/js.png")} />
            <TextCono>Java Script</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/laravel.png")}
            />
            <TextCono>Laravel</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/kotlin.png")}
            />
            <TextCono>Kotlin</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen conocimientos src={require("../Imagenes/Logos/java.png")} />
            <TextCono>Java</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/styled.png")}
            />
            <TextCono>Styled Components</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/github.png")}
            />
            <TextCono>Git Hub</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/notion.png")}
            />
            <TextCono>Notion</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/taiga.png")}
            />
            <TextCono>Taiga</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/mysql.png")}
            />
            <TextCono>MySql</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/firebase.png")}
            />
            <TextCono>FireBase</TextCono>
          </ContainerCono>
          <ContainerCono>
            <Imagen
              conocimientos
              src={require("../Imagenes/Logos/postman.png")}
            />
            <TextCono>Postman</TextCono>
          </ContainerCono>
        </ContainerInicioSesion>
        <Footer id="contacto">
          <ContainerBotones>
            <BotonRedes
              onClick={() => {
                window.open("https://github.com/SergioSoliz2017");
              }}
            >
              {" "}
              <Imagen src={require("../Imagenes/Logos/github.png")} />
            </BotonRedes>
            <BotonRedes
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/sergio-soliz-nogales-670b29162/"
                );
              }}
            >
              <Imagen src={require("../Imagenes/Logos/in.png")} />
            </BotonRedes>
            <BotonRedes
              onClick={() => {
                window.open("https://www.facebook.com/sergio.brayan.5");
              }}
            >
              <Imagen src={require("../Imagenes/Logos/f.png")} />
            </BotonRedes>
            <BotonRedes
              onClick={() => {
                window.open("https://wa.me/59176905990");
              }}
            >
              <Imagen src={require("../Imagenes/Logos/wasap.png")} />
            </BotonRedes>
          </ContainerBotones>
          <TextDerechos>
            Copyright © 2024 Soliz Nogales Sergio Brayan
          </TextDerechos>
        </Footer>
      </Container>
    </GlobalStyle>
  );
}
