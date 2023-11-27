import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>
            I Accept
        </Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sit amet augue sit amet aliquet. Aliquam ullamcorper ac ligula lacinia ultrices. Maecenas eget felis dui. Vivamus interdum facilisis arcu vel tincidunt. Maecenas dictum vel arcu ac accumsan. Aenean pretium ac diam molestie blandit. Curabitur lorem odio, varius eget dolor a, lacinia commodo urna. Nam vitae feugiat nisi.
            </p>
        </div>
    );
};

export default ModalPage;