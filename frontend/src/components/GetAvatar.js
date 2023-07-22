import React from 'react';
import PropTypes from 'prop-types';
import defaultProduct from '../images/obj.jpeg';
//import '../styles/layout/GetAvatar.scss';

function GetAvatar({avatar=defaultProduct, updateAvatar, text='Get avatar!'}) {
  const fr = new FileReader();
  const myFileField = React.createRef();
  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    updateAvatar(image);
  };

  return (
    <div className="buttons-img">
      <label className="buttons-img--btn">
        {text}
        <input
          type="file"
          ref={myFileField}
          style={{ display: 'none' }}
          onChange={uploadImage}
        />
      </label>

      
    </div>
  );
}

GetAvatar.propTypes = {
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default GetAvatar;