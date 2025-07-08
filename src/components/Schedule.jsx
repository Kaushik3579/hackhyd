import { useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../components/styles/schedule.css';

const Schedule = () => {
  const schedule = [
    {
      phase: 'Round 1: Online Screening',
      date: 'August 2, 2025',
      events: [
        {
          time: '10:00 AM - 06:00 PM',
          title: 'Online Coding Round',
          description: 'Participate in the online screening round from anywhere in India.',
          icon: '💻'
        },
        {
          time: '07:00 PM',
          title: 'Results Announcement',
          description: 'Top 125 teams will be selected for the final round.',
          icon: '🏆'
        }
      ]
    },
    {
      phase: 'Final Round: Onsite Hackathon',
      date: 'August 22, 2025',
      location: 'CBIT, Hyderabad',
      events: [
        {
          time: '08:00 AM - 09:00 AM',
          title: 'Registration & Breakfast',
          description: 'Check-in, grab some breakfast, and get settled in.',
          icon: '☕'
        },
        {
          time: '09:00 AM - 10:00 AM',
          title: 'Opening Ceremony',
          description: 'Welcome address and hackathon kickoff with our keynote speakers.',
          icon: '🎤'
        },
        {
          time: '10:00 AM',
          title: 'Hacking Begins',
          description: 'Start working on your projects with your team.',
          icon: '🚀'
        },
        {
          time: '01:00 PM',
          title: 'Lunch Break',
          description: 'Refuel with some delicious food.',
          icon: '🍽️'
        },
        {
          time: '02:00 PM - 06:00 PM',
          title: 'Mentoring Sessions',
          description: 'Get guidance from industry experts and mentors.',
          icon: '👨‍💼'
        },
        {
          time: '08:00 PM',
          title: 'Dinner & Networking',
          description: 'Enjoy dinner and network with fellow participants and mentors.',
          icon: '🍕'
        },
        {
          time: '09:00 PM - 06:00 AM',
          title: 'Overnight Hacking',
          description: 'Code through the night with energy drinks and snacks.',
          icon: '🌙'
        },
        {
          time: '06:00 AM',
          title: 'Breakfast',
          description: 'Start your day with a healthy breakfast.',
          icon: '🍳'
        },
        {
          time: '07:00 AM - 10:00 AM',
          title: 'Final Hacking Stretch',
          description: 'Last chance to put finishing touches on your projects.',
          icon: '⚡'
        },
        {
          time: '10:00 AM',
          title: 'Project Submission Deadline',
          description: 'All projects must be submitted by this time.',
          icon: '⏰'
        },
        {
          time: '10:30 AM - 01:30 PM',
          title: 'Project Demos & Judging',
          description: 'Showcase your project to the judges.',
          icon: '🎯'
        },
        {
          time: '02:30 PM - 04:00 PM',
          title: 'Closing Ceremony & Prizes',
          description: 'Winners announced and closing remarks with prize distribution.',
          icon: '🏆'
        }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, {
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.schedule-day, .schedule-item');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        <div className="section-title">
          <h2>Event Schedule</h2>
          <p>Plan your hackathon experience</p>
        </div>

        <div className="schedule-container">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className="schedule-day fade-in" style={{ transitionDelay: `${dayIndex * 0.2}s` }}>
              <div className="day-header">
                <h3>{day.day}</h3>
                <p>{day.date}</p>
              </div>
              <div className="timeline">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="schedule-item fade-in" style={{ transitionDelay: `${dayIndex * 0.2 + (eventIndex + 1) * 0.1}s` }}>
                    <div className="event-icon">
                      <span>{event.icon}</span>
                    </div>
                    <div className="event-details">
                      <div className="event-time">
                        <FaClock className="time-icon" />
                        <span>{event.time}</span>
                      </div>
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="location-info fade-in" style={{ transitionDelay: '0.8s' }}>
          <div className="location-icon">
            <FaMapMarkerAlt />
          </div>
          <div>
            <h4>Venue</h4>
            <p>Hyderabad International Convention Center (HICC)</p>
            <p>Novotel & HICC Complex, Izzat Nagar, Hyderabad, Telangana 500084</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
