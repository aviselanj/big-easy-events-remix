"use client"
// Calendar.tsx
import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { DateSelectArg, EventClickArg, EventChangeArg } from '@fullcalendar/core';

interface CalendarEvent {
    id: string;
    title: string;
    start: string;
    end?: string;
    allDay?: boolean;
}

const Calendar: React.FC = () => {
    const [events, setEvents] = useState<CalendarEvent[]>([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleDateSelect = async (selectInfo: DateSelectArg) => {
        let title = prompt('Please enter a new title for your event');
        let calendarApi = selectInfo.view.calendar;

        calendarApi.unselect(); // clear date selection

        if (title) {
            const newEvent = {
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            };

            try {
                const response = await axios.post('/events', newEvent);
                setEvents((prevEvents) => [...prevEvents, response.data]);
            } catch (error) {
                console.error('Error creating event:', error);
            }
        }
    };

    const handleEventClick = async (clickInfo: EventClickArg) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
            try {
                await axios.delete(`/events/${clickInfo.event.id}`);
                clickInfo.event.remove();
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };

    const handleEventChange = async (changeInfo: EventChangeArg) => {
        const { event, revert } = changeInfo;
        const updatedEvent = {
            id: event.id,
            title: event.title,
            start: event.startStr,
            end: event.endStr,
            allDay: event.allDay
        };

        try {
            await axios.put(`/events/${event.id}`, updatedEvent);
        } catch (error) {
            console.error('Error updating event:', error);
            revert(); // Revert the event change if the update fails
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventChange={handleEventChange} // To handle event updates (drag and drop, resize)
        />
    );
};

export default Calendar;
