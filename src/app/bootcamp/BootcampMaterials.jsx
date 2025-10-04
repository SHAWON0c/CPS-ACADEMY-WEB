import React from "react";

export default function BootcampMaterials() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Access Bootcamp Materials
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Watch recorded sessions, explore playlists, and download resources to keep learning anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* YouTube Playlist */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition shadow-lg">
            <h3 className="font-semibold text-lg mb-4">📺 YouTube Playlist</h3>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID"
                title="YouTube playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-indigo-400 font-medium hover:underline"
            >
              Open Full Playlist →
            </a>
          </div>

          {/* Google Drive Resources */}
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition shadow-lg">
            <h3 className="font-semibold text-lg mb-4">📂 Resource Downloads</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-slate-800/60 px-4 py-3 hover:bg-slate-700 transition"
                >
                  📘 Phase 1 Notes (C / C++ Basics)
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-slate-800/60 px-4 py-3 hover:bg-slate-700 transition"
                >
                  📕 Phase 2 Notes (Advanced CP)
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-slate-800/60 px-4 py-3 hover:bg-slate-700 transition"
                >
                  📑 Problem Set PDFs
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/YOUR_FILE_ID/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg bg-slate-800/60 px-4 py-3 hover:bg-slate-700 transition"
                >
                  🎥 Extra Recorded Lectures
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
