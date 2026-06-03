import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    setStatus('جاري الإرسال...');

    try {
      const res = await fetch('/api/send-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      const data = await res.json();

      if (data.success) {
        setStatus('✅ تم إرسال رسالتك بنجاح!');
        setText('');
      } else {
        setStatus('❌ فشل الإرسال: ' + (data.message || 'خطأ غير معروف'));
      }
    } catch (error) {
      setStatus('❌ خطأ في الاتصال بالخادم');
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '10px',
          fontSize: '2rem'
        }}>
          Masrivi
        </h1>
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '30px'
        }}>
          تواصل معنا
        </p>

        <form onSubmit={sendMessage}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="اكتب رسالتك هنا..."
            rows="5"
            style={{
              width: '100%',
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid #ddd',
              fontSize: '16px',
              resize: 'none',
              marginBottom: '20px',
              fontFamily: 'inherit'
            }}
            disabled={loading}
          />

          <button
            type="submit"
            disabled={loading || !text.trim()}
            style={{
              width: '100%',
              padding: '15px',
              background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '18px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'جاري الإرسال...' : 'إرسال'}
          </button>
        </form>

        {status && (
          <p style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '15px',
            background: status.includes('✅') ? '#d4edda' : '#f8d7da',
            color: status.includes('✅') ? '#155724' : '#721c24',
            borderRadius: '10px'
          }}>
            {status}
          </p>
        )}
      </div>

      <footer style={{
        marginTop: '30px',
        color: 'white',
        textAlign: 'center'
      }}>
        <p>© 2026 Masrivi. All rights reserved.</p>
      </footer>
    </div>
  );
}