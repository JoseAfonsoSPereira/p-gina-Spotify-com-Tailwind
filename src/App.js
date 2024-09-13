import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function App() {
  return (
    <div className="flex flex-col justify-center bg-slate-900 min-h-screen">

      <man className="felx-1 bg-black  font-bold  my-8 rounded-lg m-80 ">

        <div className="px-64 py-20 ">

        <div className="flex flex-col justify-center -mt-12 items-center">
        <img className="w-14" src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"></img>
        <h1 className="  text-white p-5 text-4xl ">Entrar no Spotify</h1>
        </div>

        <div className="my-5 flex flex-col  rounded gap-5 text-center ">

          <div className="text-white border-2 rounded-3xl p-3 flex justify-center">
          <FaFacebook size={25} className=""/>
          <a href="#" className="flex-1" >Continuar com Facebook</a>
          </div>
          <div className="text-white border-2 rounded-3xl p-3 flex justify-center">
          <FcGoogle size={25} className=""/>
          <a href="#" className="flex-1" >Continuar com Google</a>
          </div>
          <div className="text-white border-2 rounded-3xl p-3 flex justify-center">
          <FaApple size={25} className=""/>
          <a href="#" className="flex-1" >Continuar com Apple</a>
          </div>
          <div className="text-white border-2 rounded-3xl p-3 flex justify-center">
          
          <a href="#" className="flex-1" >Continuar com o número de telefone</a>
          </div>
        
         
        </div>

        <hr className="my-9"/>

        <div className="text-white my-6">
          <p className="my-2">Email ou nome de usuário</p>
          <input type="text" className="border-2 rounded-sm p-3 w-full text-gray-500 bg-transparent font-normal" placeholder="Email ou nome de usuário"></input>
        </div>
        <div className="text-white">
          <p className="my-2">Senha</p>
          <input type="password" className="border-2 rounded-sm p-3 w-full text-gray-500 bg-transparent font-normal" placeholder="Senha"></input>
        </div>

        <div className="my-6">
          <button className="rounded-full w-full py-3 text-black bg-green-500">Entrar</button>
        </div>

        <div className="flex my-3 justify-center font-normal">
          
          <a href="#" className="text-white underline">Esqueceu a senha?</a>
          
        </div>

        <div className="flex gap-4 justify-center font-normal">
          <p className="text-gray-400">Não tem uma conta?</p>
          <a href="#" className="text-white underline">Inscrever-se no Spotfy</a>
        </div>
        

        </div>


      </man>


      <footer className="flex bg-black justify-center text-xs p-5">
        <p className="text-white text-center py-3">Todos os direitos reservados 2023 - Spotify Brasil</p>
        <p className="text-white text-center py-3">Spotify, Inc.</p>
      </footer>
    </div>
  );
}

export default App;
