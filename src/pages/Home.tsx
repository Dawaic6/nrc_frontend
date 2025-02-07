import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="relative w-full h-64 bg-gray-200">
          <video className="absolute w-full h-full object-cover" autoPlay loop muted>
            <source src="/path-to-video.mp4" type="video/mp4" />
          </video>
        </div>
        <section>
          <h2 className="text-2xl font-bold">Our Recent Publications</h2>
          <p>Explore the latest research and reports.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Recent Events</h2>
          <p>Stay updated with our latest events and activities.</p>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
