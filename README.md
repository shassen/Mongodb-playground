# Mongodb-playground

mongodb playground community page:
https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/

To start the mongodb service:

- `brew services start mongodb-community@7.0`
- `brew services stop mongodb-community@7.0`

to check the list of running services:

- `brew services list`

Some prerequisites:

1. You need to install mongo on your machine use brew.
2. Start the mongodb service using the command above.
3. Run 'yarn' when you clone the repo.
4. If you make changes to either the findAndLogDocs.ts or index.ts file, you need to run:

- `npx tsc <file_name>`

5. This will compile the typescript into a javascript file with the same name.
6. Then you can run `node <file_name>` in the terminal to see the output.

Enter mongodb shell:

1. In the terminal, type: `mongosh`.
2. You will automatically be using the "test" db.
3. To use the database specified in the index.ts file, type: `use <db_name>`.
4. To see the documents of a collection, type: `db.<collection_name>.find().

- This will render all the documents in that collection as JSON in the terminal.

5. To change or add documents, you can look that up in the docs but it looks something like this:

- db.<collection_name>.update({ key: value }, $set: { key: value })
- db.first_collection.update({ name: 'Shawn' }, $set: { age: 35 })
- This would locate the document with the name 'Shawn' and update the name property to 35.

6. To exit the mongodb shell:

- type: `exit`.
