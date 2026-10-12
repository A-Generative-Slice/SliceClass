import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { C, Card, Avatar } from '../components/Common';
import Icon from '../components/Icon';
import Syllabus from '../components/Syllabus';
import QuizPlayer from '../components/QuizPlayer';
import { useProgress } from '../hooks/useProgress';
import { useLmsStore } from '../stores/useLmsStore';
import { PAYWALL_ENABLED } from '../config';

const CourseDetail = ({ course, onEnroll, isLoggedIn }) => {
  const location = useLocation();
  const { user } = useLmsStore();
  const [activeLesson, setActiveLesson] = useState(null);
  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lessonId = parseInt(params.get('lessonId'));
    if (course?.chapters && course.chapters.length > 0) {
      if (lessonId) {
        for (const ch of course.chapters) {
          const found = ch.lessons?.find(l => l.id === lessonId);
          if (found) {
            setActiveLesson({ ...found, chId: ch.id });
            return;
          }
        }
      } else if (!activeLesson) {
        const firstCh = course.chapters[0];
        if (firstCh?.lessons && firstCh.lessons.length > 0) {
          setActiveLesson({ ...firstCh.lessons[0], chId: firstCh.id });
        }
      }
    }
  }, [location.search, course]);

  const { progress, updateLessonProgress } = useProgress(course?.id || 1);

  const isPremiumLocked = PAYWALL_ENABLED && isLoggedIn && !user?.isPremium && activeLesson && activeLesson.chId > 1;

  // Find next lesson for continuous reading flow
  const findNextLesson = () => {
    if (!course?.chapters || !activeLesson) return null;
    let foundCurrent = false;
    for (const ch of course.chapters) {
      for (const l of ch.lessons || []) {
        if (foundCurrent) return { ...l, chId: ch.id };
        if (l.id === activeLesson.id) foundCurrent = true;
      }
    }
    return null;
  };

  const nextLesson = findNextLesson();
  const isCurrentCompleted = activeLesson && progress?.[activeLesson.id]?.completed;

  const handleToggleComplete = () => {
    if (!activeLesson) return;
    updateLessonProgress(activeLesson.id, 0, !isCurrentCompleted);
  };

  const handleCompleteAndNext = () => {
    if (activeLesson) {
      updateLessonProgress(activeLesson.id, 0, true);
    }
    if (nextLesson) {
      setActiveLesson(nextLesson);
      window.scrollTo({ top: 350, behavior: 'smooth' });
    }
  };

  const currentContent = isPremiumLocked ? (
    <div className="glass" style={{ position: 'relative', overflow: 'hidden', minHeight: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fafafa', border: '1px solid rgba(0,0,0,0.08)' }}>
       <div style={{ width: 64, height: 64, background: 'rgba(0,0,0,0.04)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid rgba(0,0,0,0.1)' }}>
          <Icon name="lock" size={24} color="#000" />
       </div>
       <h3 style={{ color: '#000', fontSize: 24, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>PREMIUM MODULE</h3>
       <p style={{ color: '#666', fontSize: 13, marginBottom: 32, textAlign: 'center', maxWidth: 300, fontWeight: 700, letterSpacing: '0.05em' }}>THIS LESSON IS RESERVED FOR PREMIUM STUDENTS.</p>
       <button onClick={() => alert('Upgrade Flow')} style={{ background: '#000', color: '#fff', border: 'none', padding: '14px 32px', fontSize: 11, fontWeight: 900, cursor: 'pointer', letterSpacing: '0.1em' }}>UPGRADE NOW</button>
    </div>
  ) : activeLesson ? (
    <div className="lesson-reader-container">
      {/* Reader Header */}
      <div className="lesson-reader-header">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span className="lesson-badge-pill">
              📖 Text Masterclass
            </span>
            {activeLesson.duration && (
              <span style={{ fontSize: 11, color: '#aaa', fontFamily: 'monospace' }}>
                ⏱ {activeLesson.duration}
              </span>
            )}
          </div>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', margin: 0 }}>
            {activeLesson.title}
          </h2>
        </div>

        <button
          onClick={handleToggleComplete}
          style={{
            background: isCurrentCompleted ? '#10b981' : 'transparent',
            color: '#fff',
            border: `1px solid ${isCurrentCompleted ? '#10b981' : 'rgba(255,255,255,0.3)'}`,
            padding: '8px 18px',
            fontSize: 11,
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRadius: 4,
            transition: 'all 0.2s'
          }}
        >
          {isCurrentCompleted ? '✓ Completed' : 'Mark as Done'}
        </button>
      </div>

      {/* Production Preview Notice for LiteLab Testers */}
      <div style={{ background: '#f8fafc', padding: '14px 28px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 18 }}>💡</span>
        <span style={{ fontSize: 12, color: '#475569', lineHeight: 1.5 }}>
          <strong style={{ color: '#0f172a' }}>LITELAB Internal Preview:</strong> Studio video lectures are currently in production. Below is the complete scene-by-scene script, visual directions, and technical curriculum text for this unit.
        </span>
      </div>

      {/* If Video URL is available, render embedded player */}
      {activeLesson.videoUrl && (
        <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', background: '#000' }}>
          <iframe
            src={activeLesson.videoUrl}
            style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        </div>
      )}

      {/* Full Lesson Text Body */}
      <div className="lesson-body-content">
        {activeLesson.content ? (
          <div dangerouslySetInnerHTML={{ __html: activeLesson.content }} />
        ) : (
          <div style={{ padding: '20px 0' }}>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{activeLesson.title}</h3>
            <p style={{ color: '#555', fontSize: 15, lineHeight: 1.8 }}>{activeLesson.description || course?.description}</p>
          </div>
        )}
      </div>

      {/* Reader Footer Navigation */}
      <div style={{ padding: '24px 36px', background: '#fafafa', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          {isCurrentCompleted && <span style={{ color: '#10b981', fontSize: 12, fontWeight: 800 }}>✓ Progress Saved</span>}
        </div>
        {nextLesson ? (
          <button
            onClick={handleCompleteAndNext}
            style={{
              background: '#000000',
              color: '#ffffff',
              border: 'none',
              padding: '12px 28px',
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: '0.1em',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            COMPLETE & NEXT UNIT →
          </button>
        ) : (
          <button
            onClick={handleToggleComplete}
            style={{
              background: '#000000',
              color: '#ffffff',
              border: 'none',
              padding: '12px 28px',
              fontSize: 11,
              fontWeight: 900,
              cursor: 'pointer'
            }}
          >
            FINISH CURRICULUM 🎉
          </button>
        )}
      </div>
    </div>
  ) : (
    <div style={{ background: '#000', border: '1px solid rgba(0,0,0,0.1)', overflow: 'hidden' }}>
      <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', background: '#000' }}>
         <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 80, height: 80, background: 'rgba(255,255,255,0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid #fff' }}>
              <span style={{ fontSize: 24, marginLeft: 4, color: '#fff' }}>▶</span>
            </div>
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.3em', color: '#aaa', marginBottom: 8 }}>SELECT A LESSON TO BEGIN</div>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff' }}>COURSE PREVIEW</h3>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', color: '#0a0a0a', paddingBottom: 100 }}>
      {/* Hero Section */}
      <div style={{ 
        height: 440,
        background: course?.thumbnail 
          ? `linear-gradient(to bottom, transparent, #ffffff), url(${course.thumbnail}) center/cover no-repeat`
          : '#ffffff', 
        padding: '60px 0', 
        display: 'flex', 
        alignItems: 'flex-end'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 var(--container-px)', width: '100%' }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            {course?.tags?.map(t => <span key={t} style={{ border: '1px solid rgba(0,0,0,0.15)', padding: '5px 14px', fontSize: 9, fontWeight: 900, letterSpacing: '0.1em', color: '#000', background: '#fff' }}>{t.toUpperCase()}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 54px)', fontWeight: 900, lineHeight: 1.0, letterSpacing: '-0.04em', marginBottom: 24, color: '#000' }}>{course?.title?.toUpperCase()}</h1>
          
          <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <Avatar user={{ name: course?.instructor }} size={36} />
              <div>
                <div style={{ fontSize: 9, color: '#888', fontWeight: 900, letterSpacing: '0.1em' }}>INSTRUCTOR</div>
                <div style={{ fontWeight: 800, fontSize: 12, color: '#000' }}>{course?.instructor?.toUpperCase()}</div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, color: '#888', fontWeight: 900, letterSpacing: '0.1em' }}>DURATION</div>
              <div style={{ fontWeight: 800, fontSize: 12, color: '#000' }}>{course?.duration || '2h 10m'} ({course?.totalLessons || 15} UNITS)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="md-grid-reset" style={{ maxWidth: 1200, margin: '40px auto', padding: '0 var(--container-px)', display: 'grid', gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.75fr)', gap: 60 }}>
        <div>
          <section style={{ marginBottom: 60 }}>
            <h2 style={{ fontSize: 11, fontWeight: 900, color: '#888', letterSpacing: '0.3em', marginBottom: 20 }}>ACTIVE LESSON</h2>
            {isLoggedIn ? (
              <div className="reveal">
                {currentContent}
              </div>
            ) : (
              <div className="glass" style={{ position: 'relative', overflow: 'hidden', minHeight: 400, background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)' }}>
                 <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, padding: 40 }}>
                    <div style={{ width: 64, height: 64, background: 'rgba(0,0,0,0.04)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, border: '1px solid rgba(0,0,0,0.1)' }}>
                      <Icon name="lock" size={24} color="#000" />
                    </div>
                    <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, textAlign: 'center', color: '#000' }}>UNLOCK THE MASTERCLASS</h3>
                    <p style={{ color: '#666', fontSize: 13, textAlign: 'center', maxWidth: 300, marginBottom: 32, fontWeight: 700, letterSpacing: '0.05em' }}>CREATE A FREE ACCOUNT TO ACCESS THE TEXT-BASED LESSONS & SCRIPTS.</p>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <button onClick={() => onEnroll('signup')} style={{ background: '#000', color: '#fff', border: 'none', padding: '14px 32px', fontSize: 11, fontWeight: 900, cursor: 'pointer', letterSpacing: '0.1em' }}>ENROLL FREE</button>
                      <button onClick={() => onEnroll('login')} style={{ background: 'transparent', color: '#000', border: '1px solid rgba(0,0,0,0.2)', padding: '14px 32px', fontSize: 11, fontWeight: 900, cursor: 'pointer', letterSpacing: '0.1em' }}>SIGN IN</button>
                    </div>
                 </div>
                 <img src={course?.thumbnail} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1 }} alt="" />
              </div>
            )}
          </section>

          <section>
            <h2 style={{ fontSize: 11, fontWeight: 900, color: '#888', letterSpacing: '0.3em', marginBottom: 20 }}>ABOUT THIS MASTERCLASS</h2>
            <div style={{ color: '#444', fontSize: 15, lineHeight: 1.8, maxWidth: 640 }}>{course?.description}</div>
          </section>
        </div>

        <aside>
          <div style={{ position: 'sticky', top: 100 }}>
            {!isLoggedIn && (
               <div className="glass" style={{ padding: 36, marginBottom: 36, background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)' }}>
                  <div style={{ fontSize: 10, fontWeight: 900, color: '#888', letterSpacing: '0.2em', marginBottom: 12 }}>ACADEMY STATUS</div>
                  <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, color: '#000' }}>FREE PREVIEW</div>
                  <p style={{ color: '#666', fontSize: 12, fontWeight: 700, marginBottom: 28 }}>ACCESS COMPLETE TEXT LESSONS & SCRIPTS AT NO COST.</p>
                  <button onClick={() => onEnroll('signup')} style={{ background: '#000', color: '#fff', border: 'none', padding: '16px', width: '100%', fontSize: 11, fontWeight: 900, letterSpacing: '0.1em', cursor: 'pointer' }}>GET STARTED NOW</button>
               </div>
            )}
            <Syllabus 
              course={course} 
              progress={progress} 
              onSelectLesson={(l) => {
                setActiveLesson(l);
                window.scrollTo({ top: 350, behavior: 'smooth' });
              }} 
              isLoggedIn={isLoggedIn}
              activeLessonId={activeLesson?.id}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CourseDetail;
