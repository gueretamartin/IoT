#include <WiFi.h>
#include "aWOT.h"
#include "StaticFiles.h"
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

#define WIFI_SSID "Fibertel WiFi250 2.4GHz"
#define WIFI_PASSWORD "00437185647"
#define LED_BUILTIN 2

//Sensor 
#define SEALEVELPRESSURE_HPA (1013.25)
Adafruit_BME280 bme;

unsigned long delayTime;

WiFiServer server(80);
Application app;
bool ledOn; 

   void readLed(Request &req, Response &res) {
     res.print(ledOn);
   }

   void readTemperature(Request &req, Response &res) {
      res.print(bme.readTemperature());
   }
  
  void updateLed(Request &req, Response &res) {
   ledOn = (req.read() != '0');
     digitalWrite(LED_BUILTIN, ledOn);
     return readLed(req, res);
  }

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(WiFi.localIP());
  app.get("/led", &readLed);
  app.get("/getTemperature", &readTemperature);
  app.put("/led", &updateLed);
  app.use(staticFiles());
    bool status;

  status = bme.begin(0x76);  
  server.begin();
}

void loop() {
  WiFiClient client = server.available(); 
  if (client.connected()) {
    app.process(&client);
  } 
}

