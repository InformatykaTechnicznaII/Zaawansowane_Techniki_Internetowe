#ifndef THERMOSTAT_ICE
#define THERMOSTAT_ICE

module ThermostatModule

{

  exception NoInput {};

  interface Thermostat
  {
    idempotent int getTemperature();
    idempotent bool setTemperature(int temperature);
  };

};

#endif
