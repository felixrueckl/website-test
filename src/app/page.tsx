export default function Home() {
  console.log('test');
  const badlyFormattedVariable = 'test';

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg">
          This is the modernized version of our website: {badlyFormattedVariable}
        </p>
      </div>
    </main>
  );
}
