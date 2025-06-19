import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="bg-[var(--brand)] p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
        <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
          <div className="flex items-center gap-5">
            <img
              src="./assets/icons/favicon.ico"
              alt="logo"
              width={35}
              height={35}
              className="h-auto bg-white rounded-full p-1"
            />
            <div>
              <h1 className="h2 text-white">Sync It</h1>
            </div>
          </div>
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
          <div className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="logo"
              width={55}
              height={55}
              className="h-auto bg-white rounded-full p-1 w-[55px] lg:w-[65px]"
            />
            <div>
              <h1 className="h2 text-[var(--brand)]">Sync It</h1>
            </div>
          </div>
        </div>
        {children}
      </section>
    </div>
  );
};

export default Layout;
