import * as echarts from 'echarts/core'

import {
  // BarSeriesOption,
  // BoxplotSeriesOption,
  // CandlestickSeriesOption,
  // CustomSeriesOption,
  // EffectScatterSeriesOption,
  // FunnelSeriesOption,
  // GaugeSeriesOption,
  // GraphSeriesOption,
  // HeatmapSeriesOption,
  LineSeriesOption
  // LinesSeriesOption,
  // MapSeriesOption,
  // ParallelSeriesOption,
  // PictorialBarSeriesOption,
  // PieSeriesOption,
  // RadarSeriesOption,
  // SankeySeriesOption,
  // ScatterSeriesOption,
  // SunburstSeriesOption,
  // ThemeRiverSeriesOption,
  // TreeSeriesOption,
  // TreemapSeriesOption
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  // AriaComponentOption,
  AxisPointerComponentOption,
  // BrushComponentOption,
  // CalendarComponentOption,
  // DataZoomComponentOption,
  // DatasetComponentOption,
  // GeoComponentOption,
  // GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  // MarkAreaComponentOption,
  // MarkLineComponentOption,
  // MarkPointComponentOption,
  // ParallelComponentOption,
  // PolarComponentOption,
  // RadarComponentOption,
  // SingleAxisComponentOption,
  // TimelineComponentOption,
  TitleComponentOption,
  // ToolboxComponentOption,
  TooltipComponentOption
  // VisualMapComponentOption,
} from 'echarts/components'

type ECOption = echarts.ComposeOption<
  | AxisPointerComponentOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  >
