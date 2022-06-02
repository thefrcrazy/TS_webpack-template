fx_version 'cerulean';

games { 'gta5' };

author 'Azylium & TheFRcRaZy';

server_script 'dist/sv_exports.lua';
client_script '@PolyZone/dependency/client.lua';
client_script 'dist/cl_exports.lua';

shared_script 'dist/shared/*.shared.js';
client_script 'dist/client/*.client.js';
server_script 'dist/server/*.server.js';

ui_page 'UI/index.html';
ui_page_preload 'yes';

files {
  'UI/**/**/*.*',
  'assets/**/**/**/*.*',
}

-- con_miniconChannels script:azyPhone2