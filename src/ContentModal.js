import { Button, Modal, Image } from 'react-bootstrap';
import zeus from './images/greek gods/Zeus.webp';
import poseidon from './images/greek gods/Poseidon.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';


function ContentModal(props) {

  return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>{props.title}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.body}                       
          </p>
          <Image src={Object.values(props.image)} alt={Object.values(props.image)} fluid/>
          <div>
            <small className="text-muted"><FontAwesomeIcon icon={faTriangleExclamation} /> I did not make this image and I take no credit for it.</small>
          </div>          
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid gap-2">
            <Button variant='outline-secondary' size='lg'  onClick={props.onHide}><FontAwesomeIcon icon={faCircleXmark} beatFade /> Close</Button>
          </div> 
          
        </Modal.Footer>
      </Modal>
    );
  }

export default ContentModal;