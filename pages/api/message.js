let messages = [];

const addMessage = (data) => {
  console.log(data);
  const preData = {
    id: messages.length + 1,
    createdAt: new Date().toISOString(),
    status: "waiting",
  };
  const objData = typeof data == "string" ? JSON.parse(data) : data;
  const finalData = { ...preData, ...objData };
  messages = [...messages, finalData];
  return [finalData];
};

const updateStatus = (data) => {
  const find = messages.map((msg) => {
    if (msg.id == data.id) {
      msg.status = data.status;
    }
    return msg;
  });
  messages = find;
  return [
    {
      id: data.id,
      status: data.status,
    },
  ];
};

function handler(req, res) {
  let response = [];
  switch (req.method) {
    case "GET":
      response = messages;
      break;

    case "POST":
      response = addMessage(req.body);
      break;

    case "PUT":
      response = updateStatus(req.body);
      break;
  }

  setTimeout(() => {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(response));
  }, 2000);
}

export default handler;
