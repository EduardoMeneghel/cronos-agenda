import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Configurations = () => {

  return (
    <div>
        <div className="text-center">
          <Link className="py-3 bg-gray-100 hover:bg-gray-200 block w-full">
            Minha Conta
          </Link>
          <Link className="py-3 bg-gray-100 hover:bg-gray-200 block w-full">
            Configurações
          </Link>
          <Link className="py-3 bg-gray-100 hover:bg-gray-200 block w-full">
            Sair
          </Link>
        </div>
    </div>
  );
};

export default Configurations;