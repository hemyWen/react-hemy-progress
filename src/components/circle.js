//圆环
import Base from './Base'
class Circle extends Base {
  constructor(props) {
    super(props)
    this.state = {
      type: 'circle',
      maskID: 'progress_circle_mask'
    }
  }
  get centerPoint() {
    const x = this.props.width / 2
    const y = x
    return { x, y }
  }
  //环形周长
  get perimeter() {
    return 2 * Math.PI * this.props.radius
  }
  render() {
    const { width, isDashed, radius, showText } = this.props
    return (
      <div className="progress-circle">
        <svg width={width} height={width}>
          {isDashed && (
            <mask id={this.state.maskID}>
              <circle
                className="progress-all__mask"
                cx={this.centerPoint.x}
                cy={this.centerPoint.y}
                r={radius}
                fill="none"
                style={this.maskStyle}
              />
            </mask>
          )}
          <g>
            <circle
              className="progress-circle__back"
              cx={this.centerPoint.x}
              cy={this.centerPoint.y}
              r={radius}
              fill="none"
              style={this.backgroundStyle}
            />
            <circle
              className="progress-circle__item"
              cx={this.centerPoint.x}
              cy={this.centerPoint.y}
              r={radius}
              style={this.style}
            />
            {showText && (
              <text
                className="progress-circle-text"
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
      </div>
    )
  }
}

export default Circle
