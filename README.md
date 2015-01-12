####说明

#####文件目录
```
.
├── app.js
├── dataModel
│   ├── bookModel.js
│   └── bookSchema.js
├── node_modules
│   ├── mongoose
│   │   ├── CONTRIBUTING.md
│   │   ├── contRun.sh
│   │   ├── examples
│   │   │   ├── aggregate
│   │   │   │   ├── aggregate.js
│   │   │   │   ├── package.json
│   │   │   │   └── person.js
│   │   │   ├── doc-methods.js
│   │   │   ├── express
│   │   │   │   ├── connection-sharing
│   │   │   │   │   ├── app.js
│   │   │   │   │   ├── modelA.js
│   │   │   │   │   ├── package.json
│   │   │   │   │   ├── README.md
│   │   │   │   │   └── routes.js
│   │   │   │   └── README.md
│   │   │   ├── geospatial
│   │   │   │   ├── geoJSONexample.js
│   │   │   │   ├── geoJSONSchema.js
│   │   │   │   ├── geospatial.js
│   │   │   │   ├── package.json
│   │   │   │   └── person.js
│   │   │   ├── globalschemas
│   │   │   │   ├── gs_example.js
│   │   │   │   └── person.js
│   │   │   ├── lean
│   │   │   │   ├── lean.js
│   │   │   │   ├── package.json
│   │   │   │   └── person.js
│   │   │   ├── mapreduce
│   │   │   │   ├── mapreduce.js
│   │   │   │   ├── package.json
│   │   │   │   └── person.js
│   │   │   ├── population
│   │   │   │   ├── population-across-three-collections.js
│   │   │   │   ├── population-basic.js
│   │   │   │   ├── population-of-existing-doc.js
│   │   │   │   ├── population-of-multiple-existing-docs.js
│   │   │   │   ├── population-options.js
│   │   │   │   └── population-plain-objects.js
│   │   │   ├── promises
│   │   │   │   ├── package.json
│   │   │   │   ├── person.js
│   │   │   │   └── promise.js
│   │   │   ├── querybuilder
│   │   │   │   ├── package.json
│   │   │   │   ├── person.js
│   │   │   │   └── querybuilder.js
│   │   │   ├── README.md
│   │   │   ├── replicasets
│   │   │   │   ├── package.json
│   │   │   │   ├── person.js
│   │   │   │   └── replica-sets.js
│   │   │   ├── schema
│   │   │   │   ├── schema.js
│   │   │   │   └── storing-schemas-as-json
│   │   │   │       ├── index.js
│   │   │   │       └── schema.json
│   │   │   └── statics
│   │   │       ├── person.js
│   │   │       └── statics.js
│   │   ├── History.md
│   │   ├── index.js
│   │   ├── lib
│   │   │   ├── aggregate.js
│   │   │   ├── collection.js
│   │   │   ├── connection.js
│   │   │   ├── connectionstate.js
│   │   │   ├── document.js
│   │   │   ├── drivers
│   │   │   │   ├── node-mongodb-native
│   │   │   │   │   ├── binary.js
│   │   │   │   │   ├── collection.js
│   │   │   │   │   ├── connection.js
│   │   │   │   │   └── objectid.js
│   │   │   │   └── SPEC.md
│   │   │   ├── error
│   │   │   │   ├── cast.js
│   │   │   │   ├── divergentArray.js
│   │   │   │   ├── messages.js
│   │   │   │   ├── missingSchema.js
│   │   │   │   ├── overwriteModel.js
│   │   │   │   ├── validation.js
│   │   │   │   ├── validator.js
│   │   │   │   └── version.js
│   │   │   ├── error.js
│   │   │   ├── index.js
│   │   │   ├── internal.js
│   │   │   ├── model.js
│   │   │   ├── promise.js
│   │   │   ├── query.js
│   │   │   ├── queryhelpers.js
│   │   │   ├── querystream.js
│   │   │   ├── schema
│   │   │   │   ├── array.js
│   │   │   │   ├── boolean.js
│   │   │   │   ├── buffer.js
│   │   │   │   ├── date.js
│   │   │   │   ├── documentarray.js
│   │   │   │   ├── index.js
│   │   │   │   ├── mixed.js
│   │   │   │   ├── number.js
│   │   │   │   ├── objectid.js
│   │   │   │   └── string.js
│   │   │   ├── schema.js
│   │   │   ├── schemadefault.js
│   │   │   ├── schematype.js
│   │   │   ├── statemachine.js
│   │   │   ├── types
│   │   │   │   ├── array.js
│   │   │   │   ├── buffer.js
│   │   │   │   ├── documentarray.js
│   │   │   │   ├── embedded.js
│   │   │   │   ├── index.js
│   │   │   │   └── objectid.js
│   │   │   ├── utils.js
│   │   │   └── virtualtype.js
│   │   ├── node_modules
│   │   │   ├── hooks
│   │   │   │   ├── hooks.alt.js
│   │   │   │   ├── hooks.js
│   │   │   │   ├── Makefile
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test.js
│   │   │   ├── mongodb
│   │   │   │   ├── CONTRIBUTING.md
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   └── mongodb
│   │   │   │   │       ├── admin.js
│   │   │   │   │       ├── aggregation_cursor.js
│   │   │   │   │       ├── auth
│   │   │   │   │       │   ├── mongodb_cr.js
│   │   │   │   │       │   ├── mongodb_gssapi.js
│   │   │   │   │       │   ├── mongodb_plain.js
│   │   │   │   │       │   ├── mongodb_scram.js
│   │   │   │   │       │   ├── mongodb_sspi.js
│   │   │   │   │       │   └── mongodb_x509.js
│   │   │   │   │       ├── collection
│   │   │   │   │       │   ├── aggregation.js
│   │   │   │   │       │   ├── batch
│   │   │   │   │       │   │   ├── common.js
│   │   │   │   │       │   │   ├── ordered.js
│   │   │   │   │       │   │   └── unordered.js
│   │   │   │   │       │   ├── commands.js
│   │   │   │   │       │   ├── core.js
│   │   │   │   │       │   ├── geo.js
│   │   │   │   │       │   ├── index.js
│   │   │   │   │       │   ├── query.js
│   │   │   │   │       │   └── shared.js
│   │   │   │   │       ├── collection.js
│   │   │   │   │       ├── command_cursor.js
│   │   │   │   │       ├── commands
│   │   │   │   │       │   ├── base_command.js
│   │   │   │   │       │   ├── db_command.js
│   │   │   │   │       │   ├── delete_command.js
│   │   │   │   │       │   ├── get_more_command.js
│   │   │   │   │       │   ├── insert_command.js
│   │   │   │   │       │   ├── kill_cursor_command.js
│   │   │   │   │       │   ├── query_command.js
│   │   │   │   │       │   └── update_command.js
│   │   │   │   │       ├── connection
│   │   │   │   │       │   ├── base.js
│   │   │   │   │       │   ├── connection.js
│   │   │   │   │       │   ├── connection_pool.js
│   │   │   │   │       │   ├── connection_utils.js
│   │   │   │   │       │   ├── mongos.js
│   │   │   │   │       │   ├── read_preference.js
│   │   │   │   │       │   ├── repl_set
│   │   │   │   │       │   │   ├── ha.js
│   │   │   │   │       │   │   ├── options.js
│   │   │   │   │       │   │   ├── repl_set.js
│   │   │   │   │       │   │   ├── repl_set_state.js
│   │   │   │   │       │   │   └── strategies
│   │   │   │   │       │   │       ├── ping_strategy.js
│   │   │   │   │       │   │       └── statistics_strategy.js
│   │   │   │   │       │   ├── server.js
│   │   │   │   │       │   ├── server_capabilities.js
│   │   │   │   │       │   └── url_parser.js
│   │   │   │   │       ├── cursor.js
│   │   │   │   │       ├── cursorstream.js
│   │   │   │   │       ├── db.js
│   │   │   │   │       ├── gridfs
│   │   │   │   │       │   ├── chunk.js
│   │   │   │   │       │   ├── grid.js
│   │   │   │   │       │   ├── gridstore.js
│   │   │   │   │       │   └── readstream.js
│   │   │   │   │       ├── index.js
│   │   │   │   │       ├── mongo_client.js
│   │   │   │   │       ├── responses
│   │   │   │   │       │   └── mongo_reply.js
│   │   │   │   │       ├── scope.js
│   │   │   │   │       └── utils.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── node_modules
│   │   │   │   │   ├── bson
│   │   │   │   │   │   ├── binding.gyp
│   │   │   │   │   │   ├── browser_build
│   │   │   │   │   │   │   ├── bson.js
│   │   │   │   │   │   │   └── package.json
│   │   │   │   │   │   ├── build
│   │   │   │   │   │   │   ├── binding.Makefile
│   │   │   │   │   │   │   ├── bson.target.mk
│   │   │   │   │   │   │   ├── config.gypi
│   │   │   │   │   │   │   ├── gyp-mac-tool
│   │   │   │   │   │   │   ├── Makefile
│   │   │   │   │   │   │   └── Release
│   │   │   │   │   │   │       ├── bson.node
│   │   │   │   │   │   │       ├── linker.lock
│   │   │   │   │   │   │       └── obj.target
│   │   │   │   │   │   │           └── bson
│   │   │   │   │   │   │               └── ext
│   │   │   │   │   │   │                   └── bson.o
│   │   │   │   │   │   ├── build_browser.js
│   │   │   │   │   │   ├── builderror.log
│   │   │   │   │   │   ├── ext
│   │   │   │   │   │   │   ├── bson.cc
│   │   │   │   │   │   │   ├── bson.h
│   │   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   │   ├── Makefile
│   │   │   │   │   │   │   ├── win32
│   │   │   │   │   │   │   │   ├── ia32
│   │   │   │   │   │   │   │   │   └── bson.node
│   │   │   │   │   │   │   │   └── x64
│   │   │   │   │   │   │   │       └── bson.node
│   │   │   │   │   │   │   └── wscript
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   └── bson
│   │   │   │   │   │   │       ├── binary.js
│   │   │   │   │   │   │       ├── binary_parser.js
│   │   │   │   │   │   │       ├── bson.js
│   │   │   │   │   │   │       ├── bson_new.js
│   │   │   │   │   │   │       ├── code.js
│   │   │   │   │   │   │       ├── db_ref.js
│   │   │   │   │   │   │       ├── double.js
│   │   │   │   │   │   │       ├── float_parser.js
│   │   │   │   │   │   │       ├── index.js
│   │   │   │   │   │   │       ├── long.js
│   │   │   │   │   │   │       ├── max_key.js
│   │   │   │   │   │   │       ├── min_key.js
│   │   │   │   │   │   │       ├── objectid.js
│   │   │   │   │   │   │       ├── symbol.js
│   │   │   │   │   │   │       └── timestamp.js
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── Makefile
│   │   │   │   │   │   ├── node_modules
│   │   │   │   │   │   │   └── nan
│   │   │   │   │   │   │       ├── appveyor.yml
│   │   │   │   │   │   │       ├── CHANGELOG.md
│   │   │   │   │   │   │       ├── include_dirs.js
│   │   │   │   │   │   │       ├── LICENSE
│   │   │   │   │   │   │       ├── nan.h
│   │   │   │   │   │   │       ├── package.json
│   │   │   │   │   │   │       └── README.md
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   ├── testcases.js
│   │   │   │   │   │   └── tools
│   │   │   │   │   │       ├── gleak.js
│   │   │   │   │   │       └── jasmine-1.1.0
│   │   │   │   │   │           ├── jasmine.css
│   │   │   │   │   │           ├── jasmine.js
│   │   │   │   │   │           ├── jasmine_favicon.png
│   │   │   │   │   │           ├── jasmine-html.js
│   │   │   │   │   │           └── MIT.LICENSE
│   │   │   │   │   ├── kerberos
│   │   │   │   │   │   ├── binding.gyp
│   │   │   │   │   │   ├── builderror.log
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   ├── lib
│   │   │   │   │   │   │   ├── auth_processes
│   │   │   │   │   │   │   │   └── mongodb.js
│   │   │   │   │   │   │   ├── base64.c
│   │   │   │   │   │   │   ├── base64.h
│   │   │   │   │   │   │   ├── kerberos.cc
│   │   │   │   │   │   │   ├── kerberos.h
│   │   │   │   │   │   │   ├── kerberos.js
│   │   │   │   │   │   │   ├── kerberos_context.cc
│   │   │   │   │   │   │   ├── kerberos_context.h
│   │   │   │   │   │   │   ├── kerberosgss.c
│   │   │   │   │   │   │   ├── kerberosgss.h
│   │   │   │   │   │   │   ├── sspi.js
│   │   │   │   │   │   │   ├── win32
│   │   │   │   │   │   │   │   ├── base64.c
│   │   │   │   │   │   │   │   ├── base64.h
│   │   │   │   │   │   │   │   ├── kerberos.cc
│   │   │   │   │   │   │   │   ├── kerberos.h
│   │   │   │   │   │   │   │   ├── kerberos_sspi.c
│   │   │   │   │   │   │   │   ├── kerberos_sspi.h
│   │   │   │   │   │   │   │   ├── worker.cc
│   │   │   │   │   │   │   │   ├── worker.h
│   │   │   │   │   │   │   │   └── wrappers
│   │   │   │   │   │   │   │       ├── security_buffer.cc
│   │   │   │   │   │   │   │       ├── security_buffer.h
│   │   │   │   │   │   │   │       ├── security_buffer.js
│   │   │   │   │   │   │   │       ├── security_buffer_descriptor.cc
│   │   │   │   │   │   │   │       ├── security_buffer_descriptor.h
│   │   │   │   │   │   │   │       ├── security_buffer_descriptor.js
│   │   │   │   │   │   │   │       ├── security_context.cc
│   │   │   │   │   │   │   │       ├── security_context.h
│   │   │   │   │   │   │   │       ├── security_context.js
│   │   │   │   │   │   │   │       ├── security_credentials.cc
│   │   │   │   │   │   │   │       ├── security_credentials.h
│   │   │   │   │   │   │   │       └── security_credentials.js
│   │   │   │   │   │   │   ├── worker.cc
│   │   │   │   │   │   │   └── worker.h
│   │   │   │   │   │   ├── LICENSE
│   │   │   │   │   │   ├── package.json
│   │   │   │   │   │   ├── README.md
│   │   │   │   │   │   └── test
│   │   │   │   │   │       ├── kerberos_tests.js
│   │   │   │   │   │       ├── kerberos_win32_test.js
│   │   │   │   │   │       └── win32
│   │   │   │   │   │           ├── security_buffer_descriptor_tests.js
│   │   │   │   │   │           ├── security_buffer_tests.js
│   │   │   │   │   │           └── security_credentials_tests.js
│   │   │   │   │   └── readable-stream
│   │   │   │   │       ├── duplex.js
│   │   │   │   │       ├── lib
│   │   │   │   │       │   ├── _stream_duplex.js
│   │   │   │   │       │   ├── _stream_passthrough.js
│   │   │   │   │       │   ├── _stream_readable.js
│   │   │   │   │       │   ├── _stream_transform.js
│   │   │   │   │       │   └── _stream_writable.js
│   │   │   │   │       ├── LICENSE
│   │   │   │   │       ├── node_modules
│   │   │   │   │       │   ├── core-util-is
│   │   │   │   │       │   │   ├── float.patch
│   │   │   │   │       │   │   ├── lib
│   │   │   │   │       │   │   │   └── util.js
│   │   │   │   │       │   │   ├── package.json
│   │   │   │   │       │   │   ├── README.md
│   │   │   │   │       │   │   └── util.js
│   │   │   │   │       │   ├── inherits
│   │   │   │   │       │   │   ├── inherits.js
│   │   │   │   │       │   │   ├── inherits_browser.js
│   │   │   │   │       │   │   ├── LICENSE
│   │   │   │   │       │   │   ├── package.json
│   │   │   │   │       │   │   ├── README.md
│   │   │   │   │       │   │   └── test.js
│   │   │   │   │       │   ├── isarray
│   │   │   │   │       │   │   ├── build
│   │   │   │   │       │   │   │   └── build.js
│   │   │   │   │       │   │   ├── component.json
│   │   │   │   │       │   │   ├── index.js
│   │   │   │   │       │   │   ├── package.json
│   │   │   │   │       │   │   └── README.md
│   │   │   │   │       │   └── string_decoder
│   │   │   │   │       │       ├── index.js
│   │   │   │   │       │       ├── LICENSE
│   │   │   │   │       │       ├── package.json
│   │   │   │   │       │       └── README.md
│   │   │   │   │       ├── package.json
│   │   │   │   │       ├── passthrough.js
│   │   │   │   │       ├── readable.js
│   │   │   │   │       ├── README.md
│   │   │   │   │       ├── transform.js
│   │   │   │   │       └── writable.js
│   │   │   │   ├── package.json
│   │   │   │   └── Readme.md
│   │   │   ├── mpath
│   │   │   │   ├── History.md
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   └── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       └── index.js
│   │   │   ├── mpromise
│   │   │   │   ├── History.md
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   └── promise.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       ├── promise.domain.test.js
│   │   │   │       ├── promise.test.js
│   │   │   │       └── promises.Aplus.js
│   │   │   ├── mquery
│   │   │   │   ├── History.md
│   │   │   │   ├── lib
│   │   │   │   │   ├── collection
│   │   │   │   │   │   ├── collection.js
│   │   │   │   │   │   ├── index.js
│   │   │   │   │   │   └── node.js
│   │   │   │   │   ├── env.js
│   │   │   │   │   ├── mquery.js
│   │   │   │   │   ├── permissions.js
│   │   │   │   │   └── utils.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── node_modules
│   │   │   │   │   └── debug
│   │   │   │   │       ├── debug.js
│   │   │   │   │       ├── index.js
│   │   │   │   │       ├── lib
│   │   │   │   │       │   └── debug.js
│   │   │   │   │       ├── package.json
│   │   │   │   │       └── Readme.md
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       ├── collection
│   │   │   │       │   ├── browser.js
│   │   │   │       │   ├── mongo.js
│   │   │   │       │   └── node.js
│   │   │   │       ├── env.js
│   │   │   │       ├── index.js
│   │   │   │       ├── utils.js
│   │   │   │       └── utils.test.js
│   │   │   ├── ms
│   │   │   │   ├── Makefile
│   │   │   │   ├── ms.js
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       ├── index.html
│   │   │   │       ├── support
│   │   │   │       │   └── jquery.js
│   │   │   │       └── test.js
│   │   │   ├── muri
│   │   │   │   ├── History.md
│   │   │   │   ├── index.js
│   │   │   │   ├── lib
│   │   │   │   │   └── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       └── index.js
│   │   │   ├── regexp-clone
│   │   │   │   ├── History.md
│   │   │   │   ├── index.js
│   │   │   │   ├── LICENSE
│   │   │   │   ├── Makefile
│   │   │   │   ├── package.json
│   │   │   │   ├── README.md
│   │   │   │   └── test
│   │   │   │       └── index.js
│   │   │   └── sliced
│   │   │       ├── bench.js
│   │   │       ├── component.json
│   │   │       ├── History.md
│   │   │       ├── index.js
│   │   │       ├── lib
│   │   │       │   └── sliced.js
│   │   │       ├── LICENSE
│   │   │       ├── Makefile
│   │   │       ├── package.json
│   │   │       ├── README.md
│   │   │       └── test
│   │   │           └── index.js
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── release-items.md
│   │   ├── static.js
│   │   └── website.js
│   └── underscore
│       ├── LICENSE
│       ├── package.json
│       ├── README.md
│       ├── underscore.js
│       └── underscore-min.js
├── npm-debug.log
├── package.json
├── public
│   ├── bootstrap
│   │   ├── bower.json
│   │   ├── dist
│   │   │   ├── css
│   │   │   │   ├── bootstrap.css
│   │   │   │   ├── bootstrap.css.map
│   │   │   │   ├── bootstrap.min.css
│   │   │   │   ├── bootstrap-theme.css
│   │   │   │   ├── bootstrap-theme.css.map
│   │   │   │   └── bootstrap-theme.min.css
│   │   │   ├── fonts
│   │   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   │   └── glyphicons-halflings-regular.woff
│   │   │   └── js
│   │   │       ├── bootstrap.js
│   │   │       ├── bootstrap.min.js
│   │   │       └── npm.js
│   │   ├── fonts
│   │   │   ├── glyphicons-halflings-regular.eot
│   │   │   ├── glyphicons-halflings-regular.svg
│   │   │   ├── glyphicons-halflings-regular.ttf
│   │   │   └── glyphicons-halflings-regular.woff
│   │   ├── grunt
│   │   │   ├── bs-commonjs-generator.js
│   │   │   ├── bs-lessdoc-parser.js
│   │   │   ├── bs-raw-files-generator.js
│   │   │   ├── configBridge.json
│   │   │   └── sauce_browsers.yml
│   │   ├── Gruntfile.js
│   │   ├── js
│   │   │   ├── affix.js
│   │   │   ├── alert.js
│   │   │   ├── button.js
│   │   │   ├── carousel.js
│   │   │   ├── collapse.js
│   │   │   ├── dropdown.js
│   │   │   ├── modal.js
│   │   │   ├── popover.js
│   │   │   ├── scrollspy.js
│   │   │   ├── tab.js
│   │   │   ├── tooltip.js
│   │   │   └── transition.js
│   │   ├── less
│   │   │   ├── alerts.less
│   │   │   ├── badges.less
│   │   │   ├── bootstrap.less
│   │   │   ├── breadcrumbs.less
│   │   │   ├── button-groups.less
│   │   │   ├── buttons.less
│   │   │   ├── carousel.less
│   │   │   ├── close.less
│   │   │   ├── code.less
│   │   │   ├── component-animations.less
│   │   │   ├── dropdowns.less
│   │   │   ├── forms.less
│   │   │   ├── glyphicons.less
│   │   │   ├── grid.less
│   │   │   ├── input-groups.less
│   │   │   ├── jumbotron.less
│   │   │   ├── labels.less
│   │   │   ├── list-group.less
│   │   │   ├── media.less
│   │   │   ├── mixins
│   │   │   │   ├── alerts.less
│   │   │   │   ├── background-variant.less
│   │   │   │   ├── border-radius.less
│   │   │   │   ├── buttons.less
│   │   │   │   ├── center-block.less
│   │   │   │   ├── clearfix.less
│   │   │   │   ├── forms.less
│   │   │   │   ├── gradients.less
│   │   │   │   ├── grid.less
│   │   │   │   ├── grid-framework.less
│   │   │   │   ├── hide-text.less
│   │   │   │   ├── image.less
│   │   │   │   ├── labels.less
│   │   │   │   ├── list-group.less
│   │   │   │   ├── nav-divider.less
│   │   │   │   ├── nav-vertical-align.less
│   │   │   │   ├── opacity.less
│   │   │   │   ├── pagination.less
│   │   │   │   ├── panels.less
│   │   │   │   ├── progress-bar.less
│   │   │   │   ├── reset-filter.less
│   │   │   │   ├── resize.less
│   │   │   │   ├── responsive-visibility.less
│   │   │   │   ├── size.less
│   │   │   │   ├── tab-focus.less
│   │   │   │   ├── table-row.less
│   │   │   │   ├── text-emphasis.less
│   │   │   │   ├── text-overflow.less
│   │   │   │   └── vendor-prefixes.less
│   │   │   ├── mixins.less
│   │   │   ├── modals.less
│   │   │   ├── navbar.less
│   │   │   ├── navs.less
│   │   │   ├── normalize.less
│   │   │   ├── pager.less
│   │   │   ├── pagination.less
│   │   │   ├── panels.less
│   │   │   ├── popovers.less
│   │   │   ├── print.less
│   │   │   ├── progress-bars.less
│   │   │   ├── responsive-embed.less
│   │   │   ├── responsive-utilities.less
│   │   │   ├── scaffolding.less
│   │   │   ├── tables.less
│   │   │   ├── theme.less
│   │   │   ├── thumbnails.less
│   │   │   ├── tooltip.less
│   │   │   ├── type.less
│   │   │   ├── utilities.less
│   │   │   ├── variables.less
│   │   │   └── wells.less
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── images
│   ├── javascripts
│   ├── jquery
│   │   ├── bower.json
│   │   ├── dist
│   │   │   ├── jquery.js
│   │   │   ├── jquery.min.js
│   │   │   └── jquery.min.map
│   │   ├── MIT-LICENSE.txt
│   │   └── src
│   │       ├── ajax
│   │       │   ├── jsonp.js
│   │       │   ├── load.js
│   │       │   ├── parseJSON.js
│   │       │   ├── parseXML.js
│   │       │   ├── script.js
│   │       │   ├── var
│   │       │   │   ├── nonce.js
│   │       │   │   └── rquery.js
│   │       │   └── xhr.js
│   │       ├── ajax.js
│   │       ├── attributes
│   │       │   ├── attr.js
│   │       │   ├── classes.js
│   │       │   ├── prop.js
│   │       │   ├── support.js
│   │       │   └── val.js
│   │       ├── attributes.js
│   │       ├── callbacks.js
│   │       ├── core
│   │       │   ├── access.js
│   │       │   ├── init.js
│   │       │   ├── parseHTML.js
│   │       │   ├── ready.js
│   │       │   └── var
│   │       │       └── rsingleTag.js
│   │       ├── core.js
│   │       ├── css
│   │       │   ├── addGetHookIf.js
│   │       │   ├── curCSS.js
│   │       │   ├── defaultDisplay.js
│   │       │   ├── hiddenVisibleSelectors.js
│   │       │   ├── support.js
│   │       │   ├── swap.js
│   │       │   └── var
│   │       │       ├── cssExpand.js
│   │       │       ├── getStyles.js
│   │       │       ├── isHidden.js
│   │       │       ├── rmargin.js
│   │       │       └── rnumnonpx.js
│   │       ├── css.js
│   │       ├── data
│   │       │   ├── accepts.js
│   │       │   ├── Data.js
│   │       │   └── var
│   │       │       ├── data_priv.js
│   │       │       └── data_user.js
│   │       ├── data.js
│   │       ├── deferred.js
│   │       ├── deprecated.js
│   │       ├── dimensions.js
│   │       ├── effects
│   │       │   ├── animatedSelector.js
│   │       │   └── Tween.js
│   │       ├── effects.js
│   │       ├── event
│   │       │   ├── ajax.js
│   │       │   ├── alias.js
│   │       │   └── support.js
│   │       ├── event.js
│   │       ├── exports
│   │       │   ├── amd.js
│   │       │   └── global.js
│   │       ├── intro.js
│   │       ├── jquery.js
│   │       ├── manipulation
│   │       │   ├── _evalUrl.js
│   │       │   ├── support.js
│   │       │   └── var
│   │       │       └── rcheckableType.js
│   │       ├── manipulation.js
│   │       ├── offset.js
│   │       ├── outro.js
│   │       ├── queue
│   │       │   └── delay.js
│   │       ├── queue.js
│   │       ├── selector.js
│   │       ├── selector-native.js
│   │       ├── selector-sizzle.js
│   │       ├── serialize.js
│   │       ├── sizzle
│   │       │   └── dist
│   │       │       ├── sizzle.js
│   │       │       ├── sizzle.min.js
│   │       │       └── sizzle.min.map
│   │       ├── traversing
│   │       │   ├── findFilter.js
│   │       │   └── var
│   │       │       └── rneedsContext.js
│   │       ├── traversing.js
│   │       ├── var
│   │       │   ├── arr.js
│   │       │   ├── class2type.js
│   │       │   ├── concat.js
│   │       │   ├── hasOwn.js
│   │       │   ├── indexOf.js
│   │       │   ├── pnum.js
│   │       │   ├── push.js
│   │       │   ├── rnotwhite.js
│   │       │   ├── slice.js
│   │       │   ├── strundefined.js
│   │       │   ├── support.js
│   │       │   └── toString.js
│   │       └── wrap.js
│   └── stylesheets
│       └── style.css
├── routes
│   └── index.js
└── views
    ├── admin
    │   └── adminBooks.jade
    ├── common
    │   ├── header.jade
    │   └── links.jade
    ├── layout.jade
    └── pages
        ├── add.jade
        ├── detail.jade
        └── index.jade

140 directories, 588 files

```
#####预览
 1. git clone https://github.com/CooLNuanfeng/bookTest-jade.git
 2. cd bookTest-jade
 3. npm install
 4. node app.js
