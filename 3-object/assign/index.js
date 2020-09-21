export default function addSerialNumber(source) {
  Object.assign(source.properties, {
    color: 'green',
    status: 'processed'
  });
  Object.assign(source, {
    serialNumber: '12345'
  });
  return source;
}
