import { useState } from "react";

export default function Auth() {
  const [pageType, setPageType] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [username, setUsername] = useState('');

  const handlePageChange = (type: string) => {
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setUsername('');
    setPageType(type);
  };

  return <main className="page__main">
    <article>
      <section>
        <nav>
          <button>
            
          </button>
          <button>
            
          </button>
        </nav>
      </section>
    </article>

  </main>
}