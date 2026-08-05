import { useEffect, useState } from "react";
import {
  FileText,
  BookOpen,
  Newspaper,
  Download,
} from "lucide-react";

import StatCard from "../components/StatCard";

const Dashboard = () => {
  const [stats, setStats] = useState({
    articles: 0,
    notes: 0,
    blogs: 0,
    downloads: 0,
  });

  const [recentArticles, setRecentArticles] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/dashboard");

      const data = await res.json();

      setStats({
        articles: data.articles,
        notes: data.notes,
        blogs: data.blogs,
        downloads: data.downloads,
      });

      setRecentArticles(data.recentArticles || []);
      setActivities(data.activities || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Stats */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <StatCard
          title="Articles"
          value={stats.articles}
          icon={<FileText size={30} />}
          color="bg-blue-500"
        />

        <StatCard
          title="Notes"
          value={stats.notes}
          icon={<BookOpen size={30} />}
          color="bg-green-500"
        />

        <StatCard
          title="Blogs"
          value={stats.blogs}
          icon={<Newspaper size={30} />}
          color="bg-purple-500"
        />

        <StatCard
          title="Downloads"
          value={stats.downloads}
          icon={<Download size={30} />}
          color="bg-orange-500"
        />

      </div>

      {/* Bottom Section */}

      <div className="grid lg:grid-cols-2 gap-6 mt-8">

        {/* Recent Articles */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-bold text-xl mb-4">
            Recent Articles
          </h2>

          <ul className="space-y-4">

            {recentArticles.length > 0 ? (
              recentArticles.map((article) => (
                <li
                  key={article._id}
                  className="border-b pb-2"
                >
                  {article.title}
                </li>
              ))
            ) : (
              <li>No Articles Found</li>
            )}

          </ul>

        </div>

        {/* Recent Activity */}

        <div className="bg-white rounded-xl shadow p-6">

          <h2 className="font-bold text-xl mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-4">

            {activities.length > 0 ? (
              activities.map((item) => (
                <li key={item._id}>
                  ✅ {item.message}
                </li>
              ))
            ) : (
              <li>No Activity Found</li>
            )}

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;