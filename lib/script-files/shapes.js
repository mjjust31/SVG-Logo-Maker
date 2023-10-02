class Shape {
  constructor(stroke, fill) {
    this.fill = fill;
    this.stroke = stroke;
  }
}

class Circle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
  }

  renderCircle() {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="250" cy="250" r="200" stroke="${this.stroke}" fill="${this.fill}"/>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
  }

  renderSquare() {
    return `<svg width="500" height="500" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="100" width="300" height="300" stroke="${this.stroke}" fill = '${this.fill} />
    </svg>`;
  }
}

class Triangle extends Shape {
  constructor(stroke, fill) {
    super(stroke, fill);
  }

  renderTriangle() {
    return `<svg
    width="500"
    height="500"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <polygon
      points="250,60 100,400 400,400"
      stroke="${this.stroke}"
      fill="${this.fill}"
      stroke-width="5" />
      <text x="20" y="35" class="small">Testing location</text>
    </svg>`;
  }
}

module.exports = {
  Shape,
  Circle,
  Square,
  Triangle,
};
