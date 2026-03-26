import { useState, useEffect } from "react";

const PRODUCT_IMAGES = {};


const PRODUCT_SPECS = {
  "Datecs DP-150": [["Принтиращ механизъм","Термодиректен EPSON M-T173 H"],["Ширина на печата","57 мм"],["Скорост на печата","90 мм/сек"],["Артикули","До 2 500"],["Департаменти","9"],["Оператори","До 8 на смяна"],["Фискална памет","1 825 отчета"],["КЛЕН","SD карта до 32GB"],["Интерфейси","RS-232C (2 бр.), USB"],["Връзка с НАП","Вграден модем"],["Захранване","AC 100-240V, DC 9V/5A"],["Размери (Ш×Д×В)","160 × 226 × 97 мм"],["Тегло","700 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs DP-150 MX": [["Принтиращ механизъм","Термодиректен EPSON M-T173 H"],["Ширина на печата","57 мм"],["Скорост на печата","12 реда/сек"],["Артикули","До 100 000"],["Департаменти","До 99"],["Оператори","До 30"],["Фискална памет","3 650 отчета"],["КЛЕН","SD карта до 32GB"],["Интерфейси","RS-232C (2 бр.), USB"],["Връзка с НАП","Вграден модем 3G"],["Захранване","AC 100-240V, DC 9V/5A"],["Размери (Ш×Д×В)","160 × 226 × 97 мм"],["Тегло","700 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs DP-25 MX": [["Принтиращ механизъм","Термодиректен LPT01-245-11"],["Ширина на печата","57 мм"],["Скорост на печата","12 реда/сек"],["Артикули","До 100 000"],["Департаменти","До 99"],["Оператори","До 30"],["Фискална памет","3 650 отчета"],["КЛЕН","SD карта до 32GB"],["Интерфейси","RS-232C (2 бр.), USB, LAN"],["Връзка с НАП","Вграден модем 3G/4G"],["Захранване","AC 100-240V, DC 9V/5A"],["Размери (Ш×Д×В)","243 × 104 × 168 мм"],["Тегло","800 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs BlueCash-500": [["Операционна система","Android 11"],["Процесор","MT8766V"],["Памет","16 GB Flash / 2 GB RAM"],["Дисплей","10″ multi-touch 800×1280 px"],["Принтер","3″ термо-директен, автоматичен нож"],["Скорост на печата","12 реда/сек, 72 мм"],["Фискална памет","3 650 отчета"],["WiFi","IEEE 802.11 a/b/g/n/ac"],["Bluetooth","BT 5.0"],["Интерфейси","USB-C, 4×USB-A, RJ45, SIM"],["Връзка с НАП","4G LTE"],["Батерия","Li-Ion 7.4V / 2600 mAh"],["Размери (Ш×Д×В)","269 × 249 × 106 мм"],["Тегло","2 000 гр"],["Работна температура","0°C до +40°C"]],
  "Datecs WP-50MX BT": [["Принтиращ механизъм","Термодиректен Seiko LTP01-245-11"],["Скорост на печата","12 реда/сек"],["Символи на ред","42"],["Ширина хартия","57,5 мм, диам. до 65 мм"],["Артикули","До 100 000"],["Департаменти","До 99"],["Оператори","До 30"],["Фискална памет","3 650 отчета"],["Интерфейси","RS-232C, USB, Bluetooth"],["Батерия","Li-Po 7.4V / 2000 mAh"],["Размери (Ш×Д×В)","90 × 202 × 73 мм"],["Тегло","570 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs DP-05B": [["Ширина на печата","57 мм"],["Данъчен терминал","Вграден"],["Фискална памет","1 850 отчета"],["Артикули","2 500 маршрута"],["Департаменти","До 9"],["Оператори","30 (8 на смяна)"],["Свързаност","RS-232C, Bluetooth (опция)"],["Батерия","Li-ION 7.4V / 2000 mAh"],["Захранване","DC 9V/1000mA"],["Размери (Ш×Д×В)","88 × 216 × 66 мм"]],
  "Datecs BlueCash-50 MX (с баркод скенер)": [["Операционна система","Android 10"],["Процесор","4-ядрен ARM Cortex-A53 2.0 GHz"],["Памет","8 GB Flash / 1 GB RAM"],["Дисплей","5.4″ 720×1440 px"],["Баркод скенер","2D Zebra SE4710"],["Принтер","Термодиректен Seiko, 12 реда/сек"],["Фискална памет","3 650 отчета"],["WiFi","IEEE 802.11 a/b/g/n/ac"],["Връзка с НАП","4G LTE"],["Батерия","Li-Ion 7.4V / 2600 mAh"],["Размери (Ш×Д×В)","82 × 206 × 61 мм"],["Тегло","506 гр"],["Работна температура","-10°C до +50°C"]],
  "Datecs BlueCash-50 MX (без баркод скенер)": [["Операционна система","Android 10"],["Процесор","4-ядрен ARM Cortex-A53 2.0 GHz"],["Памет","8 GB Flash / 1 GB RAM"],["Дисплей","5.4″ 720×1440 px"],["Принтер","Термодиректен Seiko, 12 реда/сек"],["Фискална памет","3 650 отчета"],["WiFi","IEEE 802.11 a/b/g/n/ac"],["Връзка с НАП","4G LTE"],["Батерия","Li-Ion 7.4V / 2600 mAh"],["Размери (Ш×Д×В)","82 × 206 × 61 мм"],["Тегло","506 гр"],["Работна температура","-10°C до +50°C"]],
  "Datecs WP-50 MX": [["Принтиращ механизъм","Термодиректен Seiko LTP01-245-11"],["Скорост на печата","12 реда/сек"],["Артикули","До 100 000"],["Департаменти","До 99"],["Фискална памет","3 650 отчета"],["Интерфейси","RS-232C, USB"],["Батерия","Li-Po 7.4V / 2000 mAh"],["Размери (Ш×Д×В)","90 × 202 × 73 мм"],["Тегло","570 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs DP-05L": [["Принтиращ механизъм","Термодиректен Seiko LTP01-245-11"],["Скорост на печата","12 реда/сек"],["Артикули","До 100 000"],["Департаменти","До 99"],["Фискална памет","3 650 отчета"],["Интерфейси","Wi-Fi, USB, Bluetooth"],["Батерия","Li-Ion 7.4V / 2000 mAh"],["Размери (Ш×Д×В)","88 × 196 × 66 мм"],["Тегло","442 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs WP-65 MX 4G": [["Тип","ФУВАС — за вграждане в автомат"],["Данъчен терминал","Вграден"],["Фискална памет","3 650 отчета"],["Артикули","До 120"],["Свързаност","4G, Bluetooth, Micro USB"],["Захранване","DC 9V/3.5A или от автомат 20-42VAC"],["Тегло","422 гр"],["Работна температура","-15°C до +45°C"]],
  "Datecs WP-65 MX 2G": [["Тип","ФУВАС — за вграждане в автомат"],["Данъчен терминал","Вграден"],["Фискална памет","3 650 отчета"],["Артикули","До 120"],["Свързаност","2G, Bluetooth, Micro USB"],["Захранване","DC 9V/3.5A или от автомат 20-42VAC"],["Тегло","422 гр"],["Работна температура","-15°C до +45°C"]],
  "Datecs FP-2000": [["Принтиращ механизъм","Термодиректен CITIZEN ST-S2010"],["Ширина на печата","78 мм"],["Скорост на печата","220 мм/сек"],["Ширина хартия","58 или 80 мм"],["Артикули","До 3 000"],["Департаменти","До 1 200"],["Фискална памет","1 830 отчета"],["Интерфейси","RS-232C, USB, LAN"],["Връзка с НАП","Вграден модем 3G"],["Размери (Ш×Д×В)","147 × 207 × 147 мм"],["Тегло","2 000 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs FP-650": [["Принтиращ механизъм","Термодиректен SANEI SD3-22"],["Ширина на печата","57 мм"],["Скорост на печата","200 мм/сек"],["Артикули","До 3 000"],["Фискална памет","1 830 отчета"],["Интерфейси","RS-232C, USB"],["Връзка с НАП","Вграден модем"],["Размери (Ш×Д×В)","96 × 170 × 103 мм"],["Тегло","570 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs FMP-10": [["Принтиращ механизъм","Термодиректен MLT-289"],["Ширина на печата","57 мм"],["Скорост на печата","12 реда/сек"],["Артикули","До 3 000"],["Фискална памет","1 830 отчета"],["Свързаност","Bluetooth, RS-232C"],["Връзка с НАП","Вграден модем 3G"],["Батерия","Li-Ion 7.4V / 2000 mAh"],["Размери (Ш×Д×В)","116 × 104 × 63 мм"],["Тегло","480 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs FMP-350 X": [["Принтиращ механизъм","Термодиректен FTP-638MCL103"],["Ширина на печата","48-64 символа (57-80 мм)"],["Скорост на печата","До 120 мм/сек"],["Артикули","До 3 000"],["Фискална памет","3 650 отчета"],["Свързаност","RS-232C, USB, Bluetooth"],["Работна температура","0°C до +45°C"]],
  "Datecs FP-700": [["Принтиращ механизъм","Термодиректен SK1-335D"],["Ширина на печата","48-64 символа (58-80 мм)"],["Скорост на печата","До 200 мм/сек"],["Артикули","До 3 000"],["Фискална памет","1 825 отчета"],["Интерфейси","RS-232C, LAN, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs FP-700 MX": [["Принтиращ механизъм","Термодиректен SK1-335D"],["Ширина на печата","78 мм"],["Скорост на печата","200 мм/сек"],["Артикули","До 3 000"],["Фискална памет","3 650 отчета"],["Интерфейси","RS-232C, USB, Ethernet"],["Връзка с НАП","Вграден модем 4G"],["Размери (Ш×Д×В)","152 × 220 × 127 мм"],["Тегло","1 890 гр"],["Работна температура","0°C до +45°C"]],
  "Datecs FP-50 X": [["Тип","Компактен фискален принтер серия X"],["Свързаност","RS-232C, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs FP-950 MX": [["Принтиращ механизъм","Термодиректен, автоматичен нож"],["Ширина на печата","72 мм"],["Скорост на печата","230 мм/сек"],["Артикули","До 3 000"],["Фискална памет","3 650 отчета"],["Интерфейси","RS-232C, LAN, USB"],["Връзка с НАП","Вграден модем 2G/3G/4G"],["Размери (Ш×Д×В)","140 × 179 × 117 мм"],["Работна температура","-10°C до +40°C"]],
  "Datecs DPP-450": [["Тип","Мобилен термопринтер"],["Ширина на печата","80 мм"],["Свързаност","Bluetooth, WiFi, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs LP-50 MX": [["Тип","Етикетиращ принтер"],["Ширина хартия","50 мм"],["Свързаност","USB, Serial"],["Работна температура","0°C до +45°C"]],
  "Datecs EP-50 MX": [["Тип","Мобилен етикетиращ принтер"],["Ширина хартия","50 мм"],["Свързаност","Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs DPP-250": [["Тип","Мобилен термопринтер"],["Свързаност","Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs DPP-350": [["Тип","Мобилен термопринтер"],["Свързаност","Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs SK1-31F": [["Тип","Киоск фискален принтер 3-инчов"],["Свързаност","RS-232C, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs SK1-21F": [["Тип","Киоск фискален принтер 2-инчов"],["Свързаност","RS-232C, USB"],["Работна температура","0°C до +45°C"]],
  "Datecs Термотрансферен принтер Alpha": [["Тип","Термотрансферен принтер"],["Приложение","Производство, логистика, складова дейност"],["Работна температура","0°C до +45°C"]],
  "Eltrade A1": [["Тип","Стационарен / мобилен касов апарат"],["Свързаност","GPRS, Bluetooth, USB"],["Дисплей","2 бр. LCD с подсветка"],["Фискална памет","До 1 500 дневни отчета"],["Наредба","Наредба Н-18 (БИМ свид. 763.01)"],["Работна температура","0°C до +45°C"]],
  "Eltrade A3": [["Тип","Стационарен касов апарат"],["Клавиатура","28 бутона с EasyLoad"],["Свързаност","GPRS, Bluetooth, USB, LAN"],["QR код","Да"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Eltrade B1": [["Тип","Мобилен / стационарен касов апарат"],["Свързаност","GPRS, Bluetooth, USB"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Eltrade B3": [["Тип","Стационарен касов апарат"],["Клавиатура","39 бутона с EasyLoad"],["Свързаност","GPRS, Bluetooth, USB"],["QR код","Да"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Eltrade PRP-250F": [["Тип","Фискален принтер"],["Технология","Термодиректен Drop-in"],["Свързаност","RS-232, USB, LAN, GPRS"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy Compact S 01/03": [["Тип","Мобилен касов апарат"],["Захранване","Батерия"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy Compact M 02/03": [["Тип","Мобилен / стационарен"],["Захранване","Батерия / мрежа"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy eXpert SX/01/03": [["Тип","Мобилен / стационарен"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy Perfect S 01": [["Тип","Мобилен луксозна серия"],["Захранване","Батерия"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy Micro C 01": [["Тип","Ултракомпактен стационарен"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy eXpert 01": [["Тип","Мобилен касов апарат"],["Захранване","Батерия"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy FX1200C": [["Тип","Фискален принтер"],["Печат","Безшумен, автоматичен нож"],["Приложение","Супермаркети, ресторанти, бензиностанции"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy FX1300": [["Принтиращ механизъм","Seiko"],["Скорост на печата","200 мм/сек"],["Интерфейси","GPRS, RS232, USB"],["WiFi","Опция"],["Наредба","Наредба Н-18 (БИМ свид. 805.01)"],["Работна температура","0°C до +45°C"]],
  "Daisy FX1300 Wi-Fi": [["Тип","Мрежов фискален принтер"],["Свързаност","Wi-Fi (hotspot или client)"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Daisy FX21-01": [["Тип","Мобилен фискален принтер"],["Батерия","LiIon"],["Свързаност","Bluetooth, WiFi, GPRS"],["Наредба","Наредба Н-18"],["Работна температура","0°C до +45°C"]],
  "Tremol S25": [["Принтер","Термодиректен 8 dots/мм"],["Скорост на печата","До 75 мм/сек"],["Артикули","До 65 000"],["Департаменти","До 40"],["Фискална памет","2 000 записа"],["Батерия","Li-Pol 7.4V / 2200 mAh"],["Свързаност","GPRS, WiFi (опция), Bluetooth, USB"],["Размери","90 × 200 × 65 мм"]],
  "Tremol S21": [["Тип","Касов апарат"],["Свързаност","GPRS, Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Tremol A19 Plus": [["Тип","Касов апарат"],["Свързаност","GPRS, Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Tremol M20": [["Тип","Касов апарат"],["Свързаност","GPRS, Bluetooth, USB"],["Работна температура","0°C до +45°C"]],
  "Tremol M23": [["Тип","Касов апарат висок клас"],["Свързаност","GPRS, Bluetooth, USB, LAN"],["Работна температура","0°C до +45°C"]],
  "Tremol FP24": [["Тип","Фискален принтер"],["Свързаност","RS-232, USB"],["Работна температура","0°C до +45°C"]],
  "Tremol FP01": [["Тип","Фискален принтер"],["Свързаност","RS-232, USB, LAN"],["Работна температура","0°C до +45°C"]],
  "Tremol FP15": [["Тип","Фискален принтер висок клас"],["Свързаност","RS-232, USB, LAN, WiFi"],["Работна температура","0°C до +45°C"]],
  "Tremol FP21": [["Тип","Фискален принтер"],["Свързаност","RS-232, USB, LAN"],["Работна температура","0°C до +45°C"]],
};

const products = [
  // ─── DATECS — КАСОВИ АПАРАТИ ────────────────────────────────────────────────
  { brand: "Datecs", type: "Касови апарати", name: "Datecs DP-150", category: "Настолен мини", description: "Компактен настолен касов апарат с 57 мм термодиректен печат и скорост до 90 мм/сек. Надежден и практичен за малки и средни търговски обекти." },
  { brand: "Datecs", type: "Касови апарати", name: "Datecs DP-150 MX", category: "Настолен / MX серия", description: "Настолен модел от серията MX с термодиректен печат, 57 мм. Подобрена свързаност и по-голям капацитет на артикули спрямо стандартните модели." },
  { brand: "Datecs", type: "Касови апарати", name: "Datecs DP-25 MX", category: "Настолен висок клас", description: "Висок клас настолен касов апарат с вграден 3G модем. Работа с до 99 департамента и до 100 000 артикула — за натоварени търговски обекти." },
  { brand: "Datecs", type: "Касови апарати", name: "Datecs BlueCash-500", category: "Android POS", description: "Мултифункционален Android 11 POS с 10-инчов multi-touch дисплей и вграден 3-инчов фискален принтер с автоматичен нож. За магазини и ресторанти." },
  // ─── DATECS — МОБИЛНИ КАСОВИ АПАРАТИ ────────────────────────────────────────
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs WP-50MX BT", category: "Мобилен / Bluetooth", description: "Мобилен касов апарат с Bluetooth, до 100 000 артикула и до 99 щанда. Подходящ за мобилна търговия, доставки и работа извън обект." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs DP-05B", category: "Мобилен компактен", description: "57 мм печат, вграден данъчен терминал и фискална памет за 1850 отчета. Практичен компактен избор за сервизни и мобилни дейности." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs BlueCash-50 MX (с баркод скенер)", category: "Android мобилен", description: "Android 10, 5.4″ дисплей, вграден 1D/2D баркод скенер и безконтактни плащания. Универсален мобилен POS за динамична търговия на терен." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs BlueCash-50 MX (без баркод скенер)", category: "Android мобилен", description: "Android 10, 5.4″ дисплей и безконтактни плащания. По-достъпна версия за мобилни продажби без нужда от вграден баркод четец." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs WP-50 MX", category: "Мобилен / MX серия", description: "До 100 000 артикула с баланс между компактност и богата функционалност. Добро решение за търговци на терен." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs DP-05L", category: "Мобилен / QR", description: "До 100 000 артикула, QR кодове и до 99 щанда. Подходящ за куриери, разносна търговия и мобилни услуги." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs WP-65 MX 4G", category: "ФУВАС / 4G", description: "Фискално устройство за вграждане в автомат на самообслужване. Вграден данъчен терминал и 4G свързаност за вендинг решения." },
  { brand: "Datecs", type: "Мобилни касови апарати", name: "Datecs WP-65 MX 2G", category: "ФУВАС / 2G", description: "Фискално устройство за вграждане в автомат с 2G свързаност и памет за до 3650 отчета. По-достъпна алтернатива за вендинг." },
  // ─── DATECS — ФИСКАЛНИ ПРИНТЕРИ ─────────────────────────────────────────────
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-2000", category: "Фискален принтер", description: "Високоскоростен, безшумен фискален принтер с надежден механизъм Citizen. Един от най-предпочитаните модели за натоварени обекти в България." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-650", category: "Компактен принтер", description: "Компактен фискален принтер с пълна функционалност на серията Datecs. Спестява място и разходи — подходящ за малки обекти." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FMP-10", category: "Мобилен BT принтер", description: "Мобилен фискален принтер с Bluetooth към smart устройства. За логистика, куриерски услуги, разносна търговия и доставки." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FMP-350 X", category: "Мобилен мулти-OS", description: "Мобилен фискален принтер с BT модул за Android, iOS и Windows. За склад, логистика, дистрибуция и интернет търговия." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs SK1-31F", category: "Киоск / 3-инчов", description: "Триинчов фискален принтер за вграждане в киоск и автоматизирани решения. Компактен с лесна интеграция в корпус или терминал." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs SK1-21F", category: "Киоск / 2-инчов", description: "Двуинчов фискален принтер за вграждане с опция за презентер. За киоск решения и устройства на самообслужване." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-700", category: "Висок клас", description: "Висок клас фискален принтер с висока скорост на печат и съвместимост с протокола на FP-2000. За обекти с нарастващо натоварване." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-700 MX", category: "Висок клас / 4G", description: "Висок клас фискален принтер с вграден 4G модем. Без нужда от отделен модем — директна онлайн връзка с НАП." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-50 X", category: "Компактен серия X", description: "Компактен фискален принтер от серията X с модерна свързаност. Надеждно решение в по-малък форм-фактор." },
  { brand: "Datecs", type: "Фискални принтери", name: "Datecs FP-950 MX", category: "3-инчов за натоварени", description: "Бърз 3-инчов термопринтер за супермаркети, бензиностанции и обекти с много интензивна работа." },
  // ─── DATECS — ТЕРМОПРИНТЕРИ ──────────────────────────────────────────────────
  { brand: "Datecs", type: "Термопринтери", name: "Datecs DPP-250", category: "Мобилен термопринтер", description: "Компактен мобилен термопринтер за разнообразни приложения — куриерски услуги, логистика и мобилна печатна дейност." },
  { brand: "Datecs", type: "Термопринтери", name: "Datecs DPP-350", category: "Мобилен термопринтер", description: "Мобилен термопринтер с разширени комуникационни опции. Надежден избор за полева работа и мобилни бизнес процеси." },
  { brand: "Datecs", type: "Термопринтери", name: "Datecs DPP-450", category: "Мобилен принтер", description: "Мобилен принтер DPP-450 с висококачествен печат за динамична работна среда — логистика, склад и дистрибуция." },
  { brand: "Datecs", type: "Термопринтери", name: "Datecs LP-50 MX", category: "Етикетиращ принтер", description: "Компактен етикетиращ принтер LP-50 MX за печат на баркод етикети. Подходящ за складове, магазини и производствени обекти." },
  { brand: "Datecs", type: "Термопринтери", name: "Datecs EP-50 MX", category: "Етикетиращ принтер", description: "EP-50 MX — мобилен etикетиращ принтер с компактен дизайн за печат на баркод и ценови етикети." },
  { brand: "Datecs", type: "Термопринтери", name: "Datecs Термотрансферен принтер Alpha", category: "Термотрансферен принтер", description: "Термотрансферен принтер Alpha за качествен печат на трайни етикети. Подходящ за производство, логистика и складова дейност." },
  // ─── ELTRADE — КАСОВИ АПАРАТИ ────────────────────────────────────────────────
  { brand: "Eltrade", type: "Касови апарати", name: "Eltrade A1", category: "Стационарен / мобилен", description: "Касов апарат с модерна технология, Bluetooth и GPRS. Подходящ за разносна търговия, куриерска дейност и малки магазини." },
  { brand: "Eltrade", type: "Касови апарати", name: "Eltrade A3", category: "Стационарен висок клас", description: "Стационарен касов апарат с два LCD дисплея, 28-бутонна клавиатура, EasyLoad и вграден GPRS. За натоварени търговски обекти." },
  { brand: "Eltrade", type: "Касови апарати", name: "Eltrade B1", category: "Мобилен / стационарен", description: "Висококоростен печат, GPRS и Bluetooth. Предлага се в мобилен и стационарен вариант — за магазини, заведения и сервиз." },
  { brand: "Eltrade", type: "Касови апарати", name: "Eltrade B3", category: "Стационарен", description: "Стационарен апарат с 39-бутонна клавиатура, EasyLoad и печат на QR кодове и лога на артикули." },
  // ─── ELTRADE — ФИСКАЛНИ ПРИНТЕРИ ────────────────────────────────────────────
  { brand: "Eltrade", type: "Фискални принтери", name: "Eltrade PRP-250F", category: "Фискален принтер", description: "Компактен фискален принтер с Drop-in технология. Висока скорост на термопечат за натоварени търговски обекти." },
  // ─── DAISY — КАСОВИ АПАРАТИ ──────────────────────────────────────────────────
  { brand: "Daisy", type: "Касови апарати", name: "Daisy Compact S 01/03", category: "Мобилен компактен", description: "Най-малкият мобилен касов апарат от Daisy. Изцяло на батерия, компактен дизайн и ниска цена — за малки търговски обекти и павилиони." },
  { brand: "Daisy", type: "Касови апарати", name: "Daisy Compact M 02/03", category: "Мобилен / стационарен", description: "Универсален касов апарат Compact M — предлага се в мобилен и стационарен вариант. Съобразен с изискванията на Наредба Н-18." },
  { brand: "Daisy", type: "Касови апарати", name: "Daisy eXpert SX/01/03", category: "Мобилен / стационарен", description: "Функционален касов апарат eXpert SX с богати възможности — предлага се в мобилен и стационарен вариант. Подходящ за магазини и заведения." },
  { brand: "Daisy", type: "Касови апарати", name: "Daisy Perfect S 01", category: "Мобилен луксозен", description: "Луксозна серия Perfect S — мобилен касов апарат с елегантен дизайн и разширени функционалности за взискателни търговци." },
  { brand: "Daisy", type: "Касови апарати", name: "Daisy Micro C 01", category: "Стационарен компактен", description: "Ултракомпактен стационарен касов апарат Daisy Micro C 01. Малки габарити при пълна функционалност — за ограничено работно пространство." },
  { brand: "Daisy", type: "Касови апарати", name: "Daisy eXpert 01", category: "Мобилен", description: "Мобилен касов апарат Daisy eXpert 01 — проверено решение за динамична търговска среда и работа извън обект." },
  // ─── DAISY — ФИСКАЛНИ ПРИНТЕРИ ───────────────────────────────────────────────
  { brand: "Daisy", type: "Фискални принтери", name: "Daisy FX1200C", category: "Фискален принтер", description: "Фискален принтер Daisy FX1200C с изключително висока скорост на печат, безшумен, автоматичен нож. За супермаркети, ресторанти и бензиностанции." },
  { brand: "Daisy", type: "Фискални принтери", name: "Daisy FX1300", category: "Висок клас фискален принтер", description: "Висок клас фискален принтер Daisy FX1300 с механизъм Seiko, 200 мм/сек. безшумен печат. GPRS, WiFi, USB, RS232 — за хотели, ресторанти и магазини." },
  { brand: "Daisy", type: "Фискални принтери", name: "Daisy FX1300 Wi-Fi", category: "Мрежов фискален принтер", description: "Мрежов фискален принтер Daisy FX1300 с Wi-Fi комуникация. Може да работи като hotspot или да се свързва към съществуваща Wi-Fi мрежа." },
  { brand: "Daisy", type: "Фискални принтери", name: "Daisy FX21-01", category: "Мобилен фискален принтер", description: "Компактен мобилен фискален принтер с вграден данъчен терминал, LiIon батерия, Bluetooth и WiFi. За куриери, доставки и мобилни дейности." },
  // ─── TREMOL — КАСОВИ АПАРАТИ ────────────────────────────────────────────────
  { brand: "Tremol", type: "Касови апарати", name: "Tremol S25", category: "Касов апарат", description: "Компактен и надежден касов апарат Tremol S25. Модерен дизайн и пълно съответствие с изискванията на НАП — добро решение за малки обекти." },
  { brand: "Tremol", type: "Касови апарати", name: "Tremol S21", category: "Касов апарат", description: "Tremol S21 — функционален касов апарат с лесна работа и надеждна свързаност с НАП. Подходящ за разнообразни типове търговски обекти." },
  { brand: "Tremol", type: "Касови апарати", name: "Tremol A19 Plus", category: "Касов апарат", description: "Tremol A19 Plus — касов апарат с разширени функционалности и удобна работа. За магазини, заведения и сервизни обекти." },
  { brand: "Tremol", type: "Касови апарати", name: "Tremol M20", category: "Касов апарат", description: "Tremol M20 — надежден касов апарат с модерна платформа и GPRS свързаност. Балансиран избор за средни по натоварване обекти." },
  { brand: "Tremol", type: "Касови апарати", name: "Tremol M23", category: "Касов апарат", description: "Tremol M23 — висок клас касов апарат с разширени функции. Подходящ за по-натоварени търговски обекти с нужда от детайлна отчетност." },
  // ─── TREMOL — ФИСКАЛНИ ПРИНТЕРИ ─────────────────────────────────────────────
  { brand: "Tremol", type: "Фискални принтери", name: "Tremol FP24", category: "Фискален принтер", description: "Tremol FP24 — достъпен фискален принтер с надеждна работа и лесна интеграция. Подходящ за обекти с умерено натоварване." },
  { brand: "Tremol", type: "Фискални принтери", name: "Tremol FP01", category: "Фискален принтер", description: "Tremol FP01 — фискален принтер с висока скорост на печат и богат комуникационен интерфейс. За магазини и търговски обекти." },
  { brand: "Tremol", type: "Фискални принтери", name: "Tremol FP15", category: "Висок клас фискален принтер", description: "Tremol FP15 — висок клас фискален принтер с бърз и безшумен печат. За натоварени обекти с изисквания за висока производителност." },
  { brand: "Tremol", type: "Фискални принтери", name: "Tremol FP21", category: "Фискален принтер", description: "Tremol FP21 — надежден фискален принтер с пълни функционалности и лесна интеграция с търговски софтуер." },
];

const brands = ["Всички", "Datecs", "Eltrade", "Daisy", "Tremol"];
const categories = ["Всички", "Касови апарати", "Мобилни касови апарати", "Фискални принтери", "Термопринтери"];
const marqueeItems = ["Datecs", "Eltrade", "Daisy", "Tremol", "Касови апарати", "Фискални принтери", "Мобилни решения", "Официален дистрибутор"];
const faqItems = [
  { question: "Как да избера подходящ касов апарат?", answer: "Изборът зависи от типа обект, натоварването и нуждата от мобилност. Помагаме с консултация и избор на правилното устройство." },
  { question: "Предлагате ли мобилни касови апарати?", answer: "Да — предлагаме мобилни модели за доставки, сервизни дейности и търговия на терен с Bluetooth и 4G свързаност." },
  { question: "Работите ли с Datecs, Eltrade, Daisy и Tremol?", answer: "Да, Изодимпекс ЕООД е официален дистрибутор на всички четири водещи марки." },
  { question: "Мога ли да изпратя запитване за оферта?", answer: "Да — чрез формата изпратете запитване и ще се свържем с вас до 24 часа в работни дни." },
];

const STYLES = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  a { color: inherit; text-decoration: none; }
  :root {
    --amber: #F59E0B; --amber-dim: #92600A; --amber-glow: rgba(245,158,11,0.15);
    --bg: #080C10; --bg2: #0D1117; --bg3: #131B24;
    --border: rgba(255,255,255,0.07); --border-amber: rgba(245,158,11,0.25);
    --text: #E8EDF2; --muted: #5A7080; --muted2: #8A9BA8;
  }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--amber-dim); }
  .grid-bg { position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(rgba(245,158,11,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.03) 1px, transparent 1px); background-size: 60px 60px; }
  .container { max-width: 1240px; margin: 0 auto; padding: 0 28px; position: relative; z-index: 1; }
  .nav { position: sticky; top: 0; z-index: 100; background: rgba(8,12,16,0.95); backdrop-filter: blur(16px); border-bottom: 1px solid var(--border); }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 60px; gap: 24px; }
  .nav-logo { display: flex; flex-direction: column; gap: 1px; cursor: pointer; }
  .nav-logo-main { font-size: 15px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); }
  .nav-logo-sub { font-size: 9px; letter-spacing: 0.2em; color: var(--amber); text-transform: uppercase; }
  .nav-links { display: flex; gap: 32px; }
  .nav-link { font-size: 13px; color: var(--muted2); letter-spacing: 0.04em; transition: color 0.2s; cursor: pointer; background: none; border: none; font-family: inherit; }
  .nav-link:hover { color: var(--text); }
  .nav-link.active { color: var(--amber); }
  .nav-cta { background: var(--amber); color: #000; font-size: 13px; font-weight: 700; padding: 9px 22px; border: none; cursor: pointer; transition: all 0.2s; clip-path: polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%); font-family: inherit; }
  .nav-cta:hover { background: #FBBF24; }
  .page { animation: fadeIn 0.25s ease; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .btn-amber { display: inline-flex; align-items: center; gap: 10px; background: var(--amber); color: #000; font-weight: 800; font-size: 14px; padding: 15px 32px; border: none; cursor: pointer; letter-spacing: 0.04em; transition: all 0.2s; clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%); font-family: inherit; }
  .btn-amber:hover { background: #FBBF24; transform: translateY(-1px); }
  .btn-outline { display: inline-flex; align-items: center; gap: 10px; background: transparent; color: var(--text); font-weight: 600; font-size: 14px; padding: 14px 28px; border: 1px solid var(--border); cursor: pointer; letter-spacing: 0.04em; transition: all 0.2s; font-family: inherit; }
  .btn-outline:hover { border-color: var(--amber); color: var(--amber); }
  .stat-strip { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-top: 72px; }
  .stat-item { padding: 28px 0; border-right: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; text-align: center; }
  .stat-item:last-child { border-right: none; }
  .stat-num { font-size: 44px; font-weight: 900; color: var(--amber); letter-spacing: -0.02em; line-height: 1; }
  .stat-label { font-size: 12px; color: var(--muted); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 6px; }
  .marquee-wrap { overflow: hidden; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--bg2); padding: 14px 0; }
  .marquee-track { display: flex; animation: marquee 22s linear infinite; width: max-content; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  .marquee-item { font-size: 12px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted); padding: 0 40px; border-right: 1px solid var(--border); white-space: nowrap; }
  .marquee-item.highlight { color: var(--amber); }
  .section-tag { font-size: 11px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: var(--amber); display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
  .section-tag::before { content: "//"; opacity: 0.5; }
  .section-title { font-size: clamp(24px,3.5vw,40px); font-weight: 900; letter-spacing: -0.02em; line-height: 1.1; }
  .count-badge { font-size: 12px; color: var(--muted); border: 1px solid var(--border); padding: 6px 14px; letter-spacing: 0.08em; }
  .hero { position: relative; overflow: hidden; padding: 100px 0 80px; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: 10px; border: 1px solid var(--border-amber); background: var(--amber-glow); padding: 6px 16px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--amber); margin-bottom: 32px; }
  .hero-eyebrow::before { content: ""; width: 6px; height: 6px; background: var(--amber); border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
  .hero-h1 { font-size: clamp(42px,6vw,88px); font-weight: 900; line-height: 0.95; letter-spacing: -0.03em; margin-bottom: 32px; }
  .line2 { color: var(--amber); display: block; }
  .hero-sub { font-size: 17px; color: var(--muted2); line-height: 1.75; max-width: 560px; margin-bottom: 48px; }
  .filters { display: flex; flex-direction: column; gap: 10px; margin-bottom: 40px; padding: 20px; background: var(--bg2); border: 1px solid var(--border); }
  .filter-row { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  .filter-label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); width: 80px; flex-shrink: 0; }
  .fpill { font-size: 12px; font-weight: 600; padding: 6px 16px; border: 1px solid var(--border); background: transparent; color: var(--muted2); cursor: pointer; letter-spacing: 0.06em; transition: all 0.18s; font-family: inherit; }
  .fpill:hover:not(.active) { border-color: var(--amber); color: var(--amber); }
  .fpill.active { background: var(--amber); color: #000; border-color: var(--amber); }
  .products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px,1fr)); gap: 1px; background: var(--border); }
  .pcard { background: var(--bg2); padding: 28px; transition: all 0.25s; position: relative; overflow: hidden; cursor: pointer; }
  .pcard::before { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, var(--amber-glow), transparent); opacity: 0; transition: opacity 0.3s; }
  .pcard:hover::before { opacity: 1; }
  .pcard:hover { background: var(--bg3); }
  .pcard-img { width: 100%; aspect-ratio: 16/9; background: var(--bg3); border: 1px solid var(--border); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; margin-bottom: 24px; position: relative; overflow: hidden; }
  .pcard-img::after { content: ""; position: absolute; inset: 0; background: linear-gradient(135deg, transparent 60%, rgba(245,158,11,0.06)); }
  .pcard-corner { position: absolute; top: 0; right: 0; width: 0; height: 0; border-style: solid; border-width: 0 28px 28px 0; border-color: transparent var(--amber-dim) transparent transparent; }
  .pcard-brand { font-size: 10px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: var(--amber); }
  .pcard-cat { font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
  .pcard-name { font-size: 18px; font-weight: 800; letter-spacing: -0.01em; margin-bottom: 10px; line-height: 1.2; }
  .pcard-desc { font-size: 13px; color: var(--muted2); line-height: 1.7; margin-bottom: 20px; }
  .pcard-cta { font-size: 12px; font-weight: 700; color: var(--amber); letter-spacing: 0.1em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 6px; border: none; border-bottom: 1px solid var(--border-amber); padding-bottom: 2px; background: none; cursor: pointer; font-family: inherit; }
  .about-section { padding: 80px 0; background: var(--bg2); position: relative; overflow: hidden; }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
  .check-item { display: flex; gap: 16px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid var(--border); }
  .check-icon { width: 20px; height: 20px; border: 1px solid var(--amber); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-trigger { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; cursor: pointer; gap: 20px; transition: color 0.2s; }
  .faq-trigger:hover { color: var(--amber); }
  .faq-q { font-size: 17px; font-weight: 600; letter-spacing: -0.01em; }
  .faq-icon { width: 28px; height: 28px; border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; color: var(--amber); transition: transform 0.2s; }
  .faq-icon.open { transform: rotate(45deg); }
  .faq-body { padding-bottom: 22px; font-size: 15px; color: var(--muted2); line-height: 1.8; max-width: 680px; }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; }
  .contact-info-item { padding: 20px 0; border-bottom: 1px solid var(--border); }
  .contact-info-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--amber); margin-bottom: 6px; }
  .contact-info-val { font-size: 16px; font-weight: 600; color: var(--text); transition: color 0.2s; }
  a.contact-info-val:hover { color: var(--amber); }
  .field { display: flex; flex-direction: column; gap: 8px; }
  .field label { font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--muted); }
  .finput { background: var(--bg3); border: 1px solid var(--border); padding: 13px 16px; font-size: 14px; color: var(--text); outline: none; transition: border-color 0.2s; font-family: inherit; width: 100%; }
  .finput:focus { border-color: var(--amber); }
  .finput::placeholder { color: var(--muted); }
  .submit-btn { width: 100%; background: var(--amber); color: #000; font-weight: 900; font-size: 15px; padding: 17px; border: none; cursor: pointer; letter-spacing: 0.06em; clip-path: polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%); transition: background 0.2s; font-family: inherit; }
  .submit-btn:hover { background: #FBBF24; }
  .viber-btn { position: fixed; bottom: 24px; right: 24px; z-index: 200; background: #7360F2; color: #fff; font-weight: 700; font-size: 13px; padding: 12px 22px; display: flex; align-items: center; gap: 8px; border: none; cursor: pointer; box-shadow: 0 0 24px rgba(115,96,242,0.4); transition: all 0.2s; clip-path: polygon(6px 0%,100% 0%,calc(100% - 6px) 100%,0% 100%); text-decoration: none; }
  .viber-btn:hover { transform: translateY(-2px); }
  .footer { border-top: 1px solid var(--border); padding: 28px 0; background: var(--bg); }
  .preview-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--border); }
  .preview-card { background: var(--bg2); padding: 24px; display: flex; flex-direction: column; gap: 8px; cursor: pointer; transition: background 0.2s; }
  .preview-card:hover { background: var(--bg3); }
  .spec-table { border: 1px solid var(--border); }
  .spec-row { display: grid; grid-template-columns: 1fr 1.6fr; }
  .spec-key { padding: 11px 16px; font-size: 13px; color: var(--muted); background: var(--bg2); border-right: 1px solid var(--border); font-weight: 500; border-bottom: 1px solid var(--border); }
  .spec-val { padding: 11px 16px; font-size: 13px; color: var(--text); border-bottom: 1px solid var(--border); }
  .spec-row:last-child .spec-key, .spec-row:last-child .spec-val { border-bottom: none; }
  .back-btn { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: var(--muted2); cursor: pointer; background: none; border: none; font-family: inherit; letter-spacing: 0.04em; transition: color 0.2s; padding: 0; }
  .back-btn:hover { color: var(--amber); }
  .detail-img-box { width: 100%; aspect-ratio: 4/3; background: var(--bg2); border: 1px solid var(--border); display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden; margin-bottom: 24px; }
  .detail-corner { position: absolute; top: 0; right: 0; width: 0; height: 0; border-style: solid; border-width: 0 36px 36px 0; border-color: transparent var(--amber-dim) transparent transparent; }
  /* Services grids */
  .svc-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .svc-icon-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); }

  @media (max-width: 768px) {
    .about-grid, .contact-grid, .detail-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .svc-two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
    .stat-strip { grid-template-columns: repeat(2,1fr); }
    .stat-item:nth-child(2) { border-right: none; }
    .nav-links { display: none; }
    .preview-grid { grid-template-columns: 1fr 1fr; }
    .products-grid { grid-template-columns: 1fr !important; }
    .hero { padding: 60px 0 48px !important; }
    .hero-h1 { font-size: 44px !important; }
    .hero-sub { font-size: 15px !important; }
    .container { padding: 0 16px !important; }
    .filters { padding: 14px !important; }
    .filter-label { display: none; }
    .nav-inner { padding: 0 16px; }
    .nav-logo-sub { font-size: 8px; letter-spacing: 0.1em; max-width: 180px; }
    .spec-table .spec-row { grid-template-columns: 1fr 1fr !important; }
    .spec-key, .spec-val { font-size: 12px !important; padding: 9px 10px !important; }
    .section-title { font-size: 26px !important; }
    .stat-num { font-size: 32px !important; }
    .btn-amber, .btn-outline { padding: 13px 20px !important; font-size: 13px !important; }
    .pcard { padding: 20px !important; }
    .footer .container { flex-direction: column; gap: 8px; }
    .svc-icon-grid { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 480px) {
    .preview-grid { grid-template-columns: 1fr !important; }
    .svc-icon-grid { grid-template-columns: 1fr !important; }
    .stat-strip { grid-template-columns: repeat(2,1fr); }
    .hero-h1 { font-size: 36px !important; }
    .nav-logo-main { font-size: 13px; }
    .nav-logo-sub { display: none; }
    .nav-cta { padding: 8px 14px !important; font-size: 12px !important; }
  }
`;

// ─── CONTACT FORM ─────────────────────────────────────────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  if (submitted) return (
    <div style={{ padding: "48px 32px", border: "1px solid var(--border-amber)", background: "var(--amber-glow)", textAlign: "center" }}>
      <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: "var(--amber)", marginBottom: 10 }}>Получено!</div>
      <div style={{ fontSize: 14, color: "var(--muted2)", lineHeight: 1.7 }}>Ще се свържем с вас до 24 часа.</div>
      <button onClick={() => setSubmitted(false)} style={{ marginTop: 24, background: "transparent", border: "1px solid var(--border)", color: "var(--muted2)", padding: "10px 24px", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Ново запитване</button>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
      {[["name","Вашето име *","text",true,"Иван Иванов"],["company","Фирма","text",false,"ЕООД / АД"],["phone","Телефон *","tel",true,"+359..."],["email","Имейл *","email",true,"email@firma.bg"]].map(([n,l,t,r,p]) => (
        <div key={n} className="field">
          <label>{l}</label>
          <input type={t} required={r} placeholder={p} className="finput" value={form[n]} onChange={e => setForm({...form,[n]:e.target.value})} />
        </div>
      ))}
      <div className="field">
        <label>Съобщение</label>
        <textarea rows={4} placeholder="Опишете какво търсите..." className="finput" style={{ resize:"vertical" }} value={form.message} onChange={e => setForm({...form,message:e.target.value})} />
      </div>
      <button type="submit" className="submit-btn">Изпрати запитване →</button>
      <div style={{ fontSize: 11, color: "var(--muted)", textAlign: "center", letterSpacing: "0.08em", textTransform: "uppercase" }}>Отговаряме до 24 часа</div>
    </form>
  );
}

// ─── PRODUCT DETAIL PAGE ──────────────────────────────────────────────────────
function ProductDetailPage({ product, goBack, goContact }) {
  const specs = PRODUCT_SPECS[product.name] || [];
  const image = PRODUCT_IMAGES[product.name];
  const related = products.filter(p => p.type === product.type && p.name !== product.name).slice(0, 3);

  return (
    <div className="page" style={{ minHeight: "calc(100vh - 60px)", background: "var(--bg)" }}>
      <div className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 40, fontSize: 13, color: "var(--muted)", flexWrap: "wrap" }}>
          <button className="back-btn" onClick={goBack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Всички продукти
          </button>
          <span>›</span>
          <span style={{ color: "var(--amber)" }}>{product.brand}</span>
          <span>›</span>
          <span style={{ color: "var(--muted2)" }}>{product.name}</span>
        </nav>

        <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

          {/* LEFT — снимка + CTA */}
          <div>
            <div className="detail-img-box">
              <div className="detail-corner" />
              {image ? (
                <img src={image} alt={product.name} style={{ maxWidth: "82%", maxHeight: "82%", objectFit: "contain", position: "relative", zIndex: 1 }} />
              ) : (
                <div style={{ textAlign: "center", color: "var(--muted)", fontSize: 13 }}>
                  <svg width="52" height="52" viewBox="0 0 40 40" fill="none" stroke="rgba(245,158,11,0.25)" strokeWidth="1.2" style={{ display: "block", margin: "0 auto 10px" }}>
                    <rect x="4" y="8" width="32" height="24" rx="2"/><line x1="4" y1="16" x2="36" y2="16"/>
                    <line x1="12" y1="8" x2="12" y2="16"/><rect x="8" y="20" width="6" height="4" rx="0.5"/>
                    <rect x="17" y="20" width="6" height="4" rx="0.5"/><rect x="26" y="20" width="6" height="4" rx="0.5"/>
                  </svg>
                  Снимка предстои
                </div>
              )}
            </div>

            {/* Badges */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
              <span style={{ background: "var(--amber-glow)", border: "1px solid var(--border-amber)", color: "var(--amber)", fontSize: 11, fontWeight: 800, letterSpacing: "0.15em", padding: "5px 14px", textTransform: "uppercase" }}>{product.brand}</span>
              <span style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--muted2)", fontSize: 11, padding: "5px 14px" }}>{product.type}</span>
              <span style={{ background: "var(--bg3)", border: "1px solid var(--border)", color: "var(--muted)", fontSize: 11, padding: "5px 14px" }}>{product.category}</span>
            </div>

            {/* CTA */}
            <div style={{ padding: 24, border: "1px solid var(--border-amber)", background: "var(--amber-glow)", marginBottom: 0 }}>
              <div style={{ fontSize: 14, color: "var(--muted2)", marginBottom: 16, lineHeight: 1.7 }}>
                Интересувате се от <strong style={{ color: "var(--text)" }}>{product.name}</strong>? Изпратете запитване и ще ви отговорим до 24 часа.
              </div>
              <button className="btn-amber" style={{ width: "100%", justifyContent: "center" }} onClick={goContact}>
                Запитване →
              </button>
            </div>
          </div>

          {/* RIGHT — описание + спецификации */}
          <div>
            <div className="section-tag">{product.category}</div>
            <h1 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 20 }}>{product.name}</h1>
            <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 40 }}>{product.description}</p>

            {specs.length > 0 ? (
              <div>
                <div className="section-tag" style={{ marginBottom: 16 }}>Технически спецификации</div>
                <div className="spec-table">
                  {specs.map(([key, val], i) => (
                    <div key={i} className="spec-row">
                      <div className="spec-key">{key}</div>
                      <div className="spec-val">{val}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ padding: "24px", border: "1px solid var(--border)", background: "var(--bg2)", color: "var(--muted)", fontSize: 14, textAlign: "center" }}>
                Пълните спецификации ще бъдат добавени скоро.
              </div>
            )}
          </div>
        </div>

        {/* Свързани продукти */}
        {related.length > 0 && (
          <div style={{ marginTop: 80 }}>
            <div className="section-tag" style={{ marginBottom: 24 }}>Подобни продукти</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 1, background: "var(--border)" }}>
              {related.map(p => (
                <div key={p.name} className="pcard" onClick={() => window._openProduct && window._openProduct(p)}>
                  <div className="pcard-brand">{p.brand}</div>
                  <div style={{ height: 8 }} />
                  <div className="pcard-name">{p.name}</div>
                  <div className="pcard-cat" style={{ marginBottom: 12 }}>{p.category}</div>
                  <div className="pcard-desc" style={{ fontSize: 13 }}>{p.shortDesc || p.description}</div>
                  <div className="pcard-cta">Виж повече →</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PRODUCTS PAGE ────────────────────────────────────────────────────────────
function ProductsPage({ goHome, goContact, openProduct }) {
  const [activeBrand, setActiveBrand] = useState("Всички");
  const [activeCategory, setActiveCategory] = useState("Всички");

  const filtered = products.filter(
    p => (activeBrand === "Всички" || p.brand === activeBrand) &&
         (activeCategory === "Всички" || p.type === activeCategory)
  );

  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="page" style={{ padding: "60px 0 80px", background: "var(--bg)", minHeight: "calc(100vh - 60px)" }}>
      <div className="container">
        <button className="back-btn" onClick={goHome} style={{ marginBottom: 32 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Начало
        </button>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="section-tag">Каталог</div>
            <h1 className="section-title">Касови апарати<br />и фискални принтери</h1>
          </div>
          <div className="count-badge">{filtered.length} устройства</div>
        </div>

        <div className="filters">
          <div className="filter-row">
            <span className="filter-label">Марка</span>
            {brands.map(b => (
              <button key={b} className={`fpill${activeBrand === b ? " active" : ""}`} onClick={() => setActiveBrand(b)}>{b}</button>
            ))}
          </div>
          <div className="filter-row">
            <span className="filter-label">Тип</span>
            {categories.map(c => (
              <button key={c} className={`fpill${activeCategory === c ? " active" : ""}`} onClick={() => setActiveCategory(c)}>{c}</button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="products-grid">
            {filtered.map(p => (
              <article key={p.name} className="pcard" onClick={() => openProduct(p)}>
                <div className="pcard-img">
                  <div className="pcard-corner" />
                  {PRODUCT_IMAGES[p.name] ? (
                    <img src={PRODUCT_IMAGES[p.name]} alt={p.name}
                      style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain", position: "relative", zIndex: 1 }} />
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="rgba(245,158,11,0.35)" strokeWidth="1.2">
                        <rect x="4" y="8" width="32" height="24" rx="2"/><line x1="4" y1="16" x2="36" y2="16"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <rect x="8" y="20" width="6" height="4" rx="0.5"/><rect x="17" y="20" width="6" height="4" rx="0.5"/>
                        <rect x="26" y="20" width="6" height="4" rx="0.5"/>
                      </svg>
                      <span style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Снимка предстои</span>
                    </div>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span className="pcard-brand">{p.brand}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--muted)", flexShrink: 0 }} />
                  <span className="pcard-cat">{p.category}</span>
                </div>
                <h3 className="pcard-name">{p.name}</h3>
                <p className="pcard-desc">{p.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <button className="pcard-cta" onClick={e => { e.stopPropagation(); openProduct(p); }}>
                    Виж спецификации →
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div style={{ padding: "64px 0", textAlign: "center", color: "var(--muted)", fontSize: 16 }}>Няма продукти за избраната комбинация.</div>
        )}
      </div>
    </div>
  );
}


// ─── SERVICES PAGE ────────────────────────────────────────────────────────────
function ServicesPage({ goContact }) {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="page" style={{ background: "var(--bg)", minHeight: "calc(100vh - 60px)" }}>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", padding: "80px 0 72px", borderBottom: "1px solid var(--border)" }}>
        <div className="grid-bg" />
        <div style={{ position: "absolute", top: -80, left: -80, width: 500, height: 500, background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center" }}>
          <div className="hero-eyebrow" style={{ display: "inline-flex" }}>Продажба · Фискализация · Сервиз</div>
          <h1 className="hero-h1" style={{ fontSize: "clamp(36px,5vw,72px)", marginBottom: 24 }}>
            Нашите<br /><span className="line2">услуги</span>
          </h1>
          <p style={{ fontSize: 17, color: "var(--muted2)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 40px" }}>
            От консултация и продажба до фискализация и сервиз — грижим се за фискалното ви устройство от първия до последния ден.
          </p>
          <button className="btn-amber" onClick={goContact}>Свържете се с нас →</button>
        </div>
      </section>

      {/* ПРОДАЖБА */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <div className="svc-two-col">
            <div>
              <div className="section-tag">01 — Продажба</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Касови апарати и фискални принтери за всеки бизнес</h2>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 20 }}>
                Официален дистрибутор на Datecs, Eltrade, Daisy и Tremol — предлагаме пълната гама фискални устройства за магазини, ресторанти, сервизни и мобилни дейности.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 32 }}>
                Помагаме да изберете правилното устройство според типа обект, натоварването и бюджета — без излишни разходи.
              </p>
              <button className="btn-amber" onClick={goContact}>Запитване за продукт →</button>
            </div>
            <div className="svc-icon-grid">
              {[
                { icon: "🖨️", title: "Касови апарати", text: "Настолни, мобилни и Android модели за всеки тип обект." },
                { icon: "📱", title: "Мобилни решения", text: "За доставки, куриери и търговия на терен с батерия и 4G." },
                { icon: "⚡", title: "Фискални принтери", text: "Настолни и мобилни принтери за POS системи." },
                { icon: "🤝", title: "Консултация", text: "Помагаме да изберете правилното устройство безплатно." },
              ].map(({ icon, title, text }) => (
                <div key={title} style={{ background: "var(--bg2)", padding: 24 }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* ФИСКАЛИЗАЦИЯ */}
      <section style={{ padding: "80px 0", background: "var(--bg2)" }}>
        <div className="container">
          <div className="svc-two-col">
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {[
                { num: "01", title: "Регистрация в НАП", text: "Подаваме заявление и регистрираме устройството в Националната агенция за приходите от ваше име." },
                { num: "02", title: "Настройка на устройството", text: "Програмираме артикули, департаменти, данъчни групи и параметри за конкретния обект." },
                { num: "03", title: "SIM карта и свързаност", text: "Осигуряваме SIM карта за онлайн връзка с НАП и проверяваме изпращането на данни." },
                { num: "04", title: "Предаване готово за работа", text: "Получавате устройство, готово за работа — без да търсите допълнителен сервиз." },
              ].map(({ num, title, text }) => (
                <div key={num} style={{ display: "flex", gap: 20, padding: "22px 0", borderBottom: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--amber)", minWidth: 28, paddingTop: 2 }}>{num}</div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>{title}</div>
                    <div style={{ fontSize: 14, color: "var(--muted2)", lineHeight: 1.7 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="section-tag">02 — Фискализация</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Фискализираме устройствата, които продаваме</h2>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 20 }}>
                При покупка на касов апарат или фискален принтер от нас, ние се грижим за цялостното въвеждане в експлоатация.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 32 }}>
                Получавате готово за работа фискално устройство — без допълнителни разходи, без бюрокрация.
              </p>
              <div style={{ padding: 24, border: "1px solid var(--border-amber)", background: "var(--amber-glow)", marginBottom: 32 }}>
                <div style={{ fontSize: 13, color: "var(--amber)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8, textTransform: "uppercase" }}>Включено при покупка</div>
                <div style={{ fontSize: 14, color: "var(--muted2)", lineHeight: 1.8 }}>
                  Регистрация в НАП · Настройка · SIM карта · Въвеждане в експлоатация
                </div>
              </div>
              <button className="btn-amber" onClick={goContact}>Запитване за фискализация →</button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border)" }} />

      {/* СЕРВИЗ */}
      <section style={{ padding: "80px 0", background: "var(--bg)" }}>
        <div className="container">
          <div className="svc-two-col">
            <div>
              <div className="section-tag">03 — Сервиз</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Сервиз и поддръжка на фискални устройства</h2>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 20 }}>
                Извършваме сервизно обслужване на касови апарати и фискални принтери — независимо дали устройството е закупено от нас или от друг търговец.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.9, marginBottom: 32 }}>
                Работим с всички одобрени марки: Datecs, Eltrade, Daisy и Tremol. Бърза диагностика, резервни части и документация за НАП.
              </p>
              <button className="btn-amber" onClick={goContact}>Заявете сервиз →</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--border)" }}>
              {[
                { title: "Годишен технически преглед", text: "Задължителният годишен преглед на фискалното устройство с издаване на документ." },
                { title: "Смяна на фискална памет", text: "При запълване на фискалната памет — замяна и пренастройка на устройството." },
                { title: "Ремонт и диагностика", text: "Отстраняване на повреди, смяна на принтиращ механизъм, дисплей и компоненти." },
                { title: "Промяна на данни в НАП", text: "При смяна на адрес, собственик или вид дейност — актуализация в системата на НАП." },
                { title: "Бракуване на устройство", text: "Официално бракуване на стари фискални устройства с пълна документация." },
                { title: "Консултация и поддръжка", text: "Отговаряме на въпроси за работата с устройството и помагаме при технически казуси." },
              ].map(({ title, text }) => (
                <div key={title} style={{ background: "var(--bg2)", padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--amber)", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{title}</div>
                    <div style={{ fontSize: 13, color: "var(--muted2)", lineHeight: 1.7 }}>{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-tag" style={{ justifyContent: "center", marginBottom: 16 }}>Готови да помогнем</div>
          <h2 className="section-title" style={{ marginBottom: 20 }}>Свържете се с нас днес</h2>
          <p style={{ fontSize: 16, color: "var(--muted2)", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
            За продажба, фискализация или сервиз — отговаряме до 24 часа в работни дни.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-amber" onClick={goContact}>Изпратете запитване →</button>
            <a href="viber://chat?number=%2B359898444242" className="btn-outline">Viber</a>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
function HomePage({ goProducts, goContact }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="grid-bg" />
        <div style={{ position: "absolute", top: -120, right: -80, width: 600, height: 600, background: "radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="hero-eyebrow">Касови апарати · Фискални принтери · България</div>
            <h1 className="hero-h1">Фискални<br /><span className="line2">устройства</span></h1>
            <p className="hero-sub" style={{ margin: "0 auto 48px" }}>
              Изодимпекс ЕООД — официален дистрибутор на Datecs, Eltrade, Daisy и Tremol. Касови апарати, мобилни решения и фискални принтери за всеки тип бизнес.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
              <button className="btn-amber" onClick={goContact}>
                Изпрати запитване
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <button className="btn-outline" onClick={goProducts}>Разгледай каталога</button>
            </div>
          </div>
          <div className="stat-strip">
            {[["20+","Години опит"],["600+","Обслужени бизнеса"],["4","Водещи марки"],["24ч","Отговор"]].map(([n,l]) => (
              <div key={l} className="stat-item"><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className={`marquee-item${["Datecs","Eltrade","Daisy","Tremol"].includes(item) ? " highlight" : ""}`}>{item}</div>
          ))}
        </div>
      </div>

      {/* PRODUCTS PREVIEW */}
      <section style={{ padding: "72px 0", background: "var(--bg)" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-tag">Каталог</div>
              <h2 className="section-title">Популярни устройства</h2>
            </div>
            <button className="btn-outline" style={{ fontSize: 13, padding: "11px 24px" }} onClick={goProducts}>
              Виж всички {products.length} →
            </button>
          </div>
          <div className="preview-grid">
            {["Datecs DP-150 MX","Datecs FP-2000","Eltrade A1","Daisy Compact S 01/03","Tremol S25","Datecs BlueCash-500"].map(name => products.find(p => p.name === name)).filter(Boolean).map(p => (
              <div key={p.name} className="preview-card" onClick={goProducts}>
                {PRODUCT_IMAGES[p.name] && (
                  <img src={PRODUCT_IMAGES[p.name]} alt={p.name}
                    style={{ width: "100%", height: 90, objectFit: "contain", background: "var(--bg3)", borderRadius: 4, marginBottom: 4, padding: 8 }} />
                )}
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", color: "var(--amber)", textTransform: "uppercase" }}>{p.brand}</div>
                <div style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: "var(--muted)" }}>{p.category}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <button className="btn-amber" onClick={goProducts}>Разгледай всички продукти →</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-tag">За нас</div>
              <h2 className="section-title" style={{ marginBottom: 24 }}>Над 20 години в областта на фискалните устройства</h2>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.85, marginBottom: 20 }}>
                В Изодимпекс ЕООД не просто продаваме фискални устройства — ние изграждаме дългосрочни решения. С дългогодишен опит и работа с различни индустрии, знаем какво работи в реална среда.
              </p>
              <p style={{ fontSize: 16, color: "var(--muted2)", lineHeight: 1.85, marginBottom: 40 }}>
                Работили сме с над 600 бизнеса — от малки магазини до вериги обекти.
              </p>
              <button className="btn-amber" onClick={goContact}>Свържете се с нас</button>
            </div>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {["Консултация според типа бизнес и натоварване","Официален дистрибутор на Datecs, Eltrade, Daisy и Tremol","Фискализация и въвеждане в експлоатация","Сервиз и поддръжка на фискални устройства","Ясна комуникация и коректни условия"].map((item, i) => (
                <div key={i} className="check-item">
                  <div className="check-icon">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="var(--amber)" strokeWidth="1.5" strokeLinecap="round"><polyline points="1.5,5 4,7.5 8.5,2.5"/></svg>
                  </div>
                  <span style={{ fontSize: 15, color: "var(--muted2)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-tag">Въпроси</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Често задавани въпроси</h2>
          <div style={{ borderTop: "1px solid var(--border)" }}>
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <div className="faq-trigger" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="faq-q">{item.question}</span>
                  <div className={`faq-icon${openFaq === i ? " open" : ""}`}>+</div>
                </div>
                {openFaq === i && <div className="faq-body">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 0", background: "var(--bg2)" }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-tag">Контакти</div>
              <h2 className="section-title" style={{ marginBottom: 40 }}>Изпратете запитване</h2>
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {[["Телефон","+359 898 444 242","tel:+359898444242"],["Имейл","izodimpex@abv.bg","mailto:izodimpex@abv.bg"],["Адрес","гр. София, България",null],["Работно време","Пон–Пет: 09:00–18:00",null]].map(([label,value,href]) => (
                  <div key={label} className="contact-info-item">
                    <div className="contact-info-label">{label}</div>
                    {href ? <a href={href} className="contact-info-val">{value}</a> : <div className="contact-info-val">{value}</div>}
                  </div>
                ))}
                <div style={{ paddingTop: 28 }}>
                  <a href="viber://chat?number=%2B359898444242" style={{ display: "inline-flex", alignItems: "center", gap: 14, color: "var(--text)" }}>
                    <div style={{ width: 44, height: 44, background: "#7360F2", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 0 16px rgba(115,96,242,0.4)" }}>✆</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>Пишете ни във Viber</div>
                      <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>Бърза връзка</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── MOBILE NAV ───────────────────────────────────────────────────────────────
function MobileNav({ page, goHome, goProducts, goServices, goSection, goContact }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const navAction = (fn) => { close(); fn(); };

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-logo" onClick={() => navAction(goHome)}>
              <div className="nav-logo-main">Изодимпекс ЕООД</div>
              <div className="nav-logo-sub">Официален дистрибутор и сервиз на фискални устройства</div>
            </div>
            <div className="nav-links">
              <button className={`nav-link${page === "products" || page === "detail" ? " active" : ""}`} onClick={goProducts}>Каталог</button>
              <button className={`nav-link${page === "services" ? " active" : ""}`} onClick={goServices}>Услуги</button>
              <button className="nav-link" onClick={() => goSection("about")}>За нас</button>
              <button className="nav-link" onClick={() => goSection("faq")}>Въпроси</button>
              <button className="nav-link" onClick={goContact}>Контакти</button>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button className="nav-cta" onClick={goContact} style={{ display: "none" }} id="desktop-cta">Запитване</button>
              <button className="nav-cta" onClick={goContact} style={{ fontSize: 12, padding: "8px 14px" }}>Запитване</button>
              {/* Hamburger */}
              <button onClick={() => setOpen(!open)} style={{
                background: "none", border: "1px solid var(--border)", padding: "8px 10px", cursor: "pointer",
                display: "none", flexDirection: "column", gap: 4, marginLeft: 4
              }} id="hamburger">
                <span style={{ width: 18, height: 1.5, background: "var(--text)", display: "block", transition: "all 0.2s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
                <span style={{ width: 18, height: 1.5, background: "var(--text)", display: "block", opacity: open ? 0 : 1, transition: "all 0.2s" }} />
                <span style={{ width: 18, height: 1.5, background: "var(--text)", display: "block", transition: "all 0.2s", transform: open ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99,
          background: "rgba(8,12,16,0.97)",
          display: "flex", flexDirection: "column",
          paddingTop: 80, paddingLeft: 32, paddingRight: 32,
          animation: "fadeIn 0.2s ease"
        }}>
          <button onClick={close} style={{ position: "absolute", top: 18, right: 20, background: "none", border: "1px solid var(--border)", color: "var(--text)", width: 36, height: 36, cursor: "pointer", fontSize: 18 }}>✕</button>
          {[
            ["Начало", goHome],
            ["Каталог", goProducts],
            ["Услуги", goServices],
            ["За нас", () => goSection("about")],
            ["Въпроси", () => goSection("faq")],
            ["Контакти", goContact],
          ].map(([label, fn]) => (
            <button key={label} onClick={() => navAction(fn)} style={{
              background: "none", border: "none", borderBottom: "1px solid var(--border)",
              color: "var(--text)", fontSize: 22, fontWeight: 700, padding: "20px 0",
              textAlign: "left", cursor: "pointer", fontFamily: "inherit", letterSpacing: "-0.01em"
            }}>{label}</button>
          ))}
          <button className="btn-amber" style={{ marginTop: 32, justifyContent: "center" }} onClick={() => navAction(goContact)}>
            Изпрати запитване →
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #hamburger { display: flex !important; }
          #desktop-cta { display: none !important; }
          .nav-cta:not(#desktop-cta) { display: none !important; }
        }
        @media (min-width: 769px) {
          #hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
export default function IzodimpexWebsite() {
  const [page, setPage] = useState("home"); // "home" | "products" | "services" | "detail"
  const [selectedProduct, setSelectedProduct] = useState(null);

  const goHome = () => { setPage("home"); setSelectedProduct(null); window.scrollTo({ top: 0 }); };
  const goProducts = () => { setPage("products"); setSelectedProduct(null); window.scrollTo({ top: 0 }); };
  const goServices = () => { setPage("services"); setSelectedProduct(null); window.scrollTo({ top: 0 }); };
  const goProduct = (product) => { setSelectedProduct(product); setPage("detail"); window.scrollTo({ top: 0 }); };
  const goContact = () => {
    if (page !== "home") {
      setPage("home");
      setSelectedProduct(null);
      setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 300);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const goSection = (id) => {
    if (page !== "home") {
      setPage("home");
      setSelectedProduct(null);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Allow related products to open detail
  useEffect(() => {
    window._openProduct = goProduct;
    return () => { window._openProduct = null; };
  });

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "var(--bg)", color: "var(--text)", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{STYLES}</style>

      <MobileNav page={page} goHome={goHome} goProducts={goProducts} goServices={goServices} goSection={goSection} goContact={goContact} />

      {page === "home" && <HomePage goProducts={goProducts} goContact={goContact} />}
      {page === "products" && <ProductsPage goHome={goHome} goContact={goContact} openProduct={goProduct} />}
      {page === "services" && <ServicesPage goContact={goContact} />}
      {page === "detail" && selectedProduct && <ProductDetailPage product={selectedProduct} goBack={goProducts} goContact={goContact} />}

      <footer className="footer">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em" }}>
            <div>© {new Date().getFullYear()} Изодимпекс ЕООД — Всички права запазени</div>
            <div style={{ display: "flex", gap: 16 }}>
              {["Datecs","Eltrade","Daisy","Tremol"].map(b => <span key={b} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em" }}>{b}</span>)}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
