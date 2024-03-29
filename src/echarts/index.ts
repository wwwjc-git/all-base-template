import * as echarts from 'echarts/core'

import {
  // BarChart,
  // BoxplotChart,
  // CandlestickChart,
  // CustomChart,
  // EffectScatterChart,
  // FunnelChart,
  // GaugeChart,
  // GraphChart,
  // HeatmapChart,
  LineChart
  // LinesChart,
  // MapChart,
  // ParallelChart,
  // PictorialBarChart,
  // PieChart,
  // RadarChart,
  // SankeyChart,
  // ScatterChart,
  // SunburstChart,
  // ThemeRiverChart,
  // TreeChart,
  // TreemapChart,
} from 'echarts/charts'
import {
  // AriaComponent,
  AxisPointerComponent,
  // BrushComponent,
  // CalendarComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // DatasetComponent,
  // GeoComponent,
  // GraphicComponent,
  GridComponent,
  // GridSimpleComponent,
  LegendComponent,
  // LegendPlainComponent,
  // LegendScrollComponent,
  // MarkAreaComponent,
  // MarkLineComponent,
  // MarkPointComponent,
  // ParallelComponent,
  // PolarComponent,
  // RadarComponent,
  // SingleAxisComponent,
  // TimelineComponent,
  TitleComponent,
  // ToolboxComponent,
  TooltipComponent
  // TransformComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  // BarChart,
  // BoxplotChart,
  // CandlestickChart,
  // CustomChart,
  // EffectScatterChart,
  // FunnelChart,
  // GaugeChart,
  // GraphChart,
  // HeatmapChart,
  LineChart,
  // LinesChart,
  // MapChart,
  // ParallelChart,
  // PictorialBarChart,
  // PieChart,
  // RadarChart,
  // SankeyChart,
  // ScatterChart,
  // SunburstChart,
  // ThemeRiverChart,
  // TreeChart,
  // TreemapChart,
  // AriaComponent,
  AxisPointerComponent,
  // BrushComponent,
  // CalendarComponent,
  // DataZoomComponent,
  // DataZoomInsideComponent,
  // DataZoomSliderComponent,
  // DatasetComponent,
  // GeoComponent,
  // GraphicComponent,
  GridComponent,
  // GridSimpleComponent,
  LegendComponent,
  // LegendPlainComponent,
  // LegendScrollComponent,
  // MarkAreaComponent,
  // MarkLineComponent,
  // MarkPointComponent,
  // ParallelComponent,
  // PolarComponent,
  // RadarComponent,
  // SingleAxisComponent,
  // TimelineComponent,
  TitleComponent,
  // ToolboxComponent,
  TooltipComponent,
  // TransformComponent,
  // VisualMapComponent,
  // VisualMapContinuousComponent,
  // VisualMapPiecewiseComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default echarts
