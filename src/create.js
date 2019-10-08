/* eslint-disable */
'use strict';

// Генератор файлов блока

// Использование: node create.js [имя блока] [*имя папки]

const fs = require('fs');
const mkdirp = require('mkdirp');

const blockName = process.argv[2];
const defaultExtensions = ['scss', 'js']; // расширения по умолчанию
const extensions = uniqueArray(defaultExtensions);

if (blockName) {
    const blockNameCamel = camelize(blockName);
    const parentDir = process.argv[3] ? process.argv[3] + '/' : ''; 
    const dirPath = `${parentDir}${blockName}/`; // полный путь к создаваемой папке блока
    mkdirp(dirPath, (err) => {
        if (err) {
            console.error(`[NTH] Отмена операции: ${err}`);
        }

        else {
            console.log(`[NTH] Создание папки: ${dirPath} (если отсутствует)`);

            // Обходим массив расширений и создаем файлы, если они еще не созданы
            extensions.forEach((extension) => {
                const filePath = `${dirPath + blockName}.${extension}`; // полный путь к создаваемому файлу
                let fileContent = '';                                   // будущий контент файла
                let fileCreateMsg = '';                                 // будущее сообщение в консоли при создании файла

                if (extension === 'scss') {
                    fileContent = `// В этом файле должны быть стили для БЭМ-блока ${blockName},
                        //его элементов,
                        // модификаторов, псевдоселекторов, псевдоэлементов,
                        //@media-условий...
                        //Очередность: http://nicothin.github.io/idiomatic-pre-CSS/#priority
                        
                        @import './../../variables.scss';

                        .${blockName} {                        
                        $block-name:                &; 
                        // #{$block-name}__element\n}\n`;
                }

                else if (extension === 'js') {
                    fileContent = `import React, { Component } from 'react';                                     
                    import './${blockName}.scss';

                    class ${blockNameCamel} extends Component {
                        constructor(props) {
                            super(props);
                        }
                    
                        render() {
                            return <div>${blockNameCamel}</div>
                        }
                    }
                        export default ${blockNameCamel};`;
                }


                if (!fileExist(filePath)) {
                    fs.writeFile(filePath, fileContent, (err) => {
                        if (err) {
                            return console.log(`[NTH] Файл НЕ создан: ${err}`);
                        }
                        console.log(`[NTH] Файл создан: ${filePath}`);
                        if (fileCreateMsg) {
                            console.warn(fileCreateMsg);
                        }
                    });
                }
            });

        }
    });
} else {
    console.log('[NTH] Отмена операции: не указан блок');
}



function uniqueArray(arr) {
    const objectTemp = {};
    for (let i = 0; i < arr.length; i++) {
        const str = arr[i];
        objectTemp[str] = true;
    }
    return Object.keys(objectTemp);
}

function fileExist(path) {
    const fs = require('fs');
    try {
        fs.statSync(path);
    } catch (err) {
        return !(err && err.code === 'ENOENT');
    }
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) {
      return word.toUpperCase();
    }).replace(/[\s,_,-]+/g, '');
  }