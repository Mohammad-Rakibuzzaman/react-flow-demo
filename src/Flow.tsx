import React from "react";
import ReactFlow, { Controls, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

// Replace with your actual data
type NodeData = {
  id: string;
  type: string;
  label: string;
  position: { x: number; y: number };
  data: any; // Make data property mandatory
};

const nodes: NodeData[] = [
  {
    id: "1",
    type: "input",
    // Add data object if needed (adjust the type annotation)

    data: { label: "Start Node" },
    position: { x: 100, y: 100 },
    label: "",
  },
  {
    id: "2",
    type: "output",
    data: { label: "End Node" }, // Example data for second node
    position: { x: 400, y: 100 },
    label: "",
  },
];

const edges = [{ id: "e1-2", source: "1", target: "2", animated: true }];

const Flow = () => {
  return (
    <ReactFlowProvider>
      <div className="h-screen flex justify-center items-center">
        {React.cloneElement(
          <ReactFlow
            nodes={nodes}
            edges={edges}
            // Base styles for entire flow diagram
          />
        )}
        <Controls className="absolute bottom-0 right-0 mb-4 mr-4" />
      </div>
    </ReactFlowProvider>
  );
};

export default Flow;
