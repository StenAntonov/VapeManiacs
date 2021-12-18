const Create = () => {
    return (
        <section id="create-page" className="auth">
        <form id="create">
            <div className="container">
                <h1>Create Vape</h1>
                <label htmlFor="maker">Maker:</label>
                <input type="text" id="maker" name="maker" placeholder="Enter vape maker..." />

                <label htmlFor="model">Model:</label>
                <input type="text" id="model" name="model" placeholder="Enter vape model..." />

                <label htmlFor="battery">Battery:</label>
                <input type="text" id="battery-type" name="battery-type" placeholder="External" />

                <label htmlFor="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description"></textarea>
                <input className="btn submit" type="submit" value="Create" />
            </div>
        </form>
    </section>
    );
};

export default Create;