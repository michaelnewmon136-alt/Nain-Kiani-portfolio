import React, { useState, useEffect, useRef } from 'react';
import { VIDEO_PROJECTS } from '../data/portfolioData';
import { VideoProject } from '../types';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Sparkles, ChevronRight, ChevronLeft, Film, Layers, CheckCircle } from 'lucide-react';

export const VideoMotionShowcase: React.FC = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const activeVideo = VIDEO_PROJECTS[selectedVideoIndex];
  const totalScenes = activeVideo.scenes.length;

  // Audio synthesizer tone for interactive feedback
  const playChime = (freq: number) => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio is non-blocking
    }
  };

  // Autoplay loop timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSceneIndex((prev) => {
          const next = (prev + 1) % totalScenes;
          playChime(next === 0 ? 587 : 440 + next * 60);
          return next;
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, totalScenes, soundEnabled]);

  const handleSelectVideo = (index: number) => {
    setSelectedVideoIndex(index);
    setCurrentSceneIndex(0);
    setIsPlaying(false);
    playChime(523.25);
  };

  const currentScene = activeVideo.scenes[currentSceneIndex];

  return (
    <section id="motion-videos" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Film className="w-3.5 h-3.5" />
            Motion Graphics & Digital Video Creation
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Animated Video Campaigns & Storyboards
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            Dynamic motion graphic productions designed in Canva Magic Studio, illustrating artificial intelligence, biodiversity conservation, and 21st-century digital skills.
          </p>
        </div>

        {/* Video Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {VIDEO_PROJECTS.map((video, idx) => (
            <button
              key={video.id}
              onClick={() => handleSelectVideo(idx)}
              className={`p-4 rounded-xl text-left transition-all border ${
                selectedVideoIndex === idx
                  ? 'bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  Video {idx + 1}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {video.duration} runtime
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 line-clamp-1">
                {video.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-1">
                {video.theme}
              </p>
            </button>
          ))}
        </div>

        {/* Main Interactive Player Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Player Screen */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            {/* Screen Frame */}
            <div className="relative aspect-video bg-slate-950 flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
              {/* Background Art */}
              <div className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none">
                <img
                  src={activeVideo.coverImage}
                  alt={activeVideo.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover blur-sm scale-105"
                />
              </div>

              {/* Dynamic Gradient based on scene */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentScene.accentColor} opacity-30 transition-all duration-700`}
              />

              {/* Top Meta within player */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                  Scene {currentSceneIndex + 1} of {totalScenes}
                </span>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-white border border-slate-700 transition-colors"
                  title={soundEnabled ? 'Mute tone chimes' : 'Enable audio feedback'}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
                </button>
              </div>

              {/* Center Kinetic Typography Scene Display */}
              <div className="relative z-10 text-center my-auto px-4 py-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-amber-300 bg-black/50 backdrop-blur-md mb-3 border border-amber-400/30">
                  {currentScene.title}
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug drop-shadow-md tracking-tight">
                  "{currentScene.caption}"
                </h4>
                <p className="text-xs sm:text-sm text-slate-200/90 mt-3 max-w-lg mx-auto bg-slate-950/60 backdrop-blur-md p-3 rounded-xl border border-slate-800/80">
                  {currentScene.visualDescription}
                </p>
              </div>

              {/* Bottom Progress Bar & Timeline Indicator */}
              <div className="relative z-10 w-full space-y-2">
                <div className="flex gap-1.5 w-full">
                  {activeVideo.scenes.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => {
                        setCurrentSceneIndex(i);
                        playChime(440 + i * 50);
                      }}
                      className={`h-1.5 flex-1 rounded-full cursor-pointer transition-all ${
                        i === currentSceneIndex
                          ? 'bg-emerald-400 shadow-sm shadow-emerald-400/50'
                          : i < currentSceneIndex
                          ? 'bg-emerald-600/70'
                          : 'bg-slate-800'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Player Controller Bar */}
            <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  id="motion-play-pause-btn"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{isPlaying ? 'Pause Motion' : 'Play Motion'}</span>
                </button>
                <button
                  onClick={() => {
                    setCurrentSceneIndex(0);
                    setIsPlaying(false);
                    playChime(440);
                  }}
                  className="p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Reset to beginning"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Step Controls */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    setCurrentSceneIndex((prev) => (prev > 0 ? prev - 1 : totalScenes - 1));
                    playChime(400);
                  }}
                  className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Previous scene"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 px-2 font-mono">
                  {currentSceneIndex + 1} / {totalScenes}
                </span>
                <button
                  onClick={() => {
                    setCurrentSceneIndex((prev) => (prev + 1) % totalScenes);
                    playChime(480);
                  }}
                  className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  title="Next scene"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Storyboard & Narrative Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-2">{activeVideo.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {activeVideo.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {activeVideo.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pt-3 border-t border-slate-800 mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Sequential Storyboard Breakdown
              </div>

              {/* Storyboard List */}
              <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
                {activeVideo.scenes.map((scene, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentSceneIndex(i);
                      playChime(440 + i * 50);
                    }}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      i === currentSceneIndex
                        ? 'bg-slate-800/90 border-emerald-400/60 shadow-sm'
                        : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${i === currentSceneIndex ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                        {scene.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Frame {i + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 line-clamp-1">
                      {scene.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
