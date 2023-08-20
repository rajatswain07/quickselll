import React, { useState, useEffect } from 'react';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    // Fetch data from the API
    async function fetchData() {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data);
    }
    fetchData();
  }, []);

  const groupTickets = () => {
    if (groupingOption === 'status') {
      // Group by status
      // Implementation logic
    } else if (groupingOption === 'user') {
      // Group by user
      // Implementation logic
    } else if (groupingOption === 'priority') {
      // Group by priority
      // Implementation logic
    }
  };

  const sortTickets = () => {
    if (sortOption === 'priority') {
      // Sort by priority
      // Implementation logic
    } else if (sortOption === 'title') {
      // Sort by title
      // Implementation logic
    }
  };

  return (
    <div>
      {/* Display buttons and options */}
      {/* Kanban board layout */}
      {tickets.map(ticket => (
        // Render individual ticket cards here
        // You can create a separate TicketCard component for this
      ))}
    </div>
  );
};

export default KanbanBoard;
