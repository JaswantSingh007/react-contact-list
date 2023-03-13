import './App.css';
import ContactList from './ContactCards';

const App = () => {
  return (
    <div className="bg-gray-100">
      <section>
        <form>
          <input type="text" className="ml-20 mt-6 rounded-md p-2" placeholder="Search Contact..."></input>
        </form>
      </section>
      <section className="p-20 grid sm:grid-cols-2  lg:grid-cols-3 gap-6">
        <ContactList />
      </section>
    </div>
  );
}

export default App;
