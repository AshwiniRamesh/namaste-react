const Contact = () => {
  return (<div className="font-bold text-3xl p-4 m-4">
          <h1> Contact us</h1>
          <form>
                    <input type="text" className="border border-black m-2 p-2" placeholder="name">

                    </input>

                    <input type="text" className="border border-black m-2 p-2" placeholder="message">

                    </input>
                    <button className="border border-black p-2 m-2 bg-gray rounded-2xl">Submit</button>
          </form>

  </div>)
};

export default Contact;
