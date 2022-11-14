import "../styles/Form.css";

const NewEditForm = ({close, isEdit}) => {
  return (
    <div className="form-background">
      <div className="form-wrapper">
        
        <form className="form">
          <div className="form-header">
            {isEdit? <h2>Edit your game</h2> : <h2>Add New Game</h2>}
            <button className="close-button" onClick={close}>X</button>
          </div>
          <input type="file" />
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="description">Description</label>
          <input type="text" id="description" name="description" />
          
          <div className="duo-wrapper">
            <div className="wrapper">
              <label htmlFor="platform">Platform</label>
                <select id="platform" name="platform">
                  <option value="PC">PC</option>
                  <option value="Xbox">Xbox</option>
                  <option value="Playstation">Playstation</option>
                  <option value="Nintendo">Nintendo</option>
                </select>
            </div>
            <div className="wrapper">
              <label htmlFor="releaseYear">Release Year</label>
              <input
                type="number"
                id="releaseYear"
                name="releaseYear"
                min="1800"
                max="2500"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>
    </div>
  );
};

export default NewEditForm;
