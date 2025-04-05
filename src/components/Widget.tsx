import React, { useState } from 'react'; 
import { Box, Text } from '@chakra-ui/react';

interface WidgetProps {
  title: string;
}

const Widget: React.FC<WidgetProps> = ({ title }) => {
  const [widgets, setWidgets] = useState<{ id: number; title: string }[]>([]);

  const handleAddWidget = () => {
    const newWidget = { id: Date.now(), title };
    const isDuplicate = widgets.some((widget) => widget.title === newWidget.title);

    if (!isDuplicate) {
      setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
    } else {
      console.warn(`Widget with title '${title}' already exists.`);
    }
  };

  return (
    <Box>
      <Text fontSize='xl' fontWeight='bold' mb={4}>
        Widgets
      </Text>
      <Box mb={4}>
        {widgets.map((widget) => (
          <Text key={widget.id}>{widget.title}</Text>
        ))}
      </Box>
      <button onClick={handleAddWidget}>Add Widget: {title}</button>
    </Box>
  );
};

export default Widget;