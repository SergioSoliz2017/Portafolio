import styled, { css, keyframes } from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export const GlobalStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect fill='none' stroke-width='100' id='a' x='-400' y='-300' width='800' height='600'/%3E%3C/defs%3E%3Cg style='transform-origin:center'%3E%3Cg transform='rotate(73.8 0 0)' style='transform-origin:center'%3E%3Cg transform='rotate(-160 0 0)' style='transform-origin:center'%3E%3Cg transform='translate(1000 750)'%3E%3Cuse stroke='%23000' href='%23a' transform='rotate(10 0 0) scale(1.1)'/%3E%3Cuse stroke='%23111111' href='%23a' transform='rotate(20 0 0) scale(1.2)'/%3E%3Cuse stroke='%23222222' href='%23a' transform='rotate(30 0 0) scale(1.3)'/%3E%3Cuse stroke='%23333333' href='%23a' transform='rotate(40 0 0) scale(1.4)'/%3E%3Cuse stroke='%23444444' href='%23a' transform='rotate(50 0 0) scale(1.5)'/%3E%3Cuse stroke='%23555555' href='%23a' transform='rotate(60 0 0) scale(1.6)'/%3E%3Cuse stroke='%23666666' href='%23a' transform='rotate(70 0 0) scale(1.7)'/%3E%3Cuse stroke='%23777777' href='%23a' transform='rotate(80 0 0) scale(1.8)'/%3E%3Cuse stroke='%23888888' href='%23a' transform='rotate(90 0 0) scale(1.9)'/%3E%3Cuse stroke='%23999999' href='%23a' transform='rotate(100 0 0) scale(2)'/%3E%3Cuse stroke='%23aaaaaa' href='%23a' transform='rotate(110 0 0) scale(2.1)'/%3E%3Cuse stroke='%23bbbbbb' href='%23a' transform='rotate(120 0 0) scale(2.2)'/%3E%3Cuse stroke='%23cccccc' href='%23a' transform='rotate(130 0 0) scale(2.3)'/%3E%3Cuse stroke='%23dddddd' href='%23a' transform='rotate(140 0 0) scale(2.4)'/%3E%3Cuse stroke='%23eeeeee' href='%23a' transform='rotate(150 0 0) scale(2.5)'/%3E%3Cuse stroke='%23FFFFFF' href='%23a' transform='rotate(160 0 0) scale(2.6)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  scroll-behavior: smooth;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImagenLogo = styled.img`
  position: relative;
  height: 70%;
  width: 70%;
`;
export const ContainerNav = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  margin-top: -50px;
  justify-content: center;
`;
export const BotonNav = styled.a`
  flex-grow: 1;
  margin: 10px;
  padding: 20px 20px; /* Añadimos padding para parecer un botón */
  font-size: 1.2rem;
  background-color: white;
  border-radius: 25px;
  font-family: "Indie Flower", sans-serif;
  font-weight: bold;
  text-align: center; /* Centrar el texto */
  text-decoration: none; /* Quitar subrayado típico de los enlaces */
  color: black; /* Color de texto negro por defecto */
  display: inline-block; /* Asegurar que se comporte como un bloque inline */

  &:hover {
    border: 1px white solid;
    background-color: black;
    color: white;
  }
`;
export const Nombre = styled.span`
  margin-top: 20px;
  width: 100%;
  height: min-content;
  font-family: "Indie Flower", sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;
`;
export const Titulo = styled.span`
  width: 100%;
  height: min-content;
  font-family: "Indie Flower", sans-serif;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  color: white;
`;
export const Profesion = styled.span`
  width: 100%;
  align-content: center;
  height: min-content;
  font-family: "Indie Flower", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
`;
export const ContainerInicioSesion = styled.div`
  width: 50%;
  margin: 20px;
  position: relative;
  height: min-content + 20px;
  background: #f7fbfc;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  ${(props) =>
    props.sobreMi &&
    css`
      min-height: 65.5vh;
      padding: 3rem 0;
      background: black;
      margin-bottom: 3rem;
      display: inline;
    `}
  ${(props) =>
    props.proyectos &&
    css`
      background-color: black;
      width: 80%;
      padding: 3rem;
      margin-bottom: 3rem;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    `}
    ${(props) =>
    props.conocimientos &&
    css`
      background-color: white;
      width: 80%;
      padding: 3rem;
      margin-bottom: 3rem;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 2rem;
    `}
`;
export const Proyecto = styled.div`
  margin: auto;
  width: 250px;
  height: 350px;
  border-radius: 25px;
`;
export const ContainerCono = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
`;
export const Foto = styled.div`
  height: 175px;
  background: white;
  color: black;
  border-radius: 25px 25px 0 0;
  border: 0.125rem solid;
`;
export const Imagen = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0;
  ${(props) =>
    props.conocimientos &&
    css`
      padding: 10%;
    `}
`;
export const TextCono = styled.span`
  text-align: center;
  width: 200px;
  font-weight: 1000;
`;
export const TituloProyecto = styled.h4`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-family: "Indie Flower", sans-serif;
  font-weight: 1000;
`;
export const TecProyecto = styled.h5`
  text-align: center;
  bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 900;
`;
export const ContainerTextTec = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Footer = styled.footer`
  height: 4.3rem + 40px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TextDerechos = styled.span`
  width: 100%;
  text-align: center;
`;
export const BotonRedes = styled.button`
  width: 4.3rem;
  height: 4.3rem;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.25);
  margin: 20px;
  padding: 20px;
`;
export const TextTec = styled.span`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  text-align: center;
  font-weight: 600;
`;
export const Info = styled.div`
  padding: 1rem 0.5rem;
  height: 175px;
  background: white;
  color: black;
  border-radius: 0 0 25px 25px;
  border: 0.125rem solid;
  cursor: pointer;
`;
export const ContainerBotones = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const Direccion = styled.p`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
export const Dir = styled.span`
  padding: 1.5rem 0;
  color: red;
  font-family: monospace, Arial;
  width: 70%;
  min-height: 27.5rem;
  border-radius: 0.625rem;
`;
export const Texto = styled.span`
  font-family: monospace, Arial;
  width: 100%;
  min-height: 27.5rem;
  border-radius: 0.625rem;
  margin: 0 auto;
`;
export const Descripcion = styled.p`
  font-family: monospace, Arial;
  width: 90%;
  margin: 0 auto;
  border-radius: 0.625rem;

  color: gray;
  white-space: pre-wrap; // Mantiene el formato de saltos de línea
`;
const Cursor = styled.span`
  color: gray;
  font-size: 1.2rem;
  font-weight: bold;
  animation: ${() => blink} 1s step-end infinite;
`;
const blink = keyframes`
  50% {
    opacity: 1;
  }
`;

export const BotonIniciar = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-family: "Indie Flower", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 20px;
  background-color: #f7fbfc;
  &:hover {
    color: white;
    background-color: black;
  }
`;

export const TextoAnimado = ({ text, velocidad = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, velocidad);

    return () => clearInterval(intervalId);
  }, [text, velocidad]);

  return (
    <Texto>
      {displayedText}
      <Cursor>|</Cursor>
    </Texto>
  );
};
