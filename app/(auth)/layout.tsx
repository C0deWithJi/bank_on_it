import Image from 'next/image';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div>
            <div>
              <Image
                src="/icons/dollar-circle.svg"
                alt="Bank On It"
                width={32}
                height={32}
                className="rounded-1-xl object-contain"
              />
            </div>
          </div>
      </main>
    );
  }
  