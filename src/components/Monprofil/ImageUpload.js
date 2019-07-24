import React from "react";

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: '', imagePreviewUrl: '' };
  }

  _handleSubmit(e) {
    e.preventDefault();
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Veuillez sélectionner une image pour la prévisualisation.</div>);
    }
    return (
      <div className="previewComponent">
        <form onSubmit={(e) => this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e) => this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit"
            onClick={(e) => this._handleSubmit(e)}>Téléchargement de l'image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}
export default ImageUpload;





