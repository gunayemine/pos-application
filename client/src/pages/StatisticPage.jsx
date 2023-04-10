import Header from "../components/header/Header";

const StatisticPage = () => {
  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div>
          <h2 className="text-lgr">
            Hoş geldin
            <span className="text-green-700 font-bold text-xl"> admin</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;
