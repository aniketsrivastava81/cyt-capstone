navigator.connection.addEventListener('change', logNetworkInfo);

function logNetworkInfo() {
  // Network type that browser uses
  document.write('type: ' + navigator.connection.type+"<br/>");

  // Effective bandwidth estimate
  document.write('downlink: ' + navigator.connection.downlink + ' Mb/s'+"<br/>");

  // Effective round-trip time estimate
  document.write('rtt: ' + navigator.connection.rtt + ' ms'+"<br/>");

  // Upper bound on the downlink speed of the first network hop
  document.write('downlinkMax: ' + navigator.connection.downlinkMax + ' Mb/s'+"<br/>");

  // Effective connection type determined using a combination of recently
  // observed rtt and downlink values: ' +
  document.write('effectiveType: ' + navigator.connection.effectiveType+"<br/>");
  
  // True if the user has requested a reduced data usage mode from the user
  // agent.
  document.write('saveData: ' + navigator.connection.saveData+"<br/>");
  
  // Add whitespace for readability
  document.write('');
}

logNetworkInfo();