document.querySelectorAll('svg').forEach(function(svg){;
const columnElement = document.querySelector('.icon-section');

const columnWidth = columnElement.offsetWidth;
const columnHeight = columnElement.offsetHeight;
const numHorizontalLines=50;

const horizontalSpacing = columnHeight / numHorizontalLines;
const verticalSpacing = horizontalSpacing;

const numVerticalLines=columnHeight/verticalSpacing;

for (let i = 1; i < numHorizontalLines; i++) {
  const y = i * horizontalSpacing;
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', '0');
  line.setAttribute('y1', y.toString());
  line.setAttribute('x2', '100%');
  line.setAttribute('y2', y.toString());
  line.setAttribute('stroke', 'black');
  svg.appendChild(line);
}

for (let i = 0; i < numVerticalLines; i++) {
  const x = i * verticalSpacing+verticalSpacing/2;
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x.toString());
  line.setAttribute('y1', '0');
  line.setAttribute('x2', x.toString());
  line.setAttribute('y2', '100%');
  line.setAttribute('stroke', 'black');
  svg.appendChild(line);
}

});

