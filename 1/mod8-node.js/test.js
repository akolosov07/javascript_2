/*
1. Находясь в папке mod8-node выполните команду node test.js и убедитесь, что код из test.js срабатывает
2. Установите пакет date-fns (npm install date-fns --save)
3. Посмотрите установленные пакеты в текущей папке командой node list
4. В файле test.js импортируйте библиотеку import { compareAsc, format } from 'date-fns'
5. Выведите форматированную дату format(new Date(2014, 1, 11), 'yyyy-MM-dd')
6*. Подключите локализацию
*/

import {compareAsc, format} from 'date-fns'
import { ru } from 'date-fns/locale/index.js'

const dt1 = format(new Date(2014, 1, 11), 'dd-MMMM-yyyy', { locale: ru })

console.log('Hello, Node.js!')
console.log(dt1)