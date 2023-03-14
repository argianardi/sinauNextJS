import React from "react";
import { Badge, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

// message status: if waiting, message color is yellow if failed is red,  if success is green
const StatusBadge = ({ status }) => {
  let color = "yellow";
  let statusText = "waiting";
  if (status === "failed") {
    color = "red";
    statusText = "failed";
  } else if (status === "success") {
    color = "green";
    statusText = "success";
  }

  return <Badge colorScheme={color}>{statusText}</Badge>;
};

// Converts a date to the date and time format that corresponds to the Indonesia (ID) timezone.
const formatDate = (date) => {
  return new Date(date).toLocaleString("id-ID");
};

const TableMessage = ({ data }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Date</Th>
          <Th>Phone</Th>
          <Th>Message</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.map((message) => (
          <Tr>
            <Td>{formatDate(message.createdAt)}</Td>
            <Td>{message.phoneNumber}</Td>
            <Td>{message.message}</Td>
            <Td>
              <StatusBadge status={message.status} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TableMessage;
