import React, { createContext, useContext, useState } from 'react';
import ToastContainerOriginal from './ToastContainer';
import { UZUtils } from '@uniz/es-tools';

function createToast() {

  const defaultOption = {
    disappearTime: 3000,
  };
  const UID = UZUtils.uid.create();
  const ToastMethodContext = createContext({});

  return {
    ToastProvider,
    useToast,
  };

  function ToastProvider(props) {
    const [toastMap, setToastMap] = useState({});
    const [context] = useState({
      show,
      remove,
      removeAll,
    });

    return (
      <ToastMethodContext.Provider value={context}>
        <ToastContainerOriginal
          toastMap={toastMap}
        >
          {props.children}
        </ToastContainerOriginal>
      </ToastMethodContext.Provider>
    );

    function show(message, toastOption) {
      const id = UID.get();
      const option = {
        ...defaultOption,
        toastOption,
      };

      setToastMap(toastMap => {
        toastMap[id] = {
          id,
          message,
          option,
        };

        return { ...toastMap };
      });

      setTimeout(() => {
        remove(id);
      }, option.disappearTime);
    }

    function remove(id) {
      setToastMap(toastMap => {
        delete toastMap[id];

        return { ...toastMap };
      });
    }

    function removeAll() {
      setToastMap({});
    }
  }

  function useToast() {
    return useContext(ToastMethodContext);
  }

}

export { createToast };