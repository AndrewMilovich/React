import React, {useRef} from 'react';

const Form = () => {
    const name=useRef()
    return (
        <div>
            <form>
                <input type="text" placeholder={'todo'} ref={name} />
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;