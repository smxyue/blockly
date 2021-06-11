'use strict';
goog.provide ( 'Blockly.Msg.fr');
goog.require ( 'Blockly.Msg');
// Electron window
Blockly.Msg.com1 = "選擇USB序列埠";
Blockly.Msg.com2 = "🔔 請選擇USB" ;
Blockly.Msg.check = "驗證中...";
Blockly.Msg.upload = "上傳中...";
Blockly.Msg.error = "🔔 錯誤: Blocks 無連接";
Blockly.Msg.verif = "🔔 請先驗證程式碼 "
Blockly.Msg.save = "另存為格式";
Blockly.Msg.update = "更新";
Blockly.Msg.new_update = "有新版本, 你是否希望下載並安裝？" ;
Blockly.Msg.yes = "是";
Blockly.Msg.no = "否";
Blockly.Msg.uptodate = "💯 版本為最新!" ;
Blockly.Msg.download = "下載完成, 應用程式將安裝並重新啟動 ..."
// common to all blocks
Blockly.Msg.HELPURL = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pin = "腳位";
Blockly.Msg._AT = "在";
Blockly.Msg.AV = "前進";
Blockly.Msg.AR = "後退";
Blockly.Msg.high = "HIGH"; // do not translate
Blockly.Msg.low = "LOW"; // do not translate
Blockly.Msg.right = "右";
Blockly.Msg.left = "左";
Blockly.Msg.LetR = "右 & 左";
Blockly.Msg.direction = "方向";
Blockly.Msg.vitesse = "速度 ";
// categories (menu)
Blockly.Msg.CAT_STOCKAGE = "⊞ 儲存";
Blockly.Msg.CAT_numerique = "- 數位";
Blockly.Msg.CAT_analogique = "~ 類比";
Blockly.Msg.CAT_wifi = "＠ Wifi";
Blockly.Msg.CAT_TAB = "▦ 表格";
Blockly.Msg.CAT_list = "▤ 清單";
Blockly.Msg.CAT_servo = "↷ 舵機";
Blockly.Msg.CAT_del = "☄ LED";
Blockly.Msg.CAT_LOGIC = "⇋ 邏輯";
Blockly.Msg.CAT_MATH = "∑ 數學";
Blockly.Msg.CAT_TEXT = "❝ 文字";
Blockly.Msg.CAT_VARIABLES = "↝ 變數";
Blockly.Msg.CAT_FUNCTIONS = "∬ 函數";
Blockly.Msg.CAT_ARDUINO = "∞ 程式結構";
Blockly.Msg.CAT_ARDUINO_IN = "⇅ 輸入/輸出";
Blockly.Msg.CAT_ARDUINO_OUT = "☺ Exit";
Blockly.Msg.CAT_ARDUINO_TIME = "◌ 時間";
Blockly.Msg.CAT_actionneur = "↻ 馬達";
Blockly.Msg.CAT_com = "☎ 通訊";
Blockly.Msg.CAT_ARDUINO_COMM_SERIAL = "- 序列埠";
Blockly.Msg.CAT_ARDUINO_COMM_SOFTSERIAL = "- 軟體序列埠";
Blockly.Msg.CAT_ARDUINO_moteur="↻ 步進馬達";
Blockly.Msg.CAT_ultrason = "⇣ 感測器";
Blockly.Msg.CAT_bluetooth = "☏ 藍牙";
Blockly.Msg.CAT_ARDUINO_matrice8x8 = "░ LED 嘴巴";
Blockly.Msg.CAT_ARDUINO_matrice16x8 = "░ LED 眼睛";
Blockly.Msg.CAT_DFRobot_SHIELD_LCDKEYPAD = "▀ LCD 螢幕";
Blockly.Msg.CAT_iot = "☁ 物聯網";
Blockly.Msg.CAT_html = "✉ HTML網頁";
Blockly.Msg.CAT_DFPLAYER = "♫ 音樂";
Blockly.Msg.CAT_OTTO = "⊟ Otto";
Blockly.Msg.CAT_OTTOH = "⊟ Humanoid";
Blockly.Msg.CAT_OLED_U8G = "▀ OLED 螢幕";
Blockly.Msg.CAT_NEOPIXEL = "☄ Neopixel";

