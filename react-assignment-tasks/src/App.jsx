import UserCard from './components/Assignment1/UserCard';
import Counter from './components/Assignment2/Counter';
import EnhancedCounter from './components/Assignment3/EnhancedCounter';
import UserForm from './components/Assignment4/UserForm';
import './App.css';

function App() {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">React Assignments</h1>
      
      <section className="assignment-section">
        <h2 className="section-title">1. User Cards</h2>
        <UserCard users={users} />
      </section>

      <section className="assignment-section">
        <h2 className="section-title">2. Counter</h2>
        <Counter />
      </section>

      <section className="assignment-section">
        <h2 className="section-title">3. Enhanced Counter</h2>
        <EnhancedCounter />
      </section>

      <section className="assignment-section">
        <h2 className="section-title">4. User Form</h2>
        <UserForm />
      </section>
      </div>
  );
}

export default App;