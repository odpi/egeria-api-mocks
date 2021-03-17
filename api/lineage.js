let node1 = {
  "id": "1",
  "label": "FNAME",
  "group": "RelationalColumn",
  "properties": {
    "endpoint": "IS115.OPENMETADATA.IBMCLOUD.COM",
    "relationalTable": "EMPLDIRECTORY"
  },
  "level": 0
};

let node2 = {
  "id": "2",
  "label": "EMPID",
  "group": "RelationalColumn",
  "properties": {
    "schema": "DB2INST1",
    "database": "MINIMAL"
  },
  "level": 0
};

let edge12 = {
  "from": "1",
  "to": "2",
  "label": null
};

let process12 = {
  "id": "12",
  "label": "flow3",
  "group": "subProcess",
  "properties": {
    "displayName": "flow3"
  },
  "level": 1
};

let edge112 = {
  "from": "1",
  "to": "12",
  "label": null
};

let edge122 = {
  "from": "12",
  "to": "2",
  "label": null
};

let asset1 = {
  "guid": "1",
  "type": {
    "name": "RelationalColumn",
    "description": "A column within a relational table.",
    "version": 2
  },
  "properties": {
    "nativeClass": "VARCHAR",
    "minCardinality": "1",
    "isDeprecated": "false",
    "minimumLength": "0",
    "displayName": "FNAME",
    "qualifiedName": "(host_(engine))=IS115.OPENMETADATA.IBMCLOUD.COM::(database)=MINIMAL::(database_schema)=DB2INST1::(database_table)=EMPLNAME::(database_column)=FNAME",
    "isNullable": "false",
    "anchorGUID": "2",
    "length": "50",
    "position": "2",
    "allowsDuplicateValues": "true",
    "maxCardinality": "1"
  },
  "additionalProperties": {
    "selected_foreign_key": "false",
    "odbc_type": "VARCHAR",
    "defined_foreign_key": "false",
    "selected_natural_key": "false"
  },
  "classifications": [
    {
      "name": "TypeEmbeddedAttribute",
      "origin": "The classification is explicitly assigned to the entity",
      "createdBy": "Egeria Open Metadata",
      "createTime": "2020-10-16T10:57:49.000+00:00",
      "updatedBy": "Egeria Open Metadata",
      "updateTime": "2020-10-16T11:26:41.000+00:00",
      "version": 1602847601000,
      "status": "Active",
      "type": {
        "name": "TypeEmbeddedAttribute",
        "description": "Type information embedded within an attribute.",
        "version": 2
      },
      "properties": {
        "dataType": "STRING"
      }
    }
  ]
};

let asset2 = {
  "guid": "2",
  "type": {
    "name": "RelationalColumn",
    "description": "A column within a relational table.",
    "version": 2
  },
  "properties": {
    "nativeClass": "VARCHAR",
    "minCardinality": "1",
    "isDeprecated": "false",
    "minimumLength": "0",
    "displayName": "EMPID",
    "qualifiedName": "(host_(engine))=IS115.OPENMETADATA.IBMCLOUD.COM::(database)=MINIMAL::(database_schema)=DB2INST1::(database_table)=EMPLNAME::(database_column)=FNAME",
    "isNullable": "false",
    "anchorGUID": "2",
    "length": "50",
    "position": "2",
    "allowsDuplicateValues": "true",
    "maxCardinality": "1"
  },
  "additionalProperties": {
    "selected_foreign_key": "false",
    "odbc_type": "VARCHAR",
    "defined_foreign_key": "false",
    "selected_natural_key": "false"
  },
  "classifications": [
    {
      "name": "TypeEmbeddedAttribute",
      "origin": "The classification is explicitly assigned to the entity",
      "createdBy": "Egeria Open Metadata",
      "createTime": "2020-10-16T10:57:49.000+00:00",
      "updatedBy": "Egeria Open Metadata",
      "updateTime": "2020-10-16T11:26:41.000+00:00",
      "version": 1602847601000,
      "status": "Active",
      "type": {
        "name": "TypeEmbeddedAttribute",
        "description": "Type information embedded within an attribute.",
        "version": 2
      },
      "properties": {
        "dataType": "STRING"
      }
    }
  ]
};

let simpleData = {
  nodes: [node1, node2],
  edges: [edge12]
};

let emptySimpleData = {
  nodes: [],
  edges: []
};

// simpleData = emptySimpleData;

let dataWithProcesses = {
  nodes: [node1, process12, node2],
  edges: [edge112, edge122]
}

const assetSearch = asset1;

const end2end = (includeProcess) => {
  return includeProcess ? dataWithProcesses : simpleData;
}

const sourceAndDestination = (includeProcess) => {
  return includeProcess ? dataWithProcesses : simpleData;
}

const ultimateSource = (includeProcess) => {
  return includeProcess ? dataWithProcesses : simpleData;
}

const verticalLineage = (includeProcess) => {
  return includeProcess ? dataWithProcesses : simpleData;
}

const ultimateDestination = (includeProcesses) => {
  return includeProcesses ? [node1] : [node1];
}

module.exports = function (app) {
  app.get('/api/assets/search', (req, res) => {
    res.json([asset1]);
  });

  app.get('/api/assets/:id', (req, res) => {
    res.json(asset1);
  });

  app.get('/api/lineage/entities/:id/ultimate-destination', (req, res) => {
    res.json({nodes: ultimateDestination(true), edges: []});
  });

  app.get('/api/lineage/entities/:id/vertical-lineage', (req, res) => {
    let includeProcesses = req.query.includeProcesses !== "true";

    res.json(verticalLineage(includeProcesses));
  });

  app.get('/api/lineage/entities/:id/end2end', (req, res) => {
    let includeProcesses = req.query.includeProcesses;

    res.json(end2end(includeProcesses));
  });

  app.get('/api/lineage/entities/:id/ultimate-source', (req, res) => {
    let includeProcesses = req.query.includeProcesses;

    res.json(ultimateSource(includeProcesses));
  });

  app.get('/api/lineage/entities/:id/source-and-destination', (req, res) => {
    let includeProcesses = req.query.includeProcesses;

    res.json(sourceAndDestination(includeProcesses));
  });
}