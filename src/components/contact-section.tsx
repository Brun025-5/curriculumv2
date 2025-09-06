export const ContactSection = () => {
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center h-screen bg-light-100 dark:bg-gray-900">
      
        <h2 className="text-5xl font-bold">Contact me</h2>
        <div className="grid grid-cols-3"> 
          <form className="grid grid-rows-4 col-span-2 bg-gray-400">
            <div className="grid grid-cols-2">
              <div>
                <p>Your name *</p>
                <input type="text"></input>
              </div>
              <div>
                <p>Your email *</p>
                <input type="text"></input>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div>
                <p>Phone *</p>
                <input type="text"></input>
              </div>
              <div>
                <p>Motive *</p>
                <input type="text"></input>
              </div>
            </div>

            <div>
              <p>Message *</p>
              <textarea defaultValue="Enter here" />
            </div>

            <button type="submit">Send Message</button>
          </form>

          <section className="grid grid-rows-3">
            <div>
              <h3>Address</h3>
            </div>

            <div>
              <h3>Direct contact</h3>
            </div>

            <div className="bg-gray-950">
              <h3>Follow me!</h3>
              <div className="flex flex-columns">
                
              </div>
            </div>
          </section>
        </div>
      
    </section>
  );
};