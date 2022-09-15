import Base from './Base';
class Path extends Base {
  constructor(props) {
    super(props);
    this.state = {
      type: 'path',
      maskID: 'progress_path_mask',
    };
  }
  get perimeter() {
    return this.props.pathLength;
  }
  get centerPoint() {
    const x = this.props.width / 2;
    const y = this.props.height / 2;
    return { x, y };
  }
  render() {
    const { width, height, isDashed, pathLength, d, showText, slot } = this.props;
    const isShowText = showText && !slot;
    const { maskID } = this.state;
    return (
      <div className="svg-container" style={{ width: width + 'px', height: height + 'px' }}>
        <svg width={width} height={height}>
          {isDashed && (
            <mask id={maskID}>
              <path className="progress-all__mask" pathLength={pathLength} d={d} style={this.maskStyle} />
            </mask>
          )}
          <g>
            <path className="progress-path__back" pathLength={pathLength} d={d} style={this.backgroundStyle} />
            <path className="progress-path__item" pathLength={pathLength} d={d} fill="none" style={this.style} />
            {isShowText && (
              <text
                x={this.centerPoint.x}
                y={this.centerPoint.y}
                textAnchor="middle"
                dominantBaseline="middle"
                style={this.svgTextStyle}
              >
                {this.content}
              </text>
            )}
          </g>
        </svg>
        <div className="slot-container">{slot}</div>
      </div>
    );
  }
}

export default Path;
