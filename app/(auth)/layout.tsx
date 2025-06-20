import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-[var(--brand)] p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <img
            src="./assets/icons/Logo.svg"
            alt="logo"
            width={190}
            height={190}
            className="h-auto "
          />

          <div className="space-y-5 text-white">
            <h1 className="h1 ">Manage your files the best way</h1>
            <p className="body-1">
              This is a place where you can store all your documents
            </p>
          </div>
          <img
            src="../assets/images/sidebarr.svg"
            alt="Illustration"
            width={340}
            height={340}
            className="transition-all  hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
        <div className="mb-16 lg:hidden">
          <img
            src="/assets/icons/Logo-brand.svg"
            alt="logo"
            width={140}
            height={140}
            className="h-auto"
          />
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
