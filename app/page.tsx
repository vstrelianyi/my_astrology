export default function Home() {
  const text = 'text';
  const obj = {
    name: 1,
    test: 2,
    'object-curly-spacing': [ 'error', 'always', ],
  };
  const arr = [ 1, 2, ];

  const obj2 = {
    a: 1,
    b:2,
		
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20"
      data-id="2">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>{ text }</h1>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
