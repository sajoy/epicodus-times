epicodusTimes.factory("DivisionsFactory", function DivisionsFactory() {
  var factory = {};
  factory.divisions = [];
  factory.test = function() {
    alert('i communicate with the factory');
  };
  factory.addDivision = function() {
    factory.divisions.push({ name: factory.divisionName, id: factory.divisions.length + 1, reporters: [] });
    factory.divisionName = null;
  };
  return factory;
});
