const Node = {
  "id": "8e82ccceb36f3539",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "Success = true",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{ \"success\": true }",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 120,
  "wires": [
    [
      "2e6b0606eab4568c"
    ]
  ]
}

module.exports = Node;