//Wireless
Blockly.Msg.esp8266_init_tooltip = "設定wifi的網路連線模式";
Blockly.Msg.esp8266_1 = "Esp 8266";
Blockly.Msg.esp8266_2 = "SSID";
Blockly.Msg.esp8266_3 = "key";
Blockly.Msg.esp8266_4 = "IP";
Blockly.Msg.esp8266_5 = "gateway";
Blockly.Msg.esp8266_6 = "mask";
Blockly.Msg.esp8266_7 = [["client", "client"], ["server", "server"]];
Blockly.Msg.esp8266_8 = "port";
Blockly.Msg.esp8266_9 = [["dynamic", "dynamic"], ["static", "static"]];
Blockly.Msg.esp8266_10 = "address";
Blockly.Msg.esp8266_recept_tooltip = "reception";
Blockly.Msg.esp8266_url = "https://github.com/OttoDIY/esp";
Blockly.Msg.esp8266_html_tooltip = "";
Blockly.Msg.esp8266_send_html_tooltip = "";
Blockly.Msg.esp8266_send_html = "傳送 HTML 網頁";
Blockly.Msg.esp8266_start_tooltip = "";
Blockly.Msg.esp8266_start = "啟動伺服器";
Blockly.Msg.esp8266_request_tooltip = "";
Blockly.Msg.esp8266_request = "如果在查詢中找到";
Blockly.Msg.esp8266_request_container = "找到";
//INTERRUPTION
Blockly.Msg.LKL_ATTACHINTERRUPT_PIN = '中斷: 當';
Blockly.Msg.LKL_DETACHINTERRUPT_PIN = "停用中斷功能在腳位";
Blockly.Msg.LKL_TOOLTIP_INOUT_ATTACHINTERRUPT = "Specifies an action to take when an external interrupt (4 possible modes) occurs on pin 2 or 3";
Blockly.Msg.LKL_TOOLTIP_INOUT_DETACHINTERRUPT = "Disable the previously specified external interrupt";
Blockly.Msg.LKL_MODE = 'is detected on the pin';
// FIELDDROPDOWN
Blockly.Msg.note = [[ "DO \u2083", "261"], [ "RE \u2083", "293"], [ "MI \u2083", "329"], [ "FA \u2083", "349"], [ "SOL \u2083", "392"], [ "LA \u2083", "440"], [ "SI \u2083", "493"], [ "DO \u2084", "523 "], [" RE \u2084 "," 587 "], [" MI \u2084 "," 659 "], [" FA \u2084 "," 698 "], [" SOL \u2084 "," 784 "], [ "LA \u2084", "880"]];
Blockly.Msg.tempo = [["\u266B", "125"], ["\u266A", "250"], ["\u2669", "500"],["𝅗𝅥", "1000"], ["𝅝", "2000"]];
Blockly.Msg.on_off = [["on", "LOW"], ["off", "HIGH"]];
Blockly.Msg.menublink = [["slowly", "1000"], ["fast", "100"]];
Blockly.Msg.AV_AR = [[Blockly.Msg.AV, "FORWARD"], [Blockly.Msg.AR, "BACKWARD"]]; // do not translate
Blockly.Msg.times = [["秒", "s"], ["毫秒", "m"], ["微秒", "u"]];
Blockly.Msg.time = [["秒", "s"], ["毫秒", "m"]];
Blockly.Msg.char_lcd = [[ "# 1", "1"], [ "# 2", "2"], [ "3", "3"], [ "# 4", "4"], [ "# 5", "5"], [ "# 6", "6"], [ "No. 7", "7"], [ "# 8", "8 "]];
Blockly.Msg.rxtx = [[ "2", "2"], [ "3", "3"], [ "4", "4"], [ "5", "5"], [ "6 "," 6 "], [" 7 "," 7 "], [" 8 "," 8 "], [" 9 "," 9 "], [" 10 "," 10 "], [" 11 "," 11 "], [" 12 "," 12 "], [" 13 "," 13 "]];
Blockly.Msg.FIELDDROPDOWN = [["1(高電位)", Blockly.Msg.high], ["0(低電位)", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_0_1 = [["上", Blockly.Msg.high], ["下", Blockly.Msg.low]];
Blockly.Msg.ligne = [["1", "0"], ["2", "1"]];
Blockly.Msg.colonne = [[ "1", "0"], [ "2", "1"], [ "3", "2"], [ "4", "3"], [ "5 "," 4 "], [" 6 "," 5 "], [" 7 "," 6 "], [" 8 "," 7 "], [" 9 "," 8 "], [" 10 "," 9 "], [" 11 "," 10 "], [" 12 "," 11 "], [" 13 "," 12 "], [" 14 "," 13 "], [" 15 "," 14 "], [" 16 "," 15 "]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["開啟", Blockly.Msg.high], ["關閉", Blockly.Msg.low]];
Blockly.Msg.FIELDDROPDOWN_ONOFF_matrice = [["1", "true"], ["0", "false"]];
Blockly.Msg.FIELDDROPDOWN_av_ar = [[Blockly.Msg.AV, Blockly.Msg.high], [Blockly.Msg.AR, Blockly.Msg.low]];
Blockly.Msg.LKL_DROPDOWN = [['rising edge', 'RISING'], ['falling edge', 'FALLING'], ['changing state', 'CHANGE'], ['low state', Blockly. Msg.low]];
Blockly.Msg.irq = [['rising edge', 'Pin.IRQ_RISING'], ['falling edge', 'Pin.IRQ_FALLING'], ['high state', 'Pin.IRQ_HIGH_LEVEL'], ["low state "," Pin.IRQ_LOW_LEVEL "]];
Blockly.Msg.menudht = [["濕度", "h"], ["溫度", "t"]];
Blockly.Msg.couleur = [["藍色", "blue"], ["黃色", "yellow"], ["紅色", "red"], ["綠色", "green"]];
Blockly.Msg.sens = [["前進", "a"], ["右轉", "d"], ["左轉", "g"]];
//sensor
Blockly.Msg.VL53L0X="雷射測距感測器";
Blockly.Msg.VL53L0X_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.VL53L0X_distance="雷射測距";
Blockly.Msg.VL53L0X_distance_tooltip="VL530X :\n傳回雷射測距距離(mm)";
Blockly.Msg.bme280="大氣壓力感測器";
Blockly.Msg.bme280_tooltip="initialize sensor.\nSensor <--> Arduino\nSDA <--------> A4\nSCL <--------> A5";
Blockly.Msg.bme280_pressure="大氣壓力";
Blockly.Msg.bme280_pressure_tooltip="BME280 :\n傳回大氣壓力(hPa)";
Blockly.Msg.inter="開關";
Blockly.Msg.inter_tooltip="returns true (false) if the switch is (is not) at the indicated position";
Blockly.Msg.mc005="presence detected on the pin";
Blockly.Msg.mc005_tooltip="MC005:\nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.bp = "button pressed on the pin";
Blockly.Msg.bp_tooltip = "returns true (false) if a pushbutton is (is not) pressed";
Blockly.Msg.dht11_tooltip="DHT11 :\nreturns the humidity of the air (from 20 to 80%) or \n the temperature (from 2 to 50�C)";
Blockly.Msg.dht22_tooltip = "DHT22: \nreturns the humidity of the air (from 0 to 100%) or \n the temperature (from -40 to 80 � C)";
Blockly.Msg.suiveur_ligne = "black line detected on the pin";
Blockly.Msg.suiveur_ligne_tooltip = "CAP227: \nreturns true (false) if a black line is (is not) detected";
Blockly.Msg.light = "brightness on the pin";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.hum = "soil moisture on the pin";
Blockly.Msg.hum_tooltip = "CAP 615: \nreturns soil moisture from 0 to 100%";
Blockly.Msg.light_tooltip = "returns a value depending on the brightness \n0: darkness \n255: full light";
Blockly.Msg.grove_ldr = "brightness on the pin";
Blockly.Msg.grove_ldr_tooltip = "returns the measured brightness \n0: no light \n100: very intense light";
Blockly.Msg.potar = "cursor position on the pin";
Blockly.Msg.potar_tooltip = "returns a value based on the cursor position \n0: cursor left \n255: cursor right";
Blockly.Msg.lm35 = "temperature on the pin";
Blockly.Msg.lm35_tooltip = "LM35: \nreturns the measured temperature in degrees celcius (from 0 to 80 �)";
Blockly.Msg.ultrason_1 = "distance < limit";
Blockly.Msg.ultrason_2 = "returns a High state if the measured distance is less than the limit";
Blockly.Msg.ultrason_distance1 = "distance measured by ultrasound";
Blockly.Msg.ultrason_tooltip = "HC-SR04: \nSound sensor that allows to make distance measurements (of 3 cm and 4 m) \nindicate the pins of the Arduino to which will be connected TRIG and ECHO";
Blockly.Msg.ultrason = "ultrasound pins";
Blockly.Msg.ultrason_distance2 = "HC-SR04: \nreturns the distance measured in cm by the ultrasonic detector";
Blockly.Msg.ultrason_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy"; // do not translate
Blockly.Msg.pir = "motion detected ";
Blockly.Msg.feu = "flame detected ";
Blockly.Msg.presence = "obstacle detected ";
Blockly.Msg.appui = "touch ";
Blockly.Msg.pir_tooltip = "HC-SR501: \nreturns true (false) if a presence is (is not) detected";
Blockly.Msg.feu_tooltip = "CAP168: \nreturns true (false) if a flame is (is not) detected";
Blockly.Msg.presence_tooltip = "CAP711: \nreturns true (false) if a contact has (did not) take place";
Blockly.Msg.appui_tooltip = "CAP831: \nreturns true (false) if a support is (is not) detected";
// bluetooth
Blockly.Msg.bluetooth1 = "if the data received by bluetooth";
Blockly.Msg.bluetooth1_tooltip = "bluetooth data reception \nconnecting module HC-06 to pins 0 and 1 \net cross Rx and Tx pins";
Blockly.Msg.bluetooth2 = "send by bluetooth";
Blockly.Msg.bluetooth2_tooltip = "sends data via bluetooth \nconnecting module HC-06 to pins 0 and 1 \net cross pins Rx and Tx";
Blockly.Msg.bluetooth_init_tooltip = "";
Blockly.Msg.bluetooth_helpurl = "https://wikifactory.com/+OttoDIY/otto-diy-plus"; // do not translate
//LCD screen
Blockly.Msg.lcd_fond = "bottom";
Blockly.Msg.LCD = "LCD screen";
Blockly.Msg.LCDi2c_tooltip = "initializes the 2-line, 16-character I2C LCD with RGB backlight. \n Displayer <-> Arduino \nSDA <--------> A4 \nSCL <- -------> A5 ";
Blockly.Msg.LCD_tooltip = "initializes the LCD, 2 lines and 16 characters, indicating the pins to connect";
Blockly.Msg.LCD_SHIELD_PRINT_HELPURL = "https://www.arduino.cc/en/Tutorial/HelloWorld";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT = "show on LCD";
Blockly.Msg.LCD_SHIELD_PRINT_TEXT_tooltip = "display the text in the specified location";
Blockly.Msg.LCD_SHIELD_PRINT_TOOLTIP = "write the text (s) on the LCD screen";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT1 = "line 1";
Blockly.Msg.LCD_SHIELD_PRINT_INPUT2 = "line 2";
Blockly.Msg.LCD_line = "line";
Blockly.Msg.LCD_col = "column";
Blockly.Msg.LCD_raz = "erase the LCD screen";
Blockly.Msg.LCD_raz_tooltip = "clear screen";
Blockly.Msg.lcd_aff_symbole = "display the symbol";
Blockly.Msg.lcd_aff_symbole_tooltip = "show the symbol that has been defined before";
Blockly.Msg.lcd_symbole = "define the symbol";
Blockly.Msg.lcd_symbole_tooltip = "definition of a character for the LCD: \n 0 turns off a pixel \n 1 lights a pixel";
// structure
Blockly.Msg.loop = "∞ 迴圈";
Blockly.Msg.init = "⚙️ 設定";
Blockly.Msg.base_setup_loop = "The initialization function: \nIt is used to initialize the variables, the direction of the pins ... \nIt is executed only once \nThe loop function: \nThis is the main part of the program, all the blocks placed here will run in loop and indefinitely (several thousand times per second) ";
Blockly.Msg.loop_tooltip = "all blocks placed here will run in a loop and indefinitely (several thousand times per second)";
Blockly.Msg.begin_tooltip = "this block is used to define the order in which the program should execute";
Blockly.Msg.begin = "🏁 開始";
Blockly.Msg.def = "⚙️ 宣告";
Blockly.Msg.def_tooltip = "all the blocks placed here will only be executed once, this is where the different sensors or actuators are configured";
Blockly.Msg.END = "🏁 結束";
Blockly.Msg.END_tooltip = "Stop the program, blocks placed afterwards will be ignored";
Blockly.Msg.code_tooltip = "Type an instruction here that is not in blocks";
//matrix
Blockly.Msg.matriceLC = "put the LED, line";
Blockly.Msg.matrice_create_aff = "Create block 'display symbol %1'";
Blockly.Msg.matrice_create_symbole = "Create the block 'set the symbol %1'";
Blockly.Msg.matrice = "matrix";
Blockly.Msg.matrice8x8_tooltip = "Initialisation of the matrix to 64 LEDs, it is necessary to indicate the pins of the arduino to which will be connected DIN, CLK, CS";
Blockly.Msg.matrice8x8_symbole = "define the symbol";
Blockly.Msg.matrice8x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turn off an LED \n 1 turn on an LED";
Blockly.Msg.matrice8x8_efface = "erase the matrix";
Blockly.Msg.matrice8x8_aff = "display the symbol";
Blockly.Msg.matrice8x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice8x8_del_tooltip = "Turns on (off) an LED in the array indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice8x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice8x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice8x8_helpurl = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.matrice16x8_tooltip = "Initialization of the array to 128 LEDs. \nMatrix <-> Arduino \nSDA <--------> A4 \nSCL <--------> A5";
Blockly.Msg.matrice16x8_symbole = "define the symbol";
Blockly.Msg.matrice16x8_symbole_tooltip = "definition of a symbol for the matrix: \n 0 turns off an LED \n 1 turns on an LED";
Blockly.Msg.matrice16x8_efface = "turn off the LEDs of the matrix";
Blockly.Msg.matrice16x8_aff = "display the symbol";
Blockly.Msg.matrice16x8_binaire_tooltip = "1 turns on an LED of the matrix and 0 turns it off";
Blockly.Msg.matrice16x8_del_tooltip = "Turns on (off) an LED in the matrix indicating its coordinates \nCaution dialing starts at 0";
Blockly.Msg.matrice16x8_aff_tooltip = "Display the symbol that has been previously defined";
Blockly.Msg.matrice16x8_efface_tooltip = "Turn off all LEDs in the matrix";
Blockly.Msg.matrice16x8_helpurl = "";
//time
Blockly.Msg.millis ="time elapsed in";
Blockly.Msg.millis_start="啟動一個計時器";
Blockly.Msg.millis_tooltip="";
Blockly.Msg.millis_start_tooltip="";
Blockly.Msg.ARDUINO_INOUT_Pulsein = "returns the duration in 微秒 of a UP or DOWN pulse applied to a pin.If the parameter value is HIGH, the block waits for the pin to go HIGH, starts then the timing, waits for the pin to go back to the LOW level and then stop the timing ";
Blockly.Msg.ARDUINO_BASE_DELAY = "⏲ 延遲";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "Specify the wait time in 秒, 毫秒 or 微秒. \nThe program does nothing else during this time";
Blockly.Msg.millis1 = "持續時間以";
Blockly.Msg.millis2 = "從頭開始";
Blockly.Msg.ARDUINO_SINCE_PROGRAM_STARTED_TOOLTIP = "returns the duration in 毫秒, 秒 or 微秒 since the program started";
Blockly.Msg.ARDUINO_PULSEIN = "狀態持續";
Blockly.Msg.tempo_helpurl = "https://www.arduino.cc/en/tutorial/blink";
Blockly.Msg.tempo_tooltip = "This block checks if the indicated time has arrived, if it is the case then it executes the blocks placed inside .. Unlike the block 'to wait' this one is not blocking." ;
Blockly.Msg.tempo1 = "全部";
//OLED
Blockly.Msg.lp2i_u8g_draw_string = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_string_Text = "text to display =";
Blockly.Msg.lp2i_u8g_draw_string_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_draw_string_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_draw_4strings = "OLED I2C display";
Blockly.Msg.lp2i_u8g_draw_4strings_texts_to_display = "texts to display :";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_draw_4strings_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_print_N = "Number to display ="
Blockly.Msg.lp2i_u8g_print_X = "raw x (127 max) =";
Blockly.Msg.lp2i_u8g_print_Y = "line y (63 max) =";
Blockly.Msg.lp2i_u8g_4draw_print = "OLED I2C display";
Blockly.Msg.lp2i_u8g_4draw_print_to_display = "to display :";
Blockly.Msg.lp2i_u8g_4draw_print_Text_line1 = "line 1 =";
Blockly.Msg.lp2i_u8g_4draw_print_N1 = "Number 1 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line2 = "line 2 =";
Blockly.Msg.lp2i_u8g_4draw_print_N2 = "Number 2 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line3 = "line 3 =";
Blockly.Msg.lp2i_u8g_4draw_print_N3 = "Number 3 (at end) ="
Blockly.Msg.lp2i_u8g_4draw_print_Text_line4 = "line 4 =";
Blockly.Msg.lp2i_u8g_4draw_print_N4 = "Number 4 (at end) ="

// LED
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "板子上的LED";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "開啟或關閉Arduino板子上的LED";
Blockly.Msg.blink = "板子上的LED閃爍";
Blockly.Msg.blink_tooltip = "板子上的LED 每秒閃爍 1 次 或 10 次";
Blockly.Msg.del = "LED在腳位";
Blockly.Msg.del_tooltip = "turns on (off) the LED connected to the indicated pin";
Blockly.Msg.bargraphe = "bargraph";
Blockly.Msg.bargraphe_allume="turn on LEDs to";
Blockly.Msg.bargraphe_allume_tooltip="0 lights no LEDs \n2,5 lights up the first 2 LEDs and the 3rd half turns on \n10 turns on all LEDs";
Blockly.Msg.bargraphe_tooltip = "bargraph module composed of 10 LEDs (8 綠色, 1 黃色 and 1 紅色), it is necessary to indicate the pins of the arduino on which will be connected DCKI and DI";
Blockly.Msg.rvb_init="LED RGB";
Blockly.Msg.rvb_init_tooltip="indicate the PWM pins to connect to the RGB LED";
Blockly.Msg.rvb_set="show color";
Blockly.Msg.rvb_set_tooltip="displays a color indicating a value for the three components (紅色, 綠色, 藍色)";
Blockly.Msg.pixel1 = "RGB NeoPixel";
Blockly.Msg.pixel2 = "update pixels";
Blockly.Msg.pixel3 = "with color";
Blockly.Msg.pixel4 = "number";
Blockly.Msg.pixel5 = "set pixel brightness to";
Blockly.Msg.pixel6 = "set the pixel";
Blockly.Msg.pixel1_tooltip="neopixel RGB module indicate the pin to be connected and the number of pixels";
Blockly.Msg.pixel2_tooltip="show changes made";
Blockly.Msg.pixel5_tooltip="adjusts pixel brightness (from 0 to 255)";
Blockly.Msg.pixel3_tooltip="choose the pixel to light and its color \ nCaution the numbering starts at 0";
// output
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "put the DIGITAL pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "write a 0 or 1 logical state to a specific output";
Blockly.Msg.toggle = "toggle the state of the pin";
Blockly.Msg.toggle_tooltip = "Toggle: \n write a logical state 0 if before there was a state 1 (and vice versa) on the specified output";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "put the PWM pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "send a value between 0 and 255 on a specific output";
// input
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "DIGITAL pin state";
Blockly.Msg.in_pullup = "Pull-Up";
Blockly.Msg.in_pullup_tooltip = "returns the logical state (0 or 1) of the indicated pin \nreturns 1 (high state) by default if pull-up enabled";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "read logical state 0 or 1 of the digital pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "ANALOG pin value";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "returns a value between 0 and 1023";
// audio
Blockly.Msg.play = "播放";
Blockly.Msg.play_tooltip = "play the note";
Blockly.Msg.play_helpurl = "";
Blockly.Msg.beep = "beep on the pin";
Blockly.Msg.beep_TOOLTIP = "beeps (at 440Hz for 1s) on the selected pin";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emit a sound on the pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "frequency (Hz)";
Blockly.Msg.ARDUINO_TONE_INPUT3 = "duration (ms)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emit a sound on the selected pin, at the desired frequency and for the desired duration";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stop the sound on the pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "stop the sound on the selected pin";
Blockly.Msg.lp2i_mp3_helpurl = "https://wiki.dfrobot.com/DFPlayer_Mini_SKU_DFR0299";
Blockly.Msg.lp2i_mp3_Volume = "volume [0-48]";
Blockly.Msg.lp2i_mp3_autoplay = "AutoPlay";
Blockly.Msg.lp2i_mp3 = "MP3 player";
Blockly.Msg.lp2i_mp3_tooltip = "DFPlayer Mini mp3: \ninitialization of the module, volume and operating mode \nModule MP3 <-> Arduino \nRx (2) <------------- -> Tx (1) ";
Blockly.Msg.lp2i_mp3_play = "play the mp3 file";
Blockly.Msg.lp2i_mp3_play_track_tooltip = "play the specified song";
Blockly.Msg.lp2i_mp3_play_tooltip = "plays the current song";
Blockly.Msg.lp2i_mp3_pause = "pause mp3 file";
Blockly.Msg.lp2i_mp3_pause_tooltip = "stop the current song";
Blockly.Msg.lp2i_mp3_prev = "read the previous mp3 file";
Blockly.Msg.lp2i_mp3_prev_tooltip = "play the previous track";
Blockly.Msg.lp2i_mp3_vol = "set the volume to";
Blockly.Msg.lp2i_mp3_vol_tooltip = "set the volume to the specified value [0-48]";
Blockly.Msg.lp2i_mp3_next = "read the following mp3 file";
Blockly.Msg.lp2i_mp3_next_tooltip = "plays the next song";
// servomotor
Blockly.Msg.ARDUINO_SERVO_MOVE_INPUT1 = "旋轉";
Blockly.Msg.ARDUINO_SERVO_MOVE_DEGREE = "至角度 [0°-180°]";
Blockly.Msg.ARDUINO_SERVO_MOVE_TOOLTIP = "possible rotation between 0 and 180 degrees";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TEXT = "舵機腳位";
Blockly.Msg.ARDUINO_SERVO_ROT_CONTINUE_TOOLTIP = "Spin the servo connected to the specified pin, at the indicated speed and in the selected direction";
//engine
Blockly.Msg.mot_tooltip = "Shield motor controller L293D: \n activates both motors (M1 and M2) to advance or turn, the speed can be set between 0 and 90";
Blockly.Msg.mot_stop = "stop";
Blockly.Msg.mot_stop_tooltip = "L293D Motor Controller Shield: \nstop the two motors (M1 and M2)";
Blockly.Msg.moteur = "activate the engine";
Blockly.Msg.moteurstop = "stop the engine";
Blockly.Msg.moteur_tooltip = "starts the DC motor connected to the specified pin, at the indicated speed \nspeed = 0 -> motor stop";
Blockly.Msg.moteurdagu_tooltiprs040 = "RS 040 board: \n activates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.moteurdagu_tooltiprs040stop = "RS 040 board: \nstop one of the 2 motors";
Blockly.Msg.moteurdagu_tooltiprs027 = "RS 027 board: \n operates one of the 2 outputs to drive DC motors, the speed can be set between 0 and 90";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR1 = "v1 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR2 = "v2 - DC Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_DIRECTION = "direction";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_VITESSE = Blockly.Msg.vitesse+"[0-255]";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT = "前進";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE = "backward";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_STOP = "stop";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP1 = "v1 - Stepper Motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_PAP2 = "v2 - stepper motor";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_CONNECT = "pin";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_PPT = "not per turn";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_RPM = "speed (RPM)";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTOR_NB_PAS = "number of steps";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC1 = "DC 1 engine";
Blockly.Msg.ADAFRUIT_MOTORSHIELD_MOTORDC2 = "DC 2 engine";
Blockly.Msg.m_pap="step-by-step engine";
Blockly.Msg.m_pap_step="step";
Blockly.Msg.m_pap_step1="move forward";
Blockly.Msg.m_pap_tooltip = "Initialization of a stepping motor. \nIndicate number of steps, speed in rpm and pins to connect";
Blockly.Msg.m_pap_step_tooltip = "activates the stepping motor by the number of steps indicated, the following instruction will only be executed once the rotation of the motor is done";
// serial
Blockly.Msg.Serial_Init = "serial port on";
Blockly.Msg.Serial_Init_tooltip = "Set the communication rate in characters per second for serial communication";
Blockly.Msg.Serial_Write = "send to serial port";
Blockly.Msg.Serial_write_tooltip = "Send data to the serial port";
Blockly.Msg.Serial_read = "data read on the serial port";
Blockly.Msg.Serial_read_tooltip = "returns the first available data byte available in the serial port, or -1 if no data is available";
Blockly.Msg.Serial_available = "amount of data on the serial port";
Blockly.Msg.Serial_available_tooltip = "returns the number of bytes available in the serial port queue, or 0 if nothing is available";
Blockly.Msg.Serial_saut = "a line break";
Blockly.Msg.Serial_saut_tooltip = "returns a line break on the serial monitor";
Blockly.Msg.Serial_space = "a separator";
Blockly.Msg.Serial_space_tooltip = "return a space on the serial monitor";
Blockly.Msg.repl_read = "user entered command";
// software serial
Blockly.Msg.SSERIAL_Init = "software port on Rx";
Blockly.Msg.SSERIAL_tooltip = "Creating a new communication port using the specified pins and speed";
Blockly.Msg.SSERIAL_Read = "data read on the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Write = "send to the software port";
Blockly.Msg.SSERIAL_Write_tooltip = "Send data to the software port";
Blockly.Msg.SSERIAL_Read_tooltip = "returns the first byte of incoming data available in the software port, or -1 if no data is available";
Blockly.Msg.SSERIAL_Available = "amount of data on the software port";
Blockly.Msg.SSERIAL_Available_tooltip = "returns the number of available bytes in the software port queue, or 0 if nothing is available";
////////////////////////////OTTO DIY Robot/////////////////////
Blockly.Msg.OTTO9_HOME_TEXT = "站立";
Blockly.Msg.OTTO9_HOME_TOOLTIP = "OTTO回復到站立準備";
Blockly.Msg.OTTO9_DIY_URL = "https://wikifactory.com/+OttoDIY/otto-diy";
Blockly.Msg.OTTO9_HUMANOID_URL = "https://wikifactory.com/+OttoDIY/humanoid";
Blockly.Msg.OTTO9_CALIBRATION='校準 ';
Blockly.Msg.OTTO9_CALIBRATION_LEG='腿 ';
Blockly.Msg.OTTO9_CALIBRATION_FOOT='腳 ';
Blockly.Msg.OTTO9_CALIBRATION_ARM='手臂 ';
Blockly.Msg.OTTO9_CALIBRATION_TOOLTIP='用很小的增加或减小數值,逐漸改變到完全垂直 (90º)';
Blockly.Msg.OTTO9_EEPROM_TEXT= '保存 Trims 到 EEPROM';
Blockly.Msg.OTTO9_EEPROM_TOOLTIP= '仅在第一是使舵机完全90°时候使用， 在以后的编程里面删除这个语句';
Blockly.Msg.OTTO9_MOVE_TEXT = "動作";
Blockly.Msg.OTTO9_MOVE_TOOLTIP = "Otto 基本動作";
Blockly.Msg.OTTO9_MOVE_CHOICE = [["↑ 前進", "FORWARD"], ["↓ 後退", "BACKWARD"], ["↺ 往左", "LEFT"], ["↻ 往右", "RIGHT"], ["彎向左", "BENDLEFT"], ["彎向右", "BENDRIGHT"], ["抖左腿", "SHAKELEFT"], ["抖右腿", "SHAKERIGHT"], ["上", "跳"]];
Blockly.Msg.OTTO9_MOVEW_CHOICE = [["↑ 前進", "FORWARD"], ["↓ 後退", "BACKWARD"], ["↺ 往左", "LEFT"], ["↻ 往右", "RIGHT"]];
Blockly.Msg.OTTO9_MOVE_SPEED_TEXT = "速度";
Blockly.Msg.OTTO9_MOVE_SPEED_CHOICE = [["正常", "1000"],["慢", "2000"],["很慢", "3000"] , ["快", "750"], ["很快", "500"], ["非常快", "250"]];
Blockly.Msg.OTTO9_MOVEW_SPEED_CHOICE = [["正常", "45"],["慢", "20"],["很慢", "10"] , ["快", "60"], ["很快", "90"]];
Blockly.Msg.OTTO9_DANCE_TEXT = "跳舞";
Blockly.Msg.OTTO9_DANCE_TOOLTIP = "Otto 跳舞!";
Blockly.Msg.OTTO9_DANCE_CHOICE = [["太空步左 ⟵", "moonwalkerLEFT"],  ["太空步右 ⟶", "moonwalkerRIGHT"],["滑步 ⟵", "crusaitoLEFT"],["滑步 ⟶", "crusaitoRIGHT"], ["踮腳尖 ↑", "flappingFRONT"], ["踮腳尖 ↓", "flappingBACK"]];
Blockly.Msg.OTTO9_DANCE_SIZE_TEXT = "大小";
Blockly.Msg.OTTO9_DANCE_SIZE_CHOICE = [["正常", "25"], ["小", "10"], ["大", "40"]];
Blockly.Msg.OTTO9_DO_TEXT = "做";
Blockly.Msg.OTTO9_DO_TOOLTIP = "Otto complex movements";
Blockly.Msg.OTTO9_DO_CHOICE = [ ["搖擺", "swing"], ["上下", "updown"], ["踮腳尖搖擺", "tiptoeSwing"], ["晃動", "jitter"], ["向上旋轉", "ascendingTurn"]];
Blockly.Msg.OTTO9_GESTURE_TEXT = "姿勢";
Blockly.Msg.OTTO9_GESTURE_TOOLTIP = "情感聲音與動作";
Blockly.Msg.OTTO9_GESTURE_CHOICE = [["😃 快樂1", "OttoSuperHappy"],["🙂 快樂2", "OttoHappy"], ["🙁 悲傷", "OttoSad"], ["😴 睡覺", "OttoSleeping"], ["😕 困惑", "OttoConfused"], ["😰 焦躁", "OttoFretful"], ["😍 愛", "OttoLove"], ["😡 生氣", "OttoAngry"], ["🤩 魔法", "OttoMagic"], ["😐 波形", "OttoWave"], [" 😎 勝利", "OttoVictory"], ["😞 失敗", "OttoFail"], ["💩 放屁", "OttoFart"]];
Blockly.Msg.OTTO9_SOUND_TEXT = "聲音";
Blockly.Msg.OTTO9_SOUND_TOOLTIP = "情感聲音";
Blockly.Msg.OTTO9_SOUND_CHOICE = [ ["😃 快樂", "S_superHappy"], ["🙂 快樂2", "S_happy"], ["😊 快樂3", "S_happy_short"], ["🙁 悲傷", "S_sad"], ["😕 困惑", "S_confused"], ["🤗 擁抱", "S_cuddly"], ["😮 喔", "S_OhOoh"], ["😯 喔喔", "S_OhOoh2"], ["😲 驚喜", "S_surprise"],["🤖 連接", "S_connection"], [" 🤖 失去連接", "S_disconnection"], ["👇 按下", "S_buttonPushed"], ["❗ 1", "S_mode1"], ["❗❗ 2", "S_mode2"], ["❗❗❗ 3", "S_mode3"], ["💤 睡覺", "S_sleeping"], ["💩 放屁1", "S_fart1"], ["💩 放屁2", "S_fart2"], ["💩 放屁3", "S_fart3"],];
Blockly.Msg.OTTO9_GETDISTANCE_TEXT = "距離 [cm]";
Blockly.Msg.OTTO9_GETDISTANCE_TOOLTIP = "距離範圍 2cm 到 400cm";
Blockly.Msg.OTTO9_GETOBSTACLE_TEXT = "障礙物";
Blockly.Msg.OTTO9_OBSTACLE_CHOICE = [["近", "10"],["很近", "3"],["遠", "30"]];
Blockly.Msg.OTTO9_GETNOISE_TEXT = "noise measured";
Blockly.Msg.OTTO9_GETNOISE_TOOLTIP = "100 is quiet, 500 noise and more than 1000 is loud, also adjust the sensor trimpot sensibility";
Blockly.Msg.OTTO9_GETTOUCH_TEXT = "touch";
Blockly.Msg.OTTO9_GETTOUCH_TOOLTIP = "use if conditional";
Blockly.Msg.OTTO9_GETG_TEXT = "motion";
Blockly.Msg.OTTO9_MOUTH_TEXT = "mouth";
Blockly.Msg.OTTO9_MOUTH_TOOLTIP = "mouth emotion for the 8x8 LED matrix #0-30";
Blockly.Msg.OTTO9_MOUTH_CHOICE = [["😃 快樂1", "happyOpen"],["🙂 快樂2", "happyClosed"], ["😊 微笑", "smile"], ["😦 悲傷1", "23"], ["🙁 悲傷2", "24"], ["😮 驚喜1", "smallSurprise"], ["😲 驚喜2", "bigSurprise"], ["😕 困惑", "confused"],["😛 吐舌頭", "tongueOut"],["🙃 傻瓜", "culito"],  ["😑 嚴肅", "lineMouth"], ["🙄 心煩", "21"], ["💖 愛心", "heart"], ["🦇 v1", "vamp1"], ["🦇 v2", "vamp2"], ["❌ no", "xMouth"], ["✅ OK", "okMouth"],["❓?", "27"], ["⚡ thunder", "thunder"]];
Blockly.Msg.OTTO9_EYES_TEXT = "眼睛";
Blockly.Msg.OTTO9_EYES_TOOLTIP = "eyes emotion for the 16x8 i2C LED matrix ";
Blockly.Msg.OTTO9_EYES_CHOICE = [["😃 快樂1", "happy_bmp"],["🙂 快樂2", "eyes_bmp"], ["😦 悲傷", "sad_bmp"], ["😡 生氣1", "angry_bmp"], ["😡 生氣2", "angry2_bmp"], ["😰 焦躁", "freetful_bmp"], ["😕 困惑", "confused_bmp"],["😴 睡覺", "sleep_bmp"],["😍 愛", "love_bmp"],  ["😑 波紋", "wave_bmp"], ["🤩 魔法", "magic_bmp"], ["😞 失敗", "fail_bmp"], ["🤖 logo", "logo_bmp"], ["❌❌ no", "XX_bmp"], ["x x", "xx_bmp"],["▉", "full_bmp"]];
Blockly.Msg.OTTO9_EYESTEXT_TEXT = "eyes text";
Blockly.Msg.OTTO9_EYES_CLEAR_TEXT = " clear eyes";
Blockly.Msg.OTTO9_MATRIX_TOOLTIP = "limited to CAPITALS A to Z NUMBERS 0 to 9 : ; < >  = @, max.9 characters";
Blockly.Msg.OTTO9_MATRIXTEXT_TEXT = "mouth text";
Blockly.Msg.OTTO9_CLEAR_TEXT = " clear mouth";
Blockly.Msg.OTTO9_CLEAR_TOOLTIP = "Turn off all LEDs of the mouth matrix 8x8";
Blockly.Msg.OTTO9_ARMS_TEXT = "arms";
Blockly.Msg.OTTO9_ARMS_TOOLTIP = "move the arms!";
Blockly.Msg.OTTO9_ARMS_CHOICE = [["hands up", "HANDSUP"], ["handwave left", "HANDWAVE1"], ["handwave right", "HANDWAVE2"]];
