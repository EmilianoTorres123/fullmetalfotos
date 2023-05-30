import React from 'react';
import "../styles/Like.css"
import KafkaService from "../services/kafka.service";


function saveLike(e, status) {


     let data = {
       id: 0,
       status: status
     };

     console.log(JSON.stringify(data));

     KafkaService.reaction("i-love-adsoftsito");
     e.preventDefault();
 }

function saveEncanta(e, status) {


  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("la-imagen-me-gusta");
  e.preventDefault();
}

function savedivierte(e, status) {


  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("que-gracioso");
  e.preventDefault();
}

function savesorprendido(e, status) {


  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("que-sorpresa");
  e.preventDefault();
}

function savetriste(e, status) {


  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("estoy-triste");
  e.preventDefault();
}

function saveenojado(e, status) {


  let data = {
    id: 0,
    status: status
  };

  console.log(JSON.stringify(data));

  KafkaService.reaction("estoy-enfadado");
  e.preventDefault();
}


function ReactionsComponent() {
  return (
    <div class="reactions">
      <div className="reaction reaction-like" onClick={(e) => {
        e.preventDefault();
        saveEncanta(e, 1);

      }}>
      </div>

      <div className="reaction reaction-love" onClick={(e) => {
        e.preventDefault();
        saveLike(e, 1);

      }}>
      </div>


      <div class="reaction reaction-haha"onClick={(e) => {
        e.preventDefault();
        savedivierte(e, 1);

      }}>
      </div>

      <div class="reaction reaction-wow" onClick={(e) => {
        e.preventDefault();
        savesorprendido(e, 1);

      }}>
      </div>

      <div class="reaction reaction-sad" onClick={(e) => {
        e.preventDefault();
        savetriste(e, 1);

      }}>
      </div>

      <div class="reaction reaction-angry" onClick={(e) => {
        e.preventDefault();
        saveenojado(e, 1);

      }}>
      </div>

    </div>
  );
}
export default ReactionsComponent;