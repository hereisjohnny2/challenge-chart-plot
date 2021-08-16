import ReactModal from "react-modal";
import styles from "./styles.module.scss";
import { MdError, MdClose } from "react-icons/md";
import { useEvent } from "../../services/hooks/useEvent";


export function ErrorModal() {
  const { hasError, setHasError, errorMessage } = useEvent();

  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      isOpen={hasError} 
      onRequestClose={() => setHasError(false)}
      ariaHideApp={false}
      style={{
        content: {
          display: "flex",  
          flexDirection: "column",
          alignItems: "center",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: '#F0F0F5',
          color: '#000000',
          borderRadius: '8px',
          width: '480px',
          border: 'none',
        },
        overlay: {
          backgroundColor: '#121214b5',
        },
      }}
    >
      <button className={styles.closeButton} onClick={() => setHasError(false)}>
        <MdClose size={24}/>
      </button>
      <MdError size={54} color="#e44040" />
      <div className={styles.textContainer}>
        <strong>Oops... Something went wrong!</strong>
        <p>{errorMessage}</p>
      </div>
    </ReactModal>
  );
